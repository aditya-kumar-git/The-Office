import thunk from "redux-thunk"
import allReducers from "./Reducers"
const { createStore, applyMiddleware } = require("redux")

var myStore = createStore(allReducers, applyMiddleware(thunk))

export default myStore
