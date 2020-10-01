import React from "react"

class EpiComp extends React.Component {
  render() {
    var data = this.props.eleData

    return (
      <div className="EpiComp">
        <div className="title">{data.title}</div>
        <div className="desc">{data.description}</div>
      </div>
    )
  }
}

export default EpiComp
