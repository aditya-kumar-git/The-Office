import gsap from "gsap"
import React from "react"
import { connect } from "react-redux"
import EpiComp from "../Components/EpiComp"
import officeEpisodes from "../Images/officeEpisodes.png"

class Episodes extends React.Component {
  componentDidMount() {
    var tl = gsap.timeline()
    tl.from(".imgcontainer", { duration: 1, opacity: 0 })
    tl.from(".EpiComp", {
      y: "50%",
      opacity: "0",
      stagger: 0.3,
      duration: 0.5,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.episodesRed.length === 0) {
      console.log("ZERO KHA SE HAI")
      var tl = gsap.timeline()
      tl.from(".EpiComp", {
        y: "50%",
        opacity: "0",
        stagger: 0.3,
        duration: 0.5,
      })
    }
  }

  render() {
    return (
      <div>
        <div className="imgcontainer">
          <img src={officeEpisodes} alt="" />
        </div>
        <div>
          {this.props.episodesRed.map((element) => {
            return <EpiComp key={element._id} eleData={element} />
          })}
        </div>
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Episodes)
