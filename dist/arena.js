"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arena = void 0;
class Arena {
    constructor(hero1, hero2) {
        this.hero1 = hero1;
        this.hero2 = hero2;
    }
    get setFirstAttackerHero() {
        return Math.random() < 0.5 ? this.hero1 : this.hero2;
    }
    tournament() {
        // Initialize round counter
        let round = 1;
        // Fight until one of the heroes dies
        while (this.hero1.hp > 0 && this.hero2.hp > 0) {
            // Randomly select which hero attacks first
            const firstHero = this.setFirstAttackerHero;
            const secondHero = firstHero === this.hero1 ? this.hero2 : this.hero1;
            // Write out the round number and which hero attacks first
            console.log(`Round ${round}:`);
            console.log(`${firstHero.name} attacks first`);
            // Hero stats at the start of the round
            console.table([
                { Hero: firstHero.name, "Starting HP": firstHero.hp },
                { Hero: secondHero.name, "Starting HP": secondHero.hp },
            ]);
            let damageDone = firstHero.attack();
            let startingHp = secondHero.hp;
            secondHero.defend(damageDone);
            let hpLost = startingHp - secondHero.hp; // Calculate the HP Lost
            // Write out the damage caused by the first hero and the actual HP lost
            console.table([
                { Hero: firstHero.name, Damage: damageDone, "HP Lost": hpLost },
            ]);
            if (secondHero.hp > 0) {
                damageDone = secondHero.attack();
                startingHp = firstHero.hp;
                firstHero.defend(damageDone);
                hpLost = startingHp - firstHero.hp; // Calculate the HP Lost
                // Write out the damage caused by the second hero and the actual HP lost
                console.table([
                    { Hero: secondHero.name, Damage: damageDone, "HP Lost": hpLost },
                ]);
            }
            // Write out the hero stats at the end of the round
            console.table([
                { Hero: firstHero.name, "Ending HP": firstHero.hp },
                { Hero: secondHero.name, "Ending HP": secondHero.hp },
            ]);
            round++; // Next round
        }
        return this.hero1.hp > 0 ? this.hero1 : this.hero2;
    }
}
exports.Arena = Arena;
