import { Recipes } from "./recipes.js";

export class CraftingSystem {
  constructor() {
    this.recipes = [
      Recipes.AXE,
      Recipes.SWORD,
    ];
  }

  craft(itemName, inventory) {
    const recipe = this.recipes.find((r) => r.name === itemName);

    if (!recipe) {
      return false;
    }

    for (const [resource, amount] of Object.entries(recipe.resources)) {
      if (!inventory.hasResource(resource, amount)) {
        return false;
      }

      inventory.consumeResource(resource, amount);
    }

    return true;
  }
}