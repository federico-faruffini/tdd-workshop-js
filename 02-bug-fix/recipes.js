import { ItemNames } from "./itemNames.js";
import { ResourceNames } from "./resourceNames.js";

export const Recipes = {
  AXE: {
    name: ItemNames.AXE,
    resources: {
      [ResourceNames.WOOD]: 2,
      [ResourceNames.STONE]: 1,
    },
  },
  SWORD: {
    name: ItemNames.SWORD,
    resources: {
      [ResourceNames.METAL]: 2,
    },
  },
  SHIELD: {
    name: ItemNames.SHIELD,
    resources: {
      [ResourceNames.WOOD]: 3,
      [ResourceNames.METAL]: 1,
    },
  },
  FIREPLACE: {
    name: ItemNames.FIREPLACE,
    resources: {
      [ResourceNames.STONE]: 4,
      [ResourceNames.WOOD]: 2,
    },
  },
  BOTTLE: {
    name: ItemNames.BOTTLE,
    resources: {
      [ResourceNames.GLASS]: 3,
    },
  },
};
