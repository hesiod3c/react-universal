import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, Text } from 'react-native';
import Touchable from '../touchable';

const Button = ({ styleType, size, rounded, block, onPress, children, loading }) => {
  const defaultStyle = styles.default(block, rounded, size);
  const buttonStyle = loading ? styles.loading.button : styles[styleType].button;

  return (
    <Touchable onPress={onPress} style={defaultStyle.body} disabled={loading}>
      <View style={Object.assign({}, defaultStyle.button, buttonStyle)}>
        {loading
          ? <ActivityIndicator color="#999" animating={true} size="large" style={defaultStyle.loadingContent} />
          : <Text style={defaultStyle.text}>{children}</Text>}
      </View>
    </Touchable>
  );
};

Button.defaultProps = {
  styleType: 'primary',
  size: 'normal',
  block: true,
  rounded: true,
};

Button.propTypes = {
  styleType: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'large']),
  block: PropTypes.bool,
  rounded: PropTypes.bool,
};

const styles = {
  default: (block, rounded, size) => {
    return {
      body: {
        alignSelf: 'center',
        /* start ios */
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowColor: '#ccc',
        shadowRadius: 1,
        shadowOpacity: 1,
        borderRadius: rounded ? 5 : 0,
        /* end ios */
        maxWidth: size === 'large' ? 250 : '100%',
      },
      button: {
        margin: 0,
        borderRadius: rounded ? 5 : 0,
        alignSelf: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
        /* start android */
        elevation: 3,
        /* end android */
        maxWidth: size === 'large' ? 250 : '100%',
      },
      text: {
        flex: block ? 1 : 0,
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        marginBottom: 0,
        fontSize: 24,
      },
      loadingContent: {
        flex: block ? 1 : 0,
        padding: 10,
      },
    };
  },
  loading: {
    button: {
      backgroundColor: '#ccc',
    },
  },
  primary: {
    button: {
      backgroundColor: '#40cd28',
    },
  },
  secondary: {
    button: {
      backgroundColor: '#33bdf2',
    },
  },
};

export default Button;
