"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
class Weapon {
    constructor(name, heroType, damage, hitChance) {
        this.name = name;
        this.heroType = heroType;
        this.damage = damage;
        this.hitChance = hitChance;
        this.baseDamage = damage;
    }
}
exports.Weapon = Weapon;
