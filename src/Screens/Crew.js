import React from "react"
import officeCrew from "../Images/officeCrew.png"
import CrewComp from "../Components/CrewComp"
import { connect } from "react-redux"
import gsap from "gsap"

class Crew extends React.Component {
  componentDidMount() {
    var tl = gsap.timeline()
    tl.from(".imgcontainer", { duration: 1, opacity: 0 })
    tl.from(".officeHeading", { opacity: 0, duration: 0.5 })
    tl.from(".CrewComp", { duration: 0.4, y: "100%", opacity: 0, stagger: 0.2 })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.crewRed.length === 0) {
      var tl = gsap.timeline()
      tl.from(".officeHeading", { opacity: 0, duration: 0.5 })
      tl.from(".CrewComp", {
        duration: 0.4,
        y: "100%",
        opacity: 0,
        stagger: 0.2,
      })
    }
  }
  render() {
    return (
      <div>
        <div className="imgcontainer">
          <img src={officeCrew} alt="" />
        </div>
        <div className="officeHeading">Crew</div>
        <div className="CrewCompContiner">
          {this.props.crewRed.map((ele) => {
            return <CrewComp eleData={ele} key={ele._is} />
          })}
        </div>
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Crew)
