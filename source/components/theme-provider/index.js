import React, { Children } from 'react';
import PropTypes from 'prop-types';

class ThemeProvider extends React.Component {
  getChildContext() {
    return {
      theme: this.props.theme,
    };
  }
  render() {
    return Children.only(this.props.children);
  }
}

ThemeProvider.childContextTypes = {
  theme: PropTypes.shape({
    primaryColor: PropTypes.string,
    button: PropTypes.object,
  }),
};

export default ThemeProvider;
