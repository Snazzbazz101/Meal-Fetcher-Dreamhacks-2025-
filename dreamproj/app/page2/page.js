import React from 'react';

// Function for recipe 1 that returns the name of the recipe and the recipe itself
// When hovering over the recipe, it will display the instructions on how to make it
// The recipe will be displayed in a card format without a picture of food
const Recipe1 = ({ ingredients }) => {
  return (
    <div className="bg-blue-100 border border-gray-300 p-6 rounded-lg shadow-lg w-fit mx-auto">
      <div className="text-center mx-auto my-2 w-fit">
        <h2 className="text-4xl m-1 border-b-2 border-blue-600 underline text-black">Recipe 1</h2>
      </div>
      {/* Ingredients Section */}
      <div>
        <h3 className="text-center text-3xl text-blue-800">Ingredients:</h3>
        <ul className="list-inside text-center text-lg text-gray-700">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="my-1">{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// This function will return the name of the website and then the Recipe1 function
function page2() {
  // Example ingredients
  const ingredients = ['1 cup Flour', '2 Eggs', '1 cup Milk', '1/2 cup Sugar', '1/4 cup Butter', '1 cup Flour', '2 Eggs', '1 cup Milk', '1/2 cup Sugar', '1/4 cup Butter', '1 cup Flour', '2 Eggs', '1 cup Milk', '1/2 cup Sugar', '1/4 cup Butter'];

  return (
    <div className="min-h-screen bg-red-300 flex items-center justify-center">
      <Recipe1 ingredients={ingredients} /> 
    </div>
    
  );
};

export default page2;
