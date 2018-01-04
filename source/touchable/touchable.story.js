import React from 'react';
import { storiesOf } from '../../internals/storybook/helpers/index';

import { View, Text } from 'react-native';
import Touchable from './index';

storiesOf('Touchable', module)
  .add('Default', () => (
    <Touchable>
      <View>
        <Text>Clique aqui</Text>
      </View>
    </Touchable>
  ));
