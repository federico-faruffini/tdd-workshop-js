import { CraftingSystem } from "../craftingSystem";
import { Inventory } from "../inventory";

describe("CraftingSystem", () => {
  describe("craft", () => {
    it("should return true and consume resources when crafting axe with enough resources", () => {
      const inventory = new Inventory();
      inventory.addResource("wood", 5);
      inventory.addResource("stone", 2);

      const craftingSystem = new CraftingSystem();

      const result = craftingSystem.craft("axe", inventory);

      expect(result).toBe(true);
      expect(inventory.getAmount("wood")).toBe(3);
      expect(inventory.getAmount("stone")).toBe(1);
    });

    it("should return true and empty inventory when crafting axe with exact resources", () => {
      const inventory = new Inventory();
      inventory.addResource("wood", 2);
      inventory.addResource("stone", 1);

      const craftingSystem = new CraftingSystem();

      const result = craftingSystem.craft("axe", inventory);

      expect(result).toBe(true);
      expect(inventory.getAmount("wood")).toBe(0);
      expect(inventory.getAmount("stone")).toBe(0);
    });

    it("should return false and not change inventory when recipe does not exist", () => {
      const inventory = new Inventory();
      inventory.addResource("wood", 10);

      const craftingSystem = new CraftingSystem();

      const result = craftingSystem.craft("banana", inventory);

      expect(result).toBe(false);
      expect(inventory.getAmount("wood")).toBe(10);
    });

    it("should return true and consume metal when crafting sword with enough resources", () => {
      const inventory = new Inventory();
      inventory.addResource("metal", 3);

      const craftingSystem = new CraftingSystem();

      const result = craftingSystem.craft("sword", inventory);

      expect(result).toBe(true);
      expect(inventory.getAmount("metal")).toBe(1);
    });
  });
});

describe("Inventory", () => {
  describe("hasResource", () => {
    it("should return true when enough resource is available", () => {
      const inventory = new Inventory();
      inventory.addResource("gold", 5);

      const result = inventory.hasResource("gold", 3);

      expect(result).toBe(true);
    });

    it("should return false when resource is insufficient", () => {
      const inventory = new Inventory();
      inventory.addResource("gold", 5);

      const result = inventory.hasResource("gold", 6);

      expect(result).toBe(false);
    });
  });

  describe("consumeResource", () => {
    it("should reduce resource to zero when consuming exact amount", () => {
      const inventory = new Inventory();
      inventory.addResource("wood", 2);

      inventory.consumeResource("wood", 2);

      expect(inventory.getAmount("wood")).toBe(0);
    });

    it("should throw an error when resources are insufficient", () => {
      const inventory = new Inventory();
      inventory.addResource("stone", 1);

      expect(() => {
        inventory.consumeResource("stone", 2);
      }).toThrow("Not enough resources");
    });
  });
});