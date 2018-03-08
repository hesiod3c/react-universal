import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Touchable from '../touchable';

import { styles } from '@descco/ui-core';

class Button extends PureComponent {
  render() {
    const { children, onClick, styleType, size } = this.props;

    if (!children) {
      return null;
    }

    const props = {
      styleType,
      size,
    };

    return (
      <Touchable onPress={onClick}>
        <View style={themeStyle(props).body}>
          <Text style={themeStyle(props).text}>{children}</Text>
        </View>
      </Touchable>
    );
  }
}

Button.defaultProps = {
  styleType: 'primary',
  size: 'md',
};

Button.propTypes = {
  styleType: PropTypes.string,
  size: PropTypes.string,
};

const themeStyle = props => ({
  body: {
    ...styles.button.body.style[props.styleType],
    ...styles.button.body.size[props.size],
  },
  text: {
    ...styles.button.text.style[props.styleType],
    ...styles.button.text.size[props.size],
  },
});

export default Button;
