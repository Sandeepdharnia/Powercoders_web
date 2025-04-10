
import React from "react";
import "./mainmeals.css"; // Ensure you have a CSS file for styling
import MainMealsSidebar from "./mainmealssidebar";
import RecipeItem from "../Appetizers/recipeItem";

const AsianMainMeals = () => {
  return (
    <div className="container">
      <div className="recipes">
        <div className="sidebar2">
          <MainMealsSidebar />
        </div>

        <div className="recipes_appetizers">
          <div className="inner_recipes_block">
            <h2 id="asian_color">Asian Main Courses </h2>
            <p className="short_summary">
              Asian cuisine is known for its unique flavors and ingredients.
              Here are some delicious Asian Mian Courses that you can try at
              home:
            </p>

            <RecipeItem
              title="How to Make Chicken Biryani (India):"
              description="A flavorful and aromatic rice dish with tender chicken!"
              ingredients={[
                "2 cups basmati rice",
                "500g chicken (bone-in or boneless)",
                "1 large onion, thinly sliced",
                "2 tomatoes, chopped",
                "1/2 cup plain yogurt",
                "3 tbsp biryani masala",
                "1 tsp turmeric powder",
                "1 tsp red chili powder",
                "4 tbsp cooking oil",
                "4 cups water",
                "1/4 cup chopped cilantro and mint",
                "1 tbsp ghee",
                "Salt to taste",
              ]}
              steps={[
                "Wash the rice and soak it for 30 minutes. Boil in salted water until 70% cooked, then drain.",
                "Heat oil in a pot, sauté onions until golden, and set half aside.",
                "Add chicken, biryani masala, turmeric, chili powder, and salt. Cook until chicken is tender.",
                "Add tomatoes, yogurt, and fresh herbs. Simmer until thick.",
                "Layer the partially cooked rice over the chicken mixture. Top with fried onions and ghee. Cover and cook on low heat for 20 minutes.",
              ]}
              serve="Serve hot with raita (yogurt sauce) and a side of salad! 🌸"
            />
            <RecipeItem
              title="How to Make Pad Thai (Thailand):"
              description="A tasty noodle dish with a sweet and savory sauce!"
              ingredients={[
                "200g flat rice noodles",
                "200g shrimp or chicken",
                "2 eggs",
                "1 cup bean sprouts",
                "3 tbsp fish sauce",
                "1 tbsp tamarind paste",
                "1 tbsp sugar",
                "2 tbsp vegetable oil",
                "2 cloves garlic, minced",
                "1/4 cup crushed peanuts",
                "Lime wedges and chopped cilantro for garnish",
              ]}
              steps={[
                "Soak the rice noodles in warm water for 15 minutes, then drain.",
                "Heat oil in a wok and sauté garlic until fragrant. Add shrimp or chicken and cook until done.",
                "Push to the side, crack in the eggs, and scramble.",
                "Add noodles, fish sauce, tamarind paste, and sugar. Toss until coated.",
                "Mix in bean sprouts and peanuts.",
              ]}
              serve="Serve hot, garnished with lime wedges and cilantro! 🌸"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsianMainMeals;
