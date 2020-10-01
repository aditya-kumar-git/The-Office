const { default: Axios } = require("axios")

export var charactersApiCall = () => {
  return async (dispatch) => {
    try {
      var apiData = await Axios({
        url: "https://www.officeapi.dev/api/characters",
      })

      dispatch({ type: "CHAR", payload: apiData.data.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export var episodesApiCall = () => {
  return async (dispatch) => {
    try {
      var apiData = await Axios({
        url: "https://www.officeapi.dev/api/episodes",
      })
      dispatch({ type: "EPI", payload: apiData.data.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export var crewApiCall = () => {
  return async (dispatch) => {
    try {
      var apiData = await Axios({
        url: "https://www.officeapi.dev/api/crew",
      })
      dispatch({ type: "CREW", payload: apiData.data.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export var quoteApiCall = () => {
  return async (dispatch) => {
    try {
      var apiData = await Axios({
        url: "https://www.officeapi.dev/api/quotes/random",
      })

      dispatch({ type: "QUOTE", payload: apiData.data.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export var clearQuote = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR", payload: [] })
  }
}
