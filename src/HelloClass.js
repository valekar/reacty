import React from "react";

class HelloClass extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Class {this.props.name}</h1>
      </div>
    );
  }
}

export default HelloClass;
