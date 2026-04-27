export class CraftingSystem {
  constructor() {
    this.recipes = {
      axe: {
        wood: 2,
        stone: 1,
      },
      sword: {
        metal: 2,
      },
    };
  }

  craft(itemName, inventory) {
    if (!this.recipes[itemName]) {
      return false;
    }

    const recipe = this.recipes[itemName];

    for (const [resource, amount] of Object.entries(recipe)) {
      if (!inventory.hasResource(resource, amount)) {
        return false;
      }

      inventory.consumeResource(resource, amount);
    }

    return true;
  }
}