import React from 'react';
import { View, Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Touchable from './index';
import CenterView from '../..//storybook/centerview';

storiesOf('Touchable', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Touchable>
      <View>
        <Text>Clique aqui</Text>
      </View>
    </Touchable>
  ));