const meals = require('./meals.js');

var arrayMeal = [
  {mealID: 1, title: "Pizza", ingredients: "dough, sauce, cheese", qty: 3},
  {mealID: 2, title: "Calzone", ingredients: "dough, sauce, cheese"},
  {mealID: 3, title: "Stromboli", ingredients: "dough, sauce, cheese"},
  {mealID: 4, title: "Tuna Sandwich", ingredients: "bread, tuna, mayo"},
  {mealID: 5, title: "Chicken Sandwich", ingredients: "bread, chicken, mayo"},
  {mealID: 6, title: "PBJ", ingredients: "bread, peanut butter, jelly"},
  {mealID: 7, title: "Ham Sandwich", ingredients: "bread, ham, mayo"},
  {mealID: 8, title: "Turkey Sandwich", ingredients: "bread, turkey, mayo"},
  {mealID: 9, title: "Grilled Cheese", ingredients: "bread, cheese, butter"},
  {mealID: 10, title: "Roast Beef Sandwich", ingredients: "bread, roast beef, mayo"}
]

// array of meals
for (let i = 0;
  		 i < arrayMeal.length;
		 i++){

    // Singular Item in Cart
    let mealItems = arrayMeal[i]

    // TEMP: Log for debugging some problem
    console.log(mealItems.mealID + " "  +  mealItems.title + " " + mealItems.ingredients + " " + mealItems.qty);
}

meals.getMeal();
meals.getMeals();
meals.createMeal();
meals.updateMeal();
meals.removeMeal();
