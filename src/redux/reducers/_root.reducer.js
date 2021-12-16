import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import challenge from './challenge.reducer';
import ingredients from './ingredients.reducer';
import recipes from './recipe.reducer';
import combo from './combo.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  challenge, // will contain all challenges made
  ingredients, // holds all information from DB for ingredients
  recipes, // holds the response of recipes from API (edamam)
  combo, // holds the selected ingredients while creating a flavor combo (3 ingredients)
});

export default rootReducer;
