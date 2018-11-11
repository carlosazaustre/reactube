import React, { Component } from 'react';
import RegularError from '../components/regular-error';

class HandleError extends Component {
  state = {
    handleError: false,
  }

  componentDidCatch(error, info) {
    //TODO: Use Sentry to send this error data to a cloud service.
    this.setState({
      handleError: true,
    });
  }

  render() {
    if (this.state.handleError) {
      return (
        <RegularError />
      );
    }
    return this.props.children;
  }
}

export default HandleError;