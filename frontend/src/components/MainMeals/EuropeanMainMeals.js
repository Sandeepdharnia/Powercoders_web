import React from "react";
import "./mainmeals.css"; // Ensure you have a CSS file for styling
import MainMealsSidebar from "./mainmealssidebar";
import RecipeItem from "../Appetizers/recipeItem";

const EuropeanMainMeals = () => {
  return (
    <div className="container">
      <div className="recipes">
        <div className="sidebar2">
          <MainMealsSidebar />
        </div>

        <div className="recipes_appetizers">
          <div className="inner_recipes_block">
            <h2 id="asian_color">European Main Courses</h2>
            <p className="short_summary">
              European cuisine is renowned for its diversity, exquisite flavors,
              and culinary traditions rooted in history. Here are some
              delightful European Main Courses that you can try at home:
            </p>

            <RecipeItem
              title="How to Make  Beef Stroganoff (Russia):"
              description="A rich and creamy beef dish served over egg noodles!"
              ingredients={[
                "500g beef strips",
                "1 onion, sliced",
                "1 cup mushrooms, sliced",
                "1 cup sour cream",
                "2 tbsp butter",
                "1 tsp paprika",
                "Salt and pepper to taste",
              ]}
              steps={[
                "Heat butter in a skillet, cook onions and mushrooms until soft.",
                "Add beef, season with salt, pepper, and paprika, and cook until browned.",
                "Stir in sour cream and simmer for 5 minutes.",
              ]}
              serve="Serve over buttered noodles or mashed potatoes! 🌸"
            />
            <RecipeItem
              title="How to Make  Paella (Spain):"
              description="A vibrant and flavorful rice dish with seafood, chicken, and saffron!"
              ingredients={[
                "2 cups short-grain rice",
                "500g seafood (shrimp, mussels, squid)",
                "1 red bell pepper, diced",
                "1 onion, chopped",
                "3 garlic cloves, minced",
                "1 tsp smoked paprika",
                "1/2 tsp saffron threads",
                "4 cups chicken or seafood stock",
                "2 tbsp olive oil",
              ]}
              steps={[
                "Heat oil in a large pan, sauté onion, garlic, and bell pepper.",
                "Add rice, paprika, and saffron, and stir.",
                "Pour in stock, bring to a boil, and reduce to a simmer.",
                "Add seafood, cover, and cook until rice is tender and seafood is cooked.",
              ]}
              serve="Serve hot, garnished with parsley and lemon wedges! 🌸"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuropeanMainMeals;
