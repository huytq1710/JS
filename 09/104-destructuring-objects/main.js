'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open:12,
            close:22,
        },
        fri: {
            open:11,
            close:23
        },
        sat: {
            open:0,
            close:24,
        }
    },
    order: function(starterIndex, mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function (starterIndex,mainIndex, time, address){
        console.log(`Order received ! ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`);
    },
};
restaurant.orderDelivery({
    time : '22:30',
    address: 'Via del Solo,21',
    mainIndex: 2,
    starterIndex: 2,
});
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
 
const {
    name: restaurantName,
    openingHours: hours,
    categories: tag,
} = restaurant;
console.log(restaurantName, hours, tag);

const {menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter); 

let a = 111;
let b = 999;
const obj = { a: 23, b: 27,c: 14 };
({a,b} = obj);
console.log(a,b);

