import React from "react";
import "./appetizers.css"; // Ensure you have a CSS file for styling
import Sidebar from "./sidebar";
import RecipeItem from "./recipeItem";

const EuropeanAppetizers = () => { 

    return (
      <div className="container">
        <div className="recipes">
          <div className="sidebar2">
            <Sidebar />
          </div>

          <div className="recipes_appetizers">
            <div className="inner_recipes_block">
              <h2 id="asian_color">European</h2>
              <p className="short_summary">
                European cuisine is renowned for its diversity, exquisite
                flavors, and culinary traditions rooted in history. Here are
                some delightful European appetizers that you can try at home:
              </p>

              <RecipeItem
                title="How to Make Bruschetta:"
                description="A delicious crispy snack."
                ingredients={[
                  "1 baguette, sliced",
                  "2 cups diced tomatoes",
                  "2 cloves garlic, minced",
                  "3 tbsp olive oil",
                  "1 tbsp balsamic vinegar",
                  "Fresh basil, chopped",
                  "Salt and pepper to taste",
                ]}
                steps={[
                  "Preheat your oven to 375°F (190°C).",
                  "Place the baguette slices on a baking sheet and drizzle with olive oil.",
                  "Toast for 5–7 minutes until golden brown.",
                  "In a bowl, mix tomatoes, garlic, basil, olive oil, balsamic vinegar, salt, and pepper.",
                  "Spoon the tomato mixture onto the toasted baguette slices.",
                ]}
                serve="Serve immediately as a light appetizer or snack. 🌸"
              />

              <RecipeItem
                title="How to Make Tapas (Spanish Mixed Appetizers):"
                description="Small plates of food served as light snacks during happy hour or as appetizers before the main course."
                ingredients={[
                  "Olives (green or black)",
                  "Manchego cheese, sliced",
                  "Chorizo, sliced",
                  "Marinated artichokes",
                  "Sliced baguette or crackers",
                  "Spanish almonds",
                ]}
                steps={[
                  "Arrange olives, manchego cheese, chorizo, and marinated artichokes on a large platter.",
                ]}
                serve="Serve with sliced baguette or crackers.
                Serve at room temperature as a variety of small bites with wine., 🌸"
              />

              <RecipeItem
                title="How to Make Antipasto"
                description="highly seasoned or flavored food used to precede a meal"
                ingredients={[
                  "Sliced prosciutto, salami, and other cured meats.",
                  "Marinated olives and artichokes",
                  "Fresh mozzarella balls",
                  "Roasted red peppers",
                  "Breadsticks or crusty bread",
                ]}
                steps={[
                  "Arrange all ingredients on a large wooden board or platter.",
                  "Add a drizzle of olive oil over the roasted peppers for extra flavor.",
                ]}
                serve="Serve as an elegant starter for an Italian-inspired meal., 🌟 "
              />
            </div>
          </div>
        </div>
      </div>
    );



}

export default EuropeanAppetizers;