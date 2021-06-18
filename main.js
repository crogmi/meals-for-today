// Create database of messages - object
const breakfast = {
    1: "Pancakes",
    2: "Waffles",
    3: "Avocado toast",
    4: "Eggs and bacon",
    5: "Coffee cake",
    6: "Sausage McMuffin",
    7: "Crepes",
    8: "Muffins",
    9: "Fruits",
    10: "Bagels",
    11: "Donuts",
    12: "Oatmeal",
    13: "Omelette",
    14: "Cinammon roll",
    15: "Yogurt"
}

const lunch = {
    1: "Thai",
    2: "Japanese",
    3: "Korean",
    4: "Vietnamese",
    5: "Hot Dog",
    6: "Burgers",
    7: "Mediterranean",
    8: "Italian",
    9: "Tacos",
    10: "Soul food",
    11: "Buffet",
    12: "Steak",
    13: "Chicken Wings",
    14: "Pizza",
    15: "Salad"
}

const dinner = {
    1: "Thai",
    2: "Japanese",
    3: "Korean",
    4: "Vietnamese",
    5: "Hot Dog",
    6: "Burgers",
    7: "Mediterranean",
    8: "Italian",
    9: "Tacos",
    10: "Soul food",
    11: "Buffet",
    12: "Steak",
    13: "Chicken Wings",
    14: "Pizza",
    15: "Salad"
}

// Generate random number
function randomNum (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Look up random number against the database and output the value

function meals () {
    const meal1 = breakfast[randomNum(Math.max(...Object.getOwnPropertyNames(breakfast)), Math.min(...Object.getOwnPropertyNames(breakfast)))];
    const meal2 = lunch[randomNum(Math.max(...Object.getOwnPropertyNames(lunch)), Math.min(...Object.getOwnPropertyNames(lunch)))];
    const meal3 = dinner[randomNum(Math.max(...Object.getOwnPropertyNames(dinner)), Math.min(...Object.getOwnPropertyNames(dinner)))];
    console.log(`Today\'s meals will comprise ${meal1} for breakfast, ${meal2} for lunch, and ${meal3} for dinner.`)
}

meals();
