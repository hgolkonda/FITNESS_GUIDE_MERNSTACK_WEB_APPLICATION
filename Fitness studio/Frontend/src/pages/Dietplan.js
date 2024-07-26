import React, { useState } from "react";
import MealList from "../components/MealList";
import "../styles/css/_dietplan.css"
import Navbar from "../components/Navbar";

function Dietplan() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=bb06b31658634d5a9cbc76e578486156&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="App">
      <Navbar />
      <section className="controls" style={{marginLeft:"35%",marginTop:"5%"}}>
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData} style={{marginLeft:"8%"}}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default Dietplan;
