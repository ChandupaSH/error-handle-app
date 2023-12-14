import { combineReducers, configureStore } from "@reduxjs/toolkit";
import allDataReducer from "./slices/slice.js";


const rootReducer = combineReducers({
    allData: allDataReducer, 
  })
  
  const Store = configureStore({
    reducer: rootReducer,
  })
  

export default Store