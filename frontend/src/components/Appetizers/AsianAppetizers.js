import React from "react";
import "./appetizers.css"; // Ensure you have a CSS file for styling
import Sidebar from "./sidebar";
import RecipeItem from "./recipeItem";


const AsianAppetizers = () => {
  return (
    <div className="container">
      <div className="recipes">
        <div className="sidebar2">
          <Sidebar />
        </div>

        <div className="recipes_appetizers">
          <div className="inner_recipes_block">
            <h2 id="asian_color">Asian</h2>
            <p className="short_summary">
              Asian cuisine is known for its unique flavors and ingredients.
              Here are some delicious Asian appetizers that you can try at home:
            </p>

            <RecipeItem
              title="How to Make Spring Rolls"
              description="A delicious crispy snack."
              ingredients={[
                "cup shredded cabbage",
                "1 cup grated carrots",
                "1/2 cup julienned bell peppers (any color)",
                "1/2 cup bean sprouts (optional)",
                "1/2 cup finely chopped spring onions",
                "2-3 garlic cloves, minced",
                "1 tablespoon soy sauce",
                "1 teaspoon sesame oil (optional)",
                "Salt and pepper, to taste",
                "1 tablespoon vegetable oil",
              ]}
              steps={[
                "Heat 1 tablespoon of vegetable oil in a pan over medium heat.",
                "Add the minced garlic and sauté for 30 seconds until fragrant.",
                "Add the shredded cabbage, grated carrots, bell peppers, and bean sprouts. Stir-fry for 2-3 minutes.",
                "Add the soy sauce, sesame oil, salt, and pepper. Mix well and cook for another minute.",
                "Remove the filling from the heat and let it cool completely.",
              ]}
              serve="Serve the spring rolls hot with dipping sauces like sweet chili sauce, soy sauce, or a spicy peanut sauce.
                      Enjoy your crispy and delicious spring rolls! 🌸"
            />

            <RecipeItem
              title="How to Make Dim Sum (Steamed Dumplings)"
              description="a traditional Chinese meal made up of small plates of dumplings and other snack dishes and is usually accompanied by tea."
              ingredients={[
                "1/2 cup ground pork (or chicken/shrimp)",
                "1/4 cup finely chopped cabbage",
                "2 tablespoons finely chopped spring onions",
                "1 teaspoon grated ginger",
                "1 teaspoon minced garlic",
                "1 tablespoon soy sauce",
                "1 teaspoon sesame oil",
                "1/2 teaspoon salt",
                "1/4 teaspoon white pepper",
              ]}
              steps={[
                "In a mixing bowl, combine the all-purpose flour and hot water. Mix until a dough forms.",
                "Knead the dough for 5-7 minutes until smooth and elastic. Cover with a damp cloth and ",
                "let it rest for 30 minutes.",
                "Make the Filling:",
                "In a bowl, combine the ground pork, cabbage, spring onions, ginger, garlic, soy sauce, sesame oil, salt, and pepper.",
                "Mix well until all the ingredients are combined.",
                "Shape the Dumplings:",
                "Divide the dough into small pieces (about the size of a golf ball). Roll each piece into a thin circle.",
                "Place 1 teaspoon of filling in the center of each circle.",
                "Fold the wrapper in half over the filling and pleat the edges to seal tightly.",
                "Steam the Dumplings:",
                "Line a bamboo or metal steamer with parchment paper or cabbage leaves to prevent sticking.",
                "the dumplings in the steamer, leaving space between them.",
                "Steam over boiling water for 8-10 minutes until the filling is fully cooked.",
              ]}
              serve="Serve the dim sum hot with dipping sauces like soy sauce, chili oil, or vinegar.
                    Enjoy your delicate and delicious dumplings! 🌸"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsianAppetizers;
