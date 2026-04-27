export class Inventory {
  constructor() {
    this.resources = {};
  }

  addResource(name, amount) {
    if (!this.resources[name]) {
      this.resources[name] = 0;
    }

    this.resources[name] += amount;
  }

  hasResource(name, amount) {
    return (
      this.resources.hasOwnProperty(name) &&
      this.resources[name] >= amount
    );
  }

  consumeResource(name, amount) {
    if (!this.hasResource(name, amount)) {
      throw new Error("Not enough resources");
    }

    this.resources[name] -= amount;
  }

  getAmount(name) {
    return this.resources[name] || 0;
  }
}