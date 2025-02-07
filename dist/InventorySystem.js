"use strict";
// 🍎 Create an Inventory System where items can be added, updated, and checked for stock.
// 1. Create a tuple type called ItemDetails which holds (string, number, boolean) representing itemName, quantity, and isAvailable.
// 2. Create a type alias called InventoryItem which contains: itemId (number), details (ItemDetails).
// 3. Create a function called addItem which adds an item to the inventory array. The function needs to return an InventoryItem object.
// 4. Create a function called updateStock which updates the quantity of an item. The return needs to be a string.
// 5. Create a function called checkStock which returns true if the item is available and false otherwise.
const inventory = [];
function addItem(itemId, itemName, quantity, isAvailable) {
    const newItem = {
        itemId,
        details: [
            itemName,
            quantity,
            isAvailable
        ]
    };
    inventory.push(newItem);
    return newItem;
}
function updateStock(itemId, quantity) {
    const item = inventory.find(item => item.itemId === itemId);
    if (!item)
        return "Item not found";
    item.details[1] = quantity;
    return `Stock updated for ${item.details[0]}, new quantity: ${quantity}`;
}
function checkStock(itemId) {
    const item = inventory.find(item => item.itemId === itemId);
    return item ? item.details[2] : false;
}
// Test cases (Create more if needed)
console.log(addItem(1, "Laptop", 5, true)); // { itemId: 1, details: ["Laptop", 5, true] }
console.log(updateStock(1, 3)); // "Stock updated for Laptop, new quantity: 3"
console.log(checkStock(1)); // true
