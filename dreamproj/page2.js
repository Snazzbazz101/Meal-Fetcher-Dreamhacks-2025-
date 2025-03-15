import React from 'react'

const page2 = () => {
recipe_1();
  return (
    <header className="header">
      <h1>Website Logo</h1>
      <nav>
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    
    
  )
}

export default page2

// creates function for recipe 1 in which it return the name of the recipe and then the recipe itself under the name
// when touching the recipe itself it will then display the instructions on how to make it
// the recipe will be displayed in a card format
// will not have picture of food
const recipe_1 = () => {
    return (
        <div>
        <h1>Recipe 1</h1>
        <p>Ingredients: </p>
        <p>Instructions: </p>
        </div>
    )
}

