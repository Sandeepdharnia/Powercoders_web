import React from "react";
import "./mainmeals.css"; // Ensure you have a CSS file for styling
import MainMealsSidebar from "./mainmealssidebar";
import RecipeItem from "../Appetizers/recipeItem";

const NorthAmericanMainMeals = () => {
  return (
    <div className="container">
      <div className="recipes">
        <div className="sidebar2">
          <MainMealsSidebar />
        </div>

        <div className="recipes_appetizers">
          <div className="inner_recipes_block">
            <h2 id="asian_color">North American Main Courses</h2>
            <p className="short_summary">
              North American cuisine combines a rich blend of cultural
              influences, resulting in hearty and satisfying dishes. Here are
              some mouthwatering North American Main Courses that you can try at
              home:
            </p>

            <RecipeItem
              title="How to Make BBQ Ribs:"
              description="Tender and flavorful ribs, slow-cooked to perfection!"
              ingredients={[
                "1 rack pork ribs",
                "1 cup barbecue sauce",
                "Salt and pepper",
              ]}
              steps={[
                "Season ribs with salt and pepper.",
                "Bake at 300°F (150°C) for 2 hours.",
                "Brush with barbecue sauce and grill for 10 minutes.",
              ]}
              serve="Serve with coleslaw and cornbread! 🌸"
            />
            <RecipeItem
              title="How to Make Mac and Cheese:"
              description="Creamy and cheesy pasta, a classic comfort food!"
              ingredients={[
                "2 cups macaroni",
                "2 cups cheddar cheese",
                "1 cup milk",
                "2 tbsp butter",
                "2 tbsp flour",
              ]}
              steps={[
                "Cook macaroni and set aside.",
                "Make a roux with butter and flour, add milk, and stir until thickened.",
                "Mix in cheese and macaroni.",
              ]}
              serve="Serve hot as a comforting dish! 🌸"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NorthAmericanMainMeals;
