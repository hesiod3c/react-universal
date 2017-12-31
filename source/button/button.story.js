import React from 'react';
import { storiesOf, CenterView } from '../../internals/storybook/helpers/index';
import { action } from '@storybook/addon-actions';

import { Text, View } from 'react-native';
import Button from './index';

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
