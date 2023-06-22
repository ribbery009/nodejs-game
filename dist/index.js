"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const warrior_1 = require("./warrior");
const weapon_1 = require("./weapon");
const arena_1 = require("./arena");
let sword = new weapon_1.Weapon("Sword", ["Warrior", "Mage", "Rouge", "Priest", "Archer"], [8, 12], 0.9);
let east = new warrior_1.Warrior("EasternWarrior", 100, "Warrior", "Armour Boost", 5, 20, sword);
let west = new warrior_1.Warrior("Western warrior", 70, "Mage", "FireStorm", 1, 5, sword);
let arena = new arena_1.Arena(east, west);
arena.tournament();