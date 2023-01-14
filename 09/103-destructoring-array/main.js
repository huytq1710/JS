'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};
let [main, secondary] = restaurant.categories;
// [main, secondary] = [secondary, main];
console.log(main, secondary);
// console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2.0);

const nested = [2, 4, [5, 6]];
const [i, ,[j, k]] = nested;