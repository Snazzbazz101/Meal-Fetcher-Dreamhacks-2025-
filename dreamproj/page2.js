
import React from 'react';

// creates function for recipe 1 in which it returns the name of the recipe and then the recipe itself under the name
// when touching the recipe itself it will then display the instructions on how to make it
// the recipe will be displayed in a card format
// will not have picture of food
const recipe_1 = (ingredients) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      {/* Recipe Card */}
      <div className="text-center border border-white p-0.5 rounded-sm mx-auto my-1 w-fit">
        <h2 className="text-4xl m-0">Recipe 1</h2>
      </div>

      {/* Ingredients Section */}
      <div>
        <h3 className="text-center text-3xl">Ingredients:</h3>
        <ul className="list-inside text-center">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// this function will return the name of the website and then the recipe_1 function
const page2 = () => {
  // connection to the api would have the ingredients be passed as a prop
  const ingredients = ['1 cup Flour', '2 Eggs', '1 cup Milk'];  // Example ingredients

  return (
    <div>
      {recipe_1(ingredients)} {/* Pass ingredients as prop */}
    </div>
  );
};

export default page2;