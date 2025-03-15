"use client";

import React, { useEffect, useState } from 'react';

const Recipe1 = ({ meal }) => {
  // Create array of non-empty ingredients with their measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`] && meal[`strIngredient${i}`].trim()) {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`] || ''
      });
    }
  }

  return (
    <div className="bg-blue-100 border border-gray-300 p-6 rounded-lg shadow-lg w-full mx-auto mb-4">
      <h2 className="text-4xl m-1 border-b-2 border-blue-600 underline text-black text-center">{meal.strMeal}</h2>
      
      {/* Ingredients Section */}
      <div>
        <h3 className="text-center text-3xl text-blue-800 mt-4">Ingredients:</h3>
        <ul className="list-inside text-center text-lg text-gray-700">
          {ingredients.map((item, index) => (
            <li key={index} className="my-1">{item.measure} {item.ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function page2() {
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch meals based on the ingredient
  const handleIngredientSelect = async (ingredient) => {
    setSelectedIngredient(ingredient);
    setLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await res.json();
      
      if (data.meals) {
        // For each meal, fetch the detailed information to get ingredients
        const mealDetailsPromises = data.meals.map(meal => 
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
            .then(res => res.json())
        );
        
        const mealDetailsResponses = await Promise.all(mealDetailsPromises);
        const detailedMeals = mealDetailsResponses.map(response => response.meals[0]);
        setMeals(detailedMeals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedIngredient = localStorage.getItem('selectedIngredient');
    if (storedIngredient) {
      handleIngredientSelect(storedIngredient);
    }
  }, []);

  return (
    <div className="min-h-screen bg-red-300 flex flex-col items-center py-8">
      <h1 className="text-5xl font-bold mb-6">Meals with {selectedIngredient}</h1>
      
      {loading ? (
        <p className="text-xl">Loading meals...</p>
      ) : (
        <div className="w-full max-w-4xl px-4">
          {meals.length > 0 ? (
            meals.map((meal) => (
              <Recipe1 key={meal.idMeal} meal={meal} />
            ))
          ) : (
            <p className="text-xl text-center">No meals found with this ingredient.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default page2;