import React from "react";
import "./mainmeals.css"; // Ensure you have a CSS file for styling
import MainMealsSidebar from "./mainmealssidebar";
import RecipeItem from "../Appetizers/recipeItem";

const MiddleEasternMainMeals = () => {
  return (
    <div className="container">
      <div className="recipes">
        <div className="sidebar2">
          <MainMealsSidebar />
        </div>

        <div className="recipes_appetizers">
          <div className="inner_recipes_block">
            <h2 id="asian_color">Middle Eastern Main Courses</h2>
            <p className="short_summary">
              Middle Eastern cuisine is celebrated for its rich flavors,
              aromatic spices, and wholesome ingredients. Here are some
              delicious Middle Eastern Main Courses that you can try at home:
            </p>

            <RecipeItem
              title="How to Make Lamb Kofta with Yogurt Sauce:"
              description="Juicy and flavorful lamb skewers, perfect for grilling!"
              ingredients={[
                "500g ground lamb",
                "1 onion, grated",
                "2 cloves garlic, minced",
                "2 tsp ground cumin",
                "1 tsp ground coriander",
                "1/2 tsp paprika",
                "2 tbsp chopped parsley",
                "Salt and pepper to taste",
                "Skewers",
              ]}
              steps={[
                "Mix the lamb, onion, garlic, cumin, coriander, paprika, parsley, salt, and pepper together in a bowl.",
                "Take a little bit of the lamb mixture and shape it around the skewers to make small, oval-shaped patties.",
                "Cook the patties on a grill or in a pan until they're brown and cooked all the way through.",
              ]}
              serve="Serve with yogurt sauce (yogurt, garlic, lemon juice, and mint) and pita bread! 🌸"
            />
            <RecipeItem
              title="How to Make Chicken Shawarma:"
              description="Tender and flavorful chicken wrapped in warm pita bread!"
              ingredients={[
                "500g chicken thighs, thinly sliced",
                "2 tbsp yogurt",
                "1 tsp garlic powder",
                "1 tsp cumin",
                "1 tsp paprika",
                "1/2 tsp turmeric",
                "Juice of 1 lemon",
                "2 tbsp olive oil",
                "Salt and pepper to taste",
              ]}
              steps={[
                "Marinate chicken with yogurt, spices, lemon juice, olive oil, salt, and pepper for at least 2 hours.",
                "Cook the chicken in a hot skillet until browned and cooked through.",
              ]}
              serve="Serve in a wrap with tahini sauce, lettuce, tomatoes, and pickles! 🌸"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleEasternMainMeals;
