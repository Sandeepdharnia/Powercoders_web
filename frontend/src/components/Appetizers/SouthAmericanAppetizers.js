import React from "react";
import "./appetizers.css"; // Ensure you have a CSS file for styling
import Sidebar from "./sidebar";
import RecipeItem from "./recipeItem";


const SouthAmericanAppetizers = () => {

    return (
      <div className="container">
        <div className="recipes">
          <div className="sidebar2">
            <Sidebar />
          </div>

          <div className="recipes_appetizers">
            <div className="inner_recipes_block">
              <h2 id="asian_color">South American</h2>
              <p className="short_summary">
                South American cuisine is famous for its colorful ingredients,
                bold flavors, and rich cultural heritage. Here are some
                delicious South American appetizers that you can try at home:
              </p>

              <RecipeItem
                title="How to Make Empanadas:"
                description="Tasty little pockets filled with deliciousness!"
                ingredients={[
                  "Empanada dough (store-bought or homemade)",
                  "1 cup cooked ground beef",
                  "1/4 cup diced onions",
                  "1/4 cup diced bell peppers",
                  "1 hard-boiled egg, chopped",
                ]}
                steps={[
                  "Preheat the oven to 375°F (190°C).",
                  "Roll out the dough and cut into circles.",
                  "Mix ground beef, onions, bell peppers, and egg in a bowl.",
                  "Place a spoonful of filling on each dough circle. Fold and seal the edges.",
                  "Use a fork to crimp the edges for a decorative seal.",
                  "Place the empanadas on a baking sheet and brush them with an egg wash (beaten egg mixed with a splash of water).",
                  "Bake for 20–25 minutes, or until golden brown.",
                ]}
                serve="Serve warm as a snack or appetizer. You can pair them with chimichurri sauce or salsa for dipping! 🌸"
              />

              <RecipeItem
                title="How to Make Ceviche:"
                description="A refreshing seafood dish with a zesty kick!"
                ingredients={[
                  "1 lb fresh white fish (like cod or tilapia), diced",
                  "1/2 cup fresh lime juice",
                  "1/4 cup fresh lemon juice",
                  "1/2 cup diced red onion",
                  "1 jalapeño, finely chopped",
                  "1/2 cup chopped cilantro",
                  "1 diced avocado",
                  "Salt and pepper to taste",
                ]}
                steps={[
                  "Place the diced fish in a bowl and cover it with lime and lemon juice.",
                  "Let it marinate in the fridge for 15–20 minutes (the acidity will 'cook' the fish).",
                  "Once the fish is opaque, drain excess liquid and mix in red onion, jalapeño, cilantro, avocado, salt, and pepper.",
                ]}
                serve="Serve chilled in small bowls or on tostadas. It pairs well with tortilla chips or a cold beverage! 🌸"
              />

            </div>
          </div>
        </div>
      </div>
    );


};

export default SouthAmericanAppetizers;
