import React from "react";
import './home.css'


function Home() {
    return (
      <div className="container">
        <div className="main">
          <h3 className="bold">
            Welcome to Delicious Recipes! <br />
            Here you will find a variety of recipes that you can try at home.
            <br />
            We have recipes for appetizers, main courses and desserts. <br />{" "}
            <br />
            If you have any questions, suggestions or want to share your own
            recipe,
            <br /> please feel free to <br />
            <br />
            <a href="/contact" className="contact">
              contact us.
            </a>{" "}
            <br />
            <br />
            Enjoy!
          </h3>
        </div>
      </div>
    );
        
};

export default Home;