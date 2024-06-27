import { combineReducers } from "@reduxjs/toolkit";
import { configuerStore } from "~/app/appSlice";
import analysisReducer from "~/app/dashboard/analysis/analysisSlice";
const reducer = combineReducers({
    config: configuerStore,
    analysisSlice:analysisReducer,

})

export default reducer;
