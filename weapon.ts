export class Weapon {
  name: string;
  heroType: string[];
  damage: number[];
  hitChance: number;
  baseDamage: number[];

  constructor(name: string, heroType: string[], damage: number[], hitChance: number) {
    this.name = name;
    this.heroType = heroType;
    this.damage = damage;
    this.hitChance = hitChance;
    this.baseDamage = damage;
  }
}