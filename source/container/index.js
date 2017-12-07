import React from 'react';
import { View } from 'react-native';

export default ({ children, full }) => <View style={styles.body(full)}>{children}</View>;

const styles = {
  body: full => ({
    padding: full ? 0 : 10,
    width: '100%',
  }),
};
