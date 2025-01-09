import React, { Component } from "react";

export class ClassEvent extends Component {
  Functionset() {
    alert("clicked button");
  }

  render() {
    return (
      <div>
        <button onClick={this.Functionset}>clickme</button>
      </div>
    );
  }
}

export default ClassEvent;
