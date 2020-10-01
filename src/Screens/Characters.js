import React from "react"
import { connect } from "react-redux"
import { charactersApiCall } from "../REDUX/Actions"
import CharComp from "../Components/CharComp"
import gsap from "gsap"
import officeCharacters from "../Images/officeCharacters.png"

class Characters extends React.Component {
  componentDidMount() {
    var tl = gsap.timeline()
    tl.from(".imgcontainer", { opacity: 0, duration: 1 })
    tl.from(".CharComp", {
      y: "100%",
      opacity: "0",
      stagger: 0.2,
      duration: 0.4,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.charactersRed.length === 0) {
      var tl = gsap.timeline()

      tl.from(".CharComp", {
        y: "100%",
        opacity: "0",
        stagger: 0.2,
        duration: 0.4,
      })
    }
  }

  render() {
    return (
      <div>
        <div className="imgcontainer">
          <img src={officeCharacters} alt="" />
        </div>

        <div className="CrewCompContiner">
          {this.props.charactersRed.map((element, index) => {
            return (
              <CharComp key={element._id} eleData={element} index={index} />
            )
          })}
        </div>
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { charactersApiCall })(Characters)
