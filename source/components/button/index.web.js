import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';

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
      <button className={themeStyle(props).body} onClick={onClick}>
        <span className={themeStyle(props).text}>{children}</span>
      </button>
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
  body: classNames({
    [`${styles.button.body.style[props.styleType]}`]: props.styleType,
    [`${styles.button.body.size[props.size]}`]: props.size,
  }),
  text: classNames({
    [`${styles.button.text.style[props.styleType]}`]: props.styleType,
    [`${styles.button.text.size[props.size]}`]: props.size,
  }),
});

export default CSSModules(Button, styles.button);
