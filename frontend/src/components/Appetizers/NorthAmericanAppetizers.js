import React from "react";
import "./appetizers.css"; // Ensure you have a CSS file for styling
import Sidebar from "./sidebar";
import RecipeItem from "./recipeItem";


const NouthAmericanAppetizers = () => { 
    
    return (
      <div className="container">
        <div className="recipes">
          <div className="sidebar2">
            <Sidebar />
          </div>

          <div className="recipes_appetizers">
            <div className="inner_recipes_block">
              <h2 id="asian_color">North American</h2>
              <p className="short_summary">
                North American cuisine combines a rich blend of cultural
                influences, resulting in hearty and satisfying dishes. Here are
                some mouthwatering North American appetizers that you can try at
                home:
              </p>

              <RecipeItem
                title="How to Make Buffalo Wings:"
                description="Crispy and spicy chicken wings, perfect for sharing!"
                ingredients={[
                  "1 kg chicken wings",
                  "1/2 cup hot sauce (like Frank’s RedHot)",
                  "1/4 cup melted butter",
                  "1 tbsp vinegar",
                  "Celery sticks for serving",
                ]}
                steps={[
                  "Preheat your oven to 400°F (200°C).",
                  "Spread the wings on a baking sheet and bake for 40–45 minutes until crispy.",
                  "In a bowl, mix hot sauce, butter, and vinegar. Toss the wings in the sauce.",
                ]}
                serve="Serve with celery sticks and blue cheese dressing! 🌸"
            />

            <RecipeItem
            
                title="How to Make Nachos:"
                description="A cheesy, delicious snack perfect for sharing!"
                ingredients={[
                    "Tortilla chips",
                    "1 cup shredded cheddar cheese",
                    "1/2 cup black beans",
                    "1/4 cup sliced jalapeños",
                    "1/4 cup diced tomatoes",
                    "Guacamole and sour cream for serving",
                ]}
                steps={[
                    "Preheat the oven to 375°F (190°C).",
                    "Spread tortilla chips on a baking sheet. Layer with cheese, black beans, jalapeños, and tomatoes.",
                    "Bake for 8–10 minutes until the cheese is melted.",
                ]}
                serve="Serve hot with guacamole and sour cream on the side! 🌸"
            />
            </div>
          </div>
        </div>
      </div>
    );

}

export default NouthAmericanAppetizers;