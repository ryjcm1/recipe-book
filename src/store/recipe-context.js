import React from "react";

const RecipesContext = React.createContext({
  recipes: [
    {
      id: 1,
      title: "pizza",
      ingredients: [
        "cheese",
        "pepperoni",
        "flour",
        "active dried yeast",
        "salt",
      ],
      prepTime: 30,
      cookTime: 14,
      instructions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 2,
      title: "bolognese",
      ingredients: [
        "celery",
        "onions",
        "carrots",
        "ground veal",
        "ground beef",
        "red wine",
        "tomato paste",
        "salt",
        "pepper",
      ],
      prepTime: 20,
      cookTime: 180,
      instructions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 3,
      title: "roasted spatchcock chicken",
      ingredients: [
        "1 whole chicken",
        "garlic",
        "butter",
        "thyme",
        "salt",
        "peper",
      ],
      prepTime: 15,
      cookTime: 40,
      instructions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ],
});

export default RecipesContext
