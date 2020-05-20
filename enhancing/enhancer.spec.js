const enhancer = require("./enhancer.js");
// test away!
describe("enhancer", () => {
  describe("repair()", () => {
    it("should set the item.durability to 100", () => {
      const wornItem = {
        name: "Rusty Iron Sword",
        durability: 1,
        enhancement: 0,
      };

      const expectedItem = {
        name: "Rusty Iron Sword",
        durability: 100,
        enhancement: 0,
      };

      const actualItem = enhancer.repair(wornItem);

      expect(actualItem.durability).toBe(expectedItem.durability);
    });
  });
});
