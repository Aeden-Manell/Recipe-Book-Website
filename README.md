# Recipe Book Website

This repository contains a simple web application for displaying different recipes. The application consists of two main pages - the "Recipes List" page and the "Recipe Detail" page. The goal of this project is to create a user-friendly recipe book website that allows users to explore various recipes and view detailed information about each recipe.

## Contributors

- Aeden
- Rethabile

## Objective

The objective of this project is to create a simple web application that allows users to browse and access different recipes. The application should have the following features:

1. **Recipes List Page**: This is the main page where all the recipes are listed. Each recipe item should display the title and a short description. Clicking on a recipe item should navigate to the Recipe Detail page for that specific recipe.

2. **Recipe Detail Page**: This page should provide more detailed information about the selected recipe, including ingredients, preparation steps, and a picture if available. The page should also include a back button that allows users to navigate back to the Recipes List page.

## Requirements

To fulfill the objective of this project, the following requirements should be met:

1. **State Management**: The application should have a state to manage the list of recipes. Each recipe should be represented as an object with properties such as title, short description, ingredients, preparation steps, and a picture URL. The state should be managed using the `useState` hook.

2. **Routing**: React Router should be used to manage routing in the application. The Recipes List page should be accessible via the "/" path, and each Recipe Detail page should have a unique identifier in the path, following the "/recipe/:id" format.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/recipe-book-website.git`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your web browser and visit `http://localhost:3000` to view the application.

## Technologies Used

- React.js
- React Router
- HTML
- CSS

## Conclusion

This project aims to provide a recipe book website with an intuitive user interface for browsing and accessing various recipes. By following the requirements and getting started guide, you can contribute to this project and enhance its functionality. We welcome any feedback or contributions to make this recipe book website even better. Happy cooking!
