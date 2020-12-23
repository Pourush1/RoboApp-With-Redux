import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  //how to change hasError , Soln => using lifecycle method
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <h1>There is an error!!</h1>;
    return this.props.children;
  }
}

export default ErrorBoundry;
