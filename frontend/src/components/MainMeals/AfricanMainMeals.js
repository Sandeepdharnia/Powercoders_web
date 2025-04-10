import React from "react";
import "./mainmeals.css"; // Ensure you have a CSS file for styling
import MainMealsSidebar from "./mainmealssidebar";
import RecipeItem from "../Appetizers/recipeItem";

const AfricanMainMeals = () => {
  return (
    <div className="container">
      <div className="recipes">
        <div className="sidebar2">
          <MainMealsSidebar />
        </div>

        <div className="recipes_appetizers">
          <div className="inner_recipes_block">
            <h2 id="asian_color">African Main Courses</h2>
            <p className="short_summary">
              African cuisine is celebrated for its bold flavors, vibrant
              spices, and unique combinations of ingredients. Here are some
              flavorful African Main Courses that you can try at home:
            </p>

            <RecipeItem
              title="How to Make Jollof Rice (West Africa):"
              description="Aromatic and flavorful rice dish cooked in a rich tomato sauce!"
              ingredients={[
                "2 cups rice",
                "1/2 cup tomato paste",
                "2 cups tomato puree",
                "1 onion, chopped",
                "1 red bell pepper, blended",
                "1 tsp thyme",
                "1 tsp curry powder",
                "2 cups chicken stock",
                "2 tbsp vegetable oil",
              ]}
              steps={[
                "Heat oil, sauté onion, and tomato paste until fragrant.",
                "Add tomato puree, bell pepper, thyme, and curry powder. Simmer.",
                "Add washed rice and chicken stock. Cover and cook on low heat until rice is tender.",
              ]}
              serve="Serve with grilled chicken or fish! 🌸"
            />
            <RecipeItem
              title="How to Make  Bobotie (South Africa):"
              description="A sweet and savory minced meat dish topped with an egg custard!"
              ingredients={[
                "500g ground beef",
                "1 onion, chopped",
                "1 slice of bread, soaked in milk",
                "1 tsp curry powder",
                "2 eggs",
                "1/2 cup raisins",
              ]}
              steps={[
                "Sauté onions and beef.",
                "Add curry powder and raisins.",
                "Mix in soaked bread.",
                "Transfer to a baking dish.",
                "Beat eggs with milk and pour over the meat.",
                "Bake at 375°F (190°C) for 30 minutes.",
              ]}
              serve="Serve with yellow rice and chutney! 🌸"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfricanMainMeals;
