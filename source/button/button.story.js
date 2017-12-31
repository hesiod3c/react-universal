import React from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Button from './index';
import CenterView from '../../storybook/centerview';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => (
    <View>
      <Button onPress={action('clicked-text')}>
        <Text>Texto</Text>
      </Button>
      <Button onPress={action('clicked-text')} size='large'>
        <Text>Texto</Text>
      </Button>
      <Button onPress={action('clicked-text')} block={false}>
        <Text>Texto</Text>
      </Button>
    </View>
  ));
