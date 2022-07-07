import { combineReducers } from "redux";
import filmList from "./filmList";
import user from "./user";

const rootReducer = combineReducers({
    filmList,
    user
});

export default rootReducer;