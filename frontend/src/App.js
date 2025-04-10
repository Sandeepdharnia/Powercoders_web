import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import HomeMiddle from "./components/HomeMiddle/homeMiddle";
import AsianAppetizers from "./components/Appetizers/AsianAppetizers";
import MiddleEasterAppetizers from "./components/Appetizers/MiddleEasternAppetizers"
import EuropeanAppetizers from "./components/Appetizers/EuropeanAppetizers";
import AfricanAppetizers from "./components/Appetizers/AfricanAppetizers";
import NorthAmericanAppetizers from "./components/Appetizers/NorthAmericanAppetizers";
import SouthAmericanAppetizers from "./components/Appetizers/SouthAmericanAppetizers";
import AsianMainMeals from './components/MainMeals/AsianMainMeals';
import MiddleEasternMainMeals from "./components/MainMeals/MiddleEasternMainMeals";
import AfricanMainMeals from './components/MainMeals/AfricanMainMeals';
import EuropeanMainMeals from './components/MainMeals/EuropeanMainMeals';
import NorthAmericanMainMeals from './components/MainMeals/NorthAmericanMainMeals';
import SouthAmericanMainMeals from "./components/MainMeals/SouthAmericanMainMeals";
import Desserts from './components/Desserts/desserts';
import ContactUs from './components/ContactAndRecipe/contact';
import AddRecipeForm from './components/ContactAndRecipe/recipeSubmission';
import LoginLogout from './components/User/logIn-out';
import Register from './components/User/registration';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Home /> <HomeMiddle />{" "}
            </>
          }
        />
        <Route path="/appetizers/asian" element={<AsianAppetizers />} />
        <Route
          path="/appetizers/middle_eastern"
          element={<MiddleEasterAppetizers />}
        />
        <Route path="/appetizers/european" element={<EuropeanAppetizers />} />
        <Route path="/appetizers/african" element={<AfricanAppetizers />} />
        <Route
          path="/appetizers/north_american"
          element={<NorthAmericanAppetizers />}
        />
        <Route
          path="/appetizers/south_american"
          element={<SouthAmericanAppetizers />}
        />
        <Route path="/main_meals/asian" element={<AsianMainMeals />} />
        <Route
          path="/main_meals/middle_eastern"
          element={<MiddleEasternMainMeals />}
        />
        <Route path="/main_meals/african" element={<AfricanMainMeals />} />
        <Route path="/main_meals/european" element={<EuropeanMainMeals />} />
        <Route
          path="/main_meals/north_american"
          element={<NorthAmericanMainMeals />}
        />
        <Route
          path="/main_meals/south_american"
          element={<SouthAmericanMainMeals />}
        />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/add_recipe" element={<AddRecipeForm />} />
        <Route path="/login_logout" element={<LoginLogout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// function App() {
//   return (
//     <div>
//       <Header />
//       <Home />
//       <HomeMiddle />
//       <Footer />
//     </div>
//   );
// }

// export default App;

 
 {
   /* <Route path="/main_meals" element={<MainCourses />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/registration" element={<Registration />} /> */
 }