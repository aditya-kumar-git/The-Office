const { combineReducers } = require("redux")

var dummyReducer = (iniState = 0, action) => {
  switch (action.type) {
    case "ONE":
      return 1

    default:
      return iniState
  }
}

var allReducers = combineReducers({ dummyReducer })

export default allReducers
