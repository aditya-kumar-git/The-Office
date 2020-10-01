import React from "react"

class CrewComp extends React.Component {
  render() {
    var ele = this.props.eleData
    return (
      <div className="CrewComp">
        <div className="CrewCompIB">
          <div className="crewName">{ele.name}</div>
          <div className="crewRole">{ele.role}</div>
        </div>
      </div>
    )
  }
}

export default CrewComp
