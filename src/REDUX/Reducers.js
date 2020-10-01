const { combineReducers } = require("redux")

var dummyReducer = (iniState = 0, action) => {
  switch (action.type) {
    case "ONE":
      return 1

    default:
      return iniState
  }
}

var charactersRed = (iniState = [], action) => {
  switch (action.type) {
    case "CHAR":
      return action.payload

    default:
      return iniState
  }
}

var episodesRed = (iniState = [], action) => {
  switch (action.type) {
    case "EPI":
      return action.payload

    default:
      return iniState
  }
}

var crewRed = (iniState = [], action) => {
  switch (action.type) {
    case "CREW":
      return action.payload

    default:
      return iniState
  }
}
var quoteRed = (iniState = [], action) => {
  switch (action.type) {
    case "QUOTE":
      return action.payload

    default:
      return iniState
  }
}

var allReducers = combineReducers({
  dummyReducer,
  charactersRed,
  episodesRed,
  crewRed,
  quoteRed,
})

export default allReducers
