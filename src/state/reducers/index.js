import { combineReducers } from "redux";
import pageType from "./pageReducer";
import ButtonType from "./buttonActionReducer";
// import loadType from "./loadReducer";

const reducers = combineReducers({
  page: pageType,
  button: ButtonType

});

export default reducers;