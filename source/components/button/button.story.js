import React from 'react';
import { storiesOf } from '../../../internals/storybook/helpers';
import { action } from '@storybook/addon-actions';

import { Text, View } from 'react-native';
import Button from '../button';

storiesOf('Button', module)
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
