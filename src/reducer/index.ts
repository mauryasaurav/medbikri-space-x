import { combineReducers } from "redux";

import dashboardReducer from './dashboard.ts';

/* Import all Reducer */
const reducers = {
  dashboard: dashboardReducer
};

export const rootReducer = combineReducers(reducers);