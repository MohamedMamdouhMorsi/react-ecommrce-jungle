import cartReducer from "./cart";
import loggedReducer from "./logged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    myCart:cartReducer,
    isLogged:loggedReducer
});

export default allReducers;