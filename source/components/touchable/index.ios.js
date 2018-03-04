import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';

export default class Touchable extends Component {
  onPress() {
    const { onPress } = this.props;
    setTimeout(onPress, 200);
  }

  render() {
    return <TouchableHighlight underlayColor="#e9e9e9" onPress={this.onPress} {...this.props} />;
  }
}
