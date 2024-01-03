import React, { Component } from "react";

export default class Subscribe extends Component {
  constructor() {
    super();

    this.state = {
      chanell: "please Subscribe",
    };
  }
  changeMessage() {
    this.setState({
      chanell: "thank you for your subscription",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.chanell}</h1>
        <button onClick={() => this.changeMessage()}>subscribe</button>
      </div>
    );
  }
}
