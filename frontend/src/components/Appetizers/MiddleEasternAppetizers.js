import React from "react";
import "./appetizers.css"
import Sidebar from "./sidebar";
import RecipeItem from "./recipeItem";



const MiddleEasterAppetizers = () => {
  return (
    <div className="container">
      <div className="recipes">
        <div className="sidebar2">
          <Sidebar />
        </div>

        <div className="recipes_appetizers">
          <div className="inner_recipes_block">
            <h2 id="asian_color">Middle Eastern</h2>
            <p className="short_summary">
              Middle Eastern cuisine is celebrated for its rich flavors,
              aromatic spices, and wholesome ingredients.Here are some delicious
              Middle Eastern appetizers that you can try at home:
            </p>

            <RecipeItem
              title="How to Make Plantain Chips"
              description="A delicious crispy snack."
              ingredients={[
                "2 green plantains",
                "Vegetable oil for frying",
                "Salt to taste",
              ]}
              steps={[
                "Peel the plantains and slice them thinly (about 1/8-inch thick).",
                "Heat oil in a deep frying pan.",
                "Fry plantain slices in batches until golden and crispy (about 2–3 minutes).",
                "Remove and drain on a paper towel. Sprinkle with salt.",
              ]}
              serve="Serve warm or at room temperature as a crunchy snack!"
            />

            <RecipeItem
              title="How to Make Bobotie Bites (South African)"
              description="Mini version of the traditional South African dish."
              ingredients={[
                "500g minced beef",
                "1 onion, finely chopped",
                "1 tbsp curry powder",
                "1 slice of bread soaked in milk",
                "2 eggs",
                "2 tbsp chutney",
                "Salt and pepper to taste",
              ]}
              steps={[
                "Preheat the oven to 375°F (190°C).",
                "Sauté onions in a pan until soft. Add minced beef and cook until browned.",
                "Stir in curry powder, chutney, salt, and pepper.",
                "Mix in the soaked bread and one egg.",
                "Spoon the mixture into greased muffin tins and pour a little beaten egg over each.",
                "Bake for 20 minutes until set.",
              ]}
              serve="Serve warm as a bite-sized treat with a dollop of chutney!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleEasterAppetizers;
