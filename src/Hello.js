import React, { Component } from "react";

class Hello extends Component {
  render() {
    const { name } = this.props;
    return <div className="hello-row">hello {name ? name : "world"}</div>;
  }
}

export default Hello;
