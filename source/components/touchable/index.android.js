import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

const canUseRipple = TouchableNativeFeedback.canUseNativeForeground();

class Touchable extends React.Component {
  onPress() {
    const { onPress } = this.props;
    setTimeout(onPress, 50);
  }

  render() {
    if (canUseRipple) {
      return (
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#fff', false)}
          onPress={this.onPress.bind(this)}
        >
          <View pointerEvents="box-only">
            {this.props.children}
          </View>
        </TouchableNativeFeedback>
      );
    }

    return <TouchableOpacity onPress={this.onPress} {...this.props} />;
  }
}
export default Touchable;
