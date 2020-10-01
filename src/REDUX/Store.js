import allReducers from "./Reducers"
const { createStore } = require("redux")

var myStore = createStore(allReducers)

export default myStore
