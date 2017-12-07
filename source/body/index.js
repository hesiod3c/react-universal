import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

const Body = ({ children, backgroundColor }) => {
  return (
    <ScrollView style={styles.body(backgroundColor)}>
      {children}
    </ScrollView>
  );
};

Body.propTypes = {
  color: PropTypes.string,
};

Body.defaultProps = {
  color: '#eee',
};

const styles = {
  body: backgroundColor => ({
    flex: 1,
    width: '100%',
    backgroundColor,
  }),
};

export default Body;
