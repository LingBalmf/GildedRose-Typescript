import { expect } from "chai";
//import "chai/register-should";
import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function () {

    it("should correspond to the golden record", function () {
        //Arrange
        const inputItems = [
            new Item("Aged Brie", 10, 20),
            new Item("Aged Brie", 1, 20),
            new Item("Aged Brie", 7, 20),
            new Item("Aged Brie", -1, 20),
            new Item("Backstage passes", 15, 20),
            new Item("Backstage passes", 10, 20),
            new Item("Backstage passes", 5, 20),
            new Item("Backstage passes", 0, 20),
            new Item("Backstage passes", -1, 20),
            new Item("Sulfuras, Hand of Ragnaros", 30, 20),
            new Item("Sulfuras, Hand of Ragnaros", 30, 50),
            new Item("Sulfuras, Hand of Ragnaros", 30, 51),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80),]
            ;

        const expectedOutputItems = [
            new Item("Aged Brie", 9, 21),
            new Item("Aged Brie", 0, 21),
            new Item("Aged Brie", 6, 21),
            new Item("Aged Brie", -2, 22),
            new Item("Backstage passes", 14, 21),
            new Item("Backstage passes", 9, 22),
            new Item("Backstage passes", 4, 23),
            new Item("Backstage passes", -1, 0),
            new Item("Backstage passes", -2, 0),
            new Item("Sulfuras, Hand of Ragnaros", 30, 20),
            new Item("Sulfuras, Hand of Ragnaros", 30, 50),
            new Item("Sulfuras, Hand of Ragnaros", 30, 51),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80),
        ];

        const gildedRose = new GildedRose(inputItems);

        gildedRose.updateQuality();

        //Assert
        expect(gildedRose.items).to.deep.equal(expectedOutputItems);

    });

});
