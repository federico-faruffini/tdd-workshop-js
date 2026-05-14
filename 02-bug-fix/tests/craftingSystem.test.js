import { CraftingSystem } from "../craftingSystem";
import { Inventory } from "../inventory";
import { ItemNames } from "../itemNames.js";
import { ResourceNames } from "../resourceNames.js";

describe("CraftingSystem", () => {
  describe("craft", () => {
    it("should return true and consume resources when crafting axe with enough resources", () => {
      const inventory = new Inventory();
      inventory.addResource(ResourceNames.WOOD, 5);
      inventory.addResource(ResourceNames.STONE, 2);

      const craftingSystem = new CraftingSystem();

      const result = craftingSystem.craft(ItemNames.AXE, inventory);

      expect(result).toBe(true);
      expect(inventory.getAmount(ResourceNames.WOOD)).toBe(3);
      expect(inventory.getAmount(ResourceNames.STONE)).toBe(1);
    });

    it("should return true and empty inventory when crafting axe with exact resources", () => {
      const inventory = new Inventory();
      inventory.addResource(ResourceNames.WOOD, 2);
      inventory.addResource(ResourceNames.STONE, 1);

      const craftingSystem = new CraftingSystem();

      const result = craftingSystem.craft(ItemNames.AXE, inventory);

      expect(result).toBe(true);
      expect(inventory.getAmount(ResourceNames.WOOD)).toBe(0);
      expect(inventory.getAmount(ResourceNames.STONE)).toBe(0);
    });

    it("should return false and not change inventory when recipe does not exist", () => {
      const inventory = new Inventory();
      inventory.addResource(ResourceNames.WOOD, 10);

      const craftingSystem = new CraftingSystem();

      const result = craftingSystem.craft("banana", inventory);

      expect(result).toBe(false);
      expect(inventory.getAmount(ResourceNames.WOOD)).toBe(10);
    });

    it("should return true and consume metal when crafting sword with enough resources", () => {
      const inventory = new Inventory();
      inventory.addResource(ResourceNames.METAL, 3);

      const craftingSystem = new CraftingSystem();

      const result = craftingSystem.craft(ItemNames.SWORD, inventory);

      expect(result).toBe(true);
      expect(inventory.getAmount(ResourceNames.METAL)).toBe(1);
    });
  });
});

describe("Inventory", () => {
  describe("hasResource", () => {
    it("should return true when enough resource is available", () => {
      const inventory = new Inventory();
      inventory.addResource(ResourceNames.GOLD, 5);

      const result = inventory.hasResource(ResourceNames.GOLD, 3);

      expect(result).toBe(true);
    });

    it("should return false when resource is insufficient", () => {
      const inventory = new Inventory();
      inventory.addResource(ResourceNames.GOLD, 5);

      const result = inventory.hasResource(ResourceNames.GOLD, 6);

      expect(result).toBe(false);
    });
  });

  describe("consumeResource", () => {
    it("should reduce resource to zero when consuming exact amount", () => {
      const inventory = new Inventory();
      inventory.addResource(ResourceNames.WOOD, 2);

      inventory.consumeResource(ResourceNames.WOOD, 2);

      expect(inventory.getAmount(ResourceNames.WOOD)).toBe(0);
    });

    it("should throw an error when resources are insufficient", () => {
      const inventory = new Inventory();
      inventory.addResource(ResourceNames.STONE, 1);

      expect(() => {
        inventory.consumeResource(ResourceNames.STONE, 2);
      }).toThrow("Not enough resources");
    });
  });
});