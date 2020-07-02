import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "../reducer";
import thunk from "redux-thunk";

let middleware = [thunk];

export default createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
)