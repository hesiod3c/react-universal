import React from 'react';

export default class Touchable extends React.Component {
  onPress() {
    const { onPress } = this.props;
    setTimeout(onPress, 200);
  }

  render() {
    return <div onClick={this.onPress} {...this.props} />;
  }
}
