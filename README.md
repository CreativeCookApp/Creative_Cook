# Creative_Cook
Creative Cook App / Client Project

![License](https://img.shields.io/github/license/johnturner4004/readme-generator.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/johnturner4004/readme-generator.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/johnturner4004/readme-generator.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/johnturner4004/readme-generator.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/johnturner4004/readme-generator.svg?style=for-the-badge)
    
# Creative Cook

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

Creative Cook is an application to encourage cooks of all different experience levels to branch out and try new things.  The app allows a user to start by selecting an ingredient they would like to work with.  Then, the app will suggest ingredients that pair well with the selected ingredient.  After selecting a second ingredient, the app will provide suggestions for a third ingredient.  The suggestions will pair well with either of the first two ingredients, or in the case of a "super combo", pair will with both of the already selected ingredients.  The idea of a flavor trio to build a recipe off of is a long accepted practice in the culinary arts.  After establishing a flavor trio, the app will search recipes across thousands of recipes on the internet and make suggestions based on your flavor combo and any health filters you need.  The app will provide a basic description of the recipe and a link to the recipe hosted on the original website.  This takes much of the work of finding a good recipe out of the process and allows the cook to focus on what they came here for, the food!

## Built With

<a href="https://www.heroku.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## Getting Started

This app uses PostgreSQL for database storage.  There is a database.sql file in the repository containing database structure and initial data for ingredients and pairings.  

### Prerequisites

This app requires Node.js, Express.js, and PostgreSQL, on the back end.  

### Installation

Start by forking and cloning the repository.  Then, create a database titled "creative_cook" on the localhost.  With the database established, run the SQL queries in database.sql to setup and populate tables in the database.  

After database setup, run the following commands in your terminal to install dependencies and spin up the client and backend servers.

npm install
npm run server
npm run client

At this point the app will spin up in your browser on localhost:3000

## Usage

There are many feature included in this app.  The main goal of the app is to create a flavor combo using the combo tool and search, save, and select recipes based on the flavor combos.

Start by searching for an ingredient in the ingredient search bar.  Select the desired ingredient from the list.  The app will suggest and second ingredient.  When you choose a second ingredient, the app will suggest a third ingredient.  Those ingredients at the top and highlighted in green are considered "super combos" and pair well with the first two selected ingredients.  Choose a third ingredient and the app will search and display recipes from across the internet using the Edamam Recipe API.  You can then save a recipe or recipes.  Clicking on "Start Recipe" on a recipe card will navigate you to the website that hosts that recipes.  After cooking the recipe, return to the Creative Cook app and click on your profile.  In the listed combos, click the checkmark next to the recipe you just cooked to update all of your metric with the new ingredients from the flavor combos used and mark the recipe as cooked. 

An administrator can establish featured flavor combos and post them to the home page feed for all users to see using the "Feed" page.


## License

<a href="https://choosealicense.com/licenses/mit/"><img src="https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/mit.svg" height=40 />MIT License</a>

## Acknowledgements

Thank you to Sean Little, our client and cooking expert.  Thank you to the folks at Flavor Bible for working with the team and allowing use of many of their features.  Thank you to the instructors and fellow classmate at Prime Digital Academy.  

## Contacts

<a href="https://www.linkedin.com/in/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>
