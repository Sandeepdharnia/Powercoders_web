import React from "react";
import "./mainmeals.css"; // Ensure you have a CSS file for styling
import MainMealsSidebar from "./mainmealssidebar";
import RecipeItem from "../Appetizers/recipeItem";

const SouthAmericanMainMeals = () => {
  return (
    <div className="container">
      <div className="recipes">
        <div className="sidebar2">
          <MainMealsSidebar />
        </div>

        <div className="recipes_appetizers">
          <div className="inner_recipes_block">
            <h2 id="asian_color">South American Main Courses</h2>
            <p className="short_summary">
              South American cuisine is famous for its colorful ingredients,
              bold flavors, and rich cultural heritage. Here are some delicious
              South American Main Courses that you can try at home:
            </p>

            <RecipeItem
              title="How to Make Feijoada (Brazil):"
              description="A hearty and flavorful stew, perfect for a cozy night in!"
              ingredients={[
                "500g black beans",
                "300g pork belly",
                "2 sausages, sliced",
                "1 onion, chopped",
                "3 cloves garlic",
              ]}
              steps={[
                "Cook beans until tender.",
                "Sauté onions, garlic, and meats.",
                "Add to beans and simmer.",
              ]}
              serve="Serve with rice and orange slices! 🌸"
            />
            <RecipeItem
              title="How to Make Arepas:"
              description="A delicious and versatile cornbread, perfect for any meal!"
              ingredients={["2 cups cornmeal", "2 cups water", "1 tsp salt"]}
              steps={[
                "Mix ingredients to form a dough.",
                "Shape into discs.",
                "Cook on a griddle until golden brown.",
              ]}
              serve="Slice open and fill with cheese, beans, or meat! 🌸"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SouthAmericanMainMeals;
