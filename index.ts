import { Warrior } from './warrior';
import { Weapon } from './weapon';
import { Arena } from './arena';

let sword = new Weapon("Sword", ["Warrior", "Mage", "Rouge", "Priest", "Archer"], [8, 12], 0.9);
let east = new Warrior("EasternWarrior", 100, "Warrior", "Armour Boost", 5, 20, sword);
let west = new Warrior("Western warrior", 70, "Mage", "FireStorm", 1, 5, sword);

let arena = new Arena(east, west);
arena.tournament();