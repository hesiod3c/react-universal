import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Body from './index';
import CenterView from '../../storybook/centerview';

storiesOf('Body', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Body>
      <View>
        <Text>Body 1</Text>
      </View>
    </Body>
  ))
  .add('Custom color', () => (
    <Body backgroundColor="red">
      <View>
        <Text>Body with custom color</Text>
      </View>
    </Body>
  ));