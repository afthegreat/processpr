import React, { Component } from "react";

export default class Proportyc extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.name}kebede{this.props.age}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
