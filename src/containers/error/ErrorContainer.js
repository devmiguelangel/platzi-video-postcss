import React, { Component, Fragment } from 'react';
import ErrorComponent from './../../components/error/ErrorComponent';


export default class ErrorContainer extends Component {
  state = {
    error: false,
  }

  componentDidCatch = (error, info) => {
    this.setState({
      error: true,
    })
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorComponent />
      )
    }
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}