import { Item, GildedRose } from '../app/gilded-rose';

// Add a master test here
const items: Array<Item> = [
    new Item("Aged Brie", 10,20),
    new Item("Aged Brie", 1,20),
    new Item("Aged Brie", 7,20),
    new Item("Aged Brie", -1,20),
    new Item("Backstage passes", 15,20),
    new Item("Backstage passes", 10,20),
    new Item("Backstage passes", 5,20),
    new Item("Backstage passes", 0,20),
    new Item("Backstage passes", -1,20),
    new Item("Sulfuras, Hand of Ragnaros", 30,20),
    new Item("Sulfuras, Hand of Ragnaros", 30,50),
    new Item("Sulfuras, Hand of Ragnaros", 30,51),
    new Item("Sulfuras, Hand of Ragnaros", 0,80)
];

const gildedRose = new GildedRose(items);
gildedRose.updateQuality();
console.log(gildedRose.items);