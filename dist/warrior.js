"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
class Warrior {
    constructor(name, hp, type, ability, armour, evasion, weapon) {
        this.name = name;
        this.hp = hp;
        this.type = type;
        this.ability = ability;
        this.armour = armour;
        this.evasion = evasion;
        this.weapon = weapon;
        this.baseEvasion = evasion;
        this.baseArmour = armour;
    }
    getRandomDamegeRange() {
        return Math.floor(Math.random() * (this.weapon.damage[1] - this.weapon.damage[0])) + this.weapon.damage[0];
    }
    finalDamage(damage) {
        return this.armour > 0 ? (damage - Math.floor(this.armour / 3)) : damage;
    }
    attack() {
        //If hero can not use the weapon, return 0
        if (!(this.weapon.heroType.includes(this.type))) {
            return 0;
        }
        //Generate random damage between the weapon's damage range
        let damage = this.getRandomDamegeRange();
        // 10% chance to activate ability
        if (Math.random() < 0.1) {
            switch (this.ability) {
                // +20 damage
                case 'FireStorm':
                    damage *= 1.2;
                    break;
                // +15 damage
                case 'HeadShot':
                    damage *= 1.15;
                    break;
                case 'Heal':
                    // More than 100 HP is not allowed
                    this.hp = Math.min(this.hp * 1.1, 100);
                    break;
                default:
                    break;
            }
        }
        return damage;
    }
    // 10% chance to activate ability
    defend(damage) {
        // Reset evasion to base value at the start of each round
        this.evasion = this.baseEvasion;
        this.armour = this.baseArmour;
        // 10% chance to activate ability
        if (Math.random() < 0.1) {
            switch (this.ability) {
                case 'Armour Boost':
                    this.armour *= 1.1;
                    break;
                case 'Dodge':
                    this.evasion = 100;
                    break;
                case 'Heal':
                    this.hp = Math.min(this.hp * 1.1, 100);
                    break;
                default:
                    break;
            }
        }
        // Random number between 0 and 1
        const evasionChance = Math.random();
        if (evasionChance < this.evasion / 100) {
            return this.hp;
        }
        // If the armour is greater than 0, reduce the damage by 1/3 of the armour
        const damageAfterArmour = this.finalDamage(damage);
        const realDamage = Math.max(damageAfterArmour, 0);
        this.hp -= realDamage;
        if (this.hp < 0) {
            this.hp = 0;
        }
        return this.hp; // Return the actual damage taken
    }
}
exports.Warrior = Warrior;
