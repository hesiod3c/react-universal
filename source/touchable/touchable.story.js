import React from 'react';
import { storiesOf, CenterView } from '../../internals/storybook/helpers/index';

import { View, Text } from 'react-native';
import Touchable from './index';

storiesOf('Touchable', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Touchable>
      <View>
        <Text>Clique aqui</Text>
      </View>
    </Touchable>
  ));
