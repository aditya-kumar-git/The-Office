import React from "react"
import { connect } from "react-redux"
import { BrowserRouter, Link, Route } from "react-router-dom"

//! PAGES
import Characters from "./Screens/Characters"
import Episodes from "./Screens/Episodes"
import Crew from "./Screens/Crew"
import Quotes from "./Screens/Quotes"

class App extends React.Component {
  componentDidMount() {
    console.log(this.props.dummyReducer)
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* //!NAVIGATION BAR */}

          <div>
            <Link to="/">
              <div>Characters</div>
            </Link>

            <Link to="/episodes">
              <div>Episodes</div>
            </Link>

            <Link to="/crew">
              <div>Crew</div>
            </Link>

            <Link to="/quotes">
              <div>Quotes</div>
            </Link>
          </div>

          {/* //!NAVIGATION BAR */}

          {/* //@PAGES */}

          <Route component={Characters} path="/" exact />
          <Route component={Episodes} path="/episodes" />
          <Route component={Crew} path="/crew" />
          <Route component={Quotes} path="/quotes" />

          {/* //@PAGES */}
        </BrowserRouter>
      </div>
    )
  }
}

var setPropToState = (state) => {
  return state
}

export default connect(setPropToState)(App)
