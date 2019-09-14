import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { searchRobots } from "./SearchRobots/reducers";
import { requestRobots } from "./RequestRobots/reducers";

const rootReducer = combineReducers({ 
    SearchRobots: searchRobots, 
    RequestRobots: requestRobots
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);
  
    const store = createStore(
      rootReducer,
      composeWithDevTools(middleWareEnhancer)
    );
  
    return store;
}