import React from "react"

class CharComp extends React.Component {
  render() {
    var data = this.props.eleData

    return (
      <div>
        <div className="CharComp">
          <div>{data.firstname}</div>
          <div>{data.lastname}</div>
        </div>
      </div>
    )
  }
}

export default CharComp
