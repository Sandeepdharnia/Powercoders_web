import React from "react";
import RecipeItem from "../Appetizers/recipeItem";

const Desserts = () => {
  return (
    <div className="container">
      <div className="recipes">
        <div className="recipes_appetizers">
          <div className="inner_recipes_block">
            <h2 id="asian_color">Desserts</h2>
            <p className="short_summary">
              Dessert is the perfect way to end a meal on a sweet note. It can
              be anything from a simple slice of cake to a decadent chocolate
              mousse. Here are a few ideas.
            </p>

            <RecipeItem
              title="How to make chocolate lava cake:"
              description=" Chocolate Lava Cake is a small, 
              individual-sized cake. The center is slightly undercooked, 
              on purpose, resulting in a gooey, melty, and 
              decadent treat that oozes out when you cut into it.!"
              ingredients={[
                "1/2 cup unsalted butter",
                "6 oz bittersweet chocolate",
                "2 large eggs",
                "2 large egg yolks",
                "1/4 cup granulated sugar",
                "2 tbsp all-purpose flour",
                "1 tsp vanilla extract",
                "A pinch of salt",
                "Powdered sugar (for garnish)",
              ]}
              steps={[
                "Preheat your oven to 425°F (220°C).",
                "Grease four ramekins with butter and dust with cocoa powder.",
                "In a double boiler or microwave, melt the butter and chocolate until smooth.",
                "In a mixing bowl, whisk the eggs, egg yolks, sugar, and vanilla extract until frothy.",
                "Gently fold the melted chocolate into the egg mixture.",
                "Sift the flour and salt into the batter, then fold gently until fully combined.",
                "Divide the mixture evenly among the ramekins.",
                "Bake for 12-14 minutes or until the edges are set, but the center remains soft.",
              ]}
              serve="Let the cakes cool for 2 minutes, then invert onto a plate.
                    Dust with powdered sugar and serve with a scoop of vanilla ice cream or fresh berries! 🌸"
            />
            <RecipeItem
              title="How to Make  Baklava:"
              description="Baklava is a sweet, flaky pastry made with layers of phyllo dough, filled with chopped nuts and soaked in syrup or honey.!"
              ingredients={[
                "1 package (16 oz) phyllo dough",
                "1 cup unsalted butter, melted",
                "2 cups chopped nuts (pistachios, walnuts, or almonds)",
                "1 / 4 cup granulated sugar",
                "1 tsp ground cinnamon",
                "1 cup honey",
                "1 / 2 cup water",
                "1 / 4 cup lemon juice",
                "1 tsp vanilla extract",
              ]}
              steps={[
                "Preheat your oven to 350°F (175°C).",
                "In a bowl, mix chopped nuts, sugar, and cinnamon.",
                "Grease a baking dish and layer 10 sheets of phyllo dough, brushing melted butter between each sheet.",
                "Spread a thin layer of the nut mixture on top.",
                "Repeat the layers, ending with 10 sheets of phyllo dough on top.",
                "Cut into diamond or square shapes using a sharp knife.",
                "Bake for 40-45 minutes or until golden brown.",
                "In a saucepan, combine honey, water, lemon juice, and vanilla. Simmer for 10 minutes.",
                "Pour the hot syrup over the baked baklava immediately after it comes out of the oven.",
              ]}
              serve="Allow the baklava to cool completely and absorb the syrup
               before serving. Serve with hot tea or coffee! 🌸"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desserts;
