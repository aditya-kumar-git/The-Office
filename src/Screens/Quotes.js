import gsap from "gsap"
import React from "react"
import { connect } from "react-redux"
import officeQuotes from "../Images/officeQuotes.png"
import { quoteApiCall, clearQuote } from "../REDUX/Actions"

class Quotes extends React.Component {
  constructor(props) {
    super(props)
    this.props.clearQuote()
  }
  componentDidMount() {
    var tl = gsap.timeline()
    tl.from(".imgcontainer", { duration: 1, opacity: 0 })
    tl.from(".buttonContainer", { duration: 0.7, opacity: 0, y: "100%" })
  }
  componentDidUpdate(prevProps, prevState) {
    var tl = gsap.timeline()
    tl.from(".quoteContent", { duration: 1, opacity: 0, y: "100%" })
    tl.from(".quoteName", { duration: 0.6, opacity: 0 }, 1)
    tl.from(".quoteSym", { duration: 0.6, opacity: 0, x: "-500%" }, 1)
  }

  render() {
    var quoteRender = () => {
      if (this.props.quoteRed.length !== 0) {
        var quoteData = this.props.quoteRed
        return (
          <div className="theQuote">
            <div className="quoteContent">{quoteData.content}</div>
            <div className="quoteCharacter">
              <div className="quoteSym">~</div>
              <div className="quoteName">{quoteData.character.firstname}</div>
              <div className="quoteName">{quoteData.character.lastname}</div>
            </div>
          </div>
        )
      } else {
        return <div></div>
      }
    }

    return (
      <div>
        <div className="imgcontainer">
          <img src={officeQuotes} alt="" />
        </div>
        <div className="buttonContainer">
          <div
            onClick={() => {
              console.log("CHALU")
              this.props.quoteApiCall()
            }}
            className="quoteButton"
          >
            Get A Quote
          </div>
        </div>

        {/* //@Quote */}

        <div className="quoteContainer">{quoteRender()}</div>
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { quoteApiCall, clearQuote })(Quotes)
