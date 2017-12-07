import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';
import Svg from './index';
import CenterView from '../../storybook/centerview';

const styles = {
  flex: 0
};

storiesOf('Svg', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <View>
      <Text style={styles}>Estrela</Text>
      <View style={styles}>
        <Svg image="#icon-star" />
        <Svg image="#icon-star" size="sm" />
        <Svg image="#icon-star" size="md" />
        <Svg image="#icon-star" size="lg" />
      </View>

      <Text style={styles}>Fechar</Text>
      <View style={styles}>
        <Svg image="#icon-close" />
        <Svg image="#icon-close" size="sm" />
        <Svg image="#icon-close" size="md" />
        <Svg image="#icon-close" size="lg" />
      </View>

      <Text style={styles}>Seta para a direita</Text>
      <View style={styles}>
        <Svg image="#icon-arrow-right" />
        <Svg image="#icon-arrow-right" size="sm" />
        <Svg image="#icon-arrow-right" size="md" />
        <Svg image="#icon-arrow-right" size="lg" />
      </View>
    </View>
  ));