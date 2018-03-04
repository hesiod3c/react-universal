import React, { Component } from 'react';

export default class Touchable extends Component {
  onPress() {
    const { onPress } = this.props;
    setTimeout(onPress, 200);
  }

  render() {
    return <div onClick={this.onPress} {...this.props} />;
  }
}
