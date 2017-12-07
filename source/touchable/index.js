import React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

const TouchableFeedback = props => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .32)', true)}
    delayPressIn={0}
    useForeground={true}
    {...props}
  />
);

const Touchable = Platform.select({
  ios: () => TouchableOpacity,
  android: () => TouchableFeedback,
})();

export default Touchable;
