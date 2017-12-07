import React from 'react';
import { View } from 'react-native';
import { Svg, G, LinearGradient, Path, Stop } from 'react-native-svg';

const svgs = {
  '#icon-close': {
    svg: (
      <G>
        <Path
          d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8"
          fill="#999"
        />
      </G>
    ),
    viewBox: '0 0 357 357',
    xs: {
      width: 16,
      height: 16,
    },
    sm: {
      width: 18,
      height: 18,
    },
    md: {
      width: 20,
      height: 20,
    },
    lg: {
      width: 22,
      height: 22,
    },
  },
  '#icon-star': {
    svg: (
      <Path
        d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118 l11.547-1.2L16.026,0.6L20.388,10.918z"
        fill="url(#halfGradient)"
      />
    ),
    viewBox: '0 0 32 32',
    xs: {
      width: 12,
      height: 12,
    },
    sm: {
      width: 15,
      height: 15,
    },
    md: {
      width: 20,
      height: 20,
    },
    lg: {
      width: 25,
      height: 25,
    },
    linearGradient: gradient => {
      if (!gradient) {
        gradient = {
          color: '#ffcc00',
          offsetColor1: '99.9%',
          offsetColor2: '100%',
        };
      }

      return (
        <LinearGradient id="halfGradient">
          <Stop offset={gradient.offsetColor1} stopColor={gradient.color} stopOpacity="1" />
          <Stop offset={gradient.offsetColor2} stopColor="#cccccc" stopOpacity="1" />
        </LinearGradient>
      );
    },
  },
  '#icon-arrow-right': {
    svg: (
      <G>
        <Path
          d="M345.44 248.292l-194.286 194.28c-12.36 12.366-32.397 12.366-44.75 0-12.354-12.353-12.354-32.39 0-44.743l171.914-171.91-171.91-171.903c-12.353-12.36-12.353-32.394 0-44.748 12.355-12.36 32.392-12.36 44.75 0l194.288 194.283c6.177 6.18 9.262 14.27 9.262 22.366 0 8.098-3.09 16.195-9.267 22.372z"
          fill="#999"
        />
      </G>
    ),
    viewBox: '0 0 451.846 451.847',
    xs: {
      width: 8,
      height: 8,
    },
    sm: {
      width: 14,
      height: 14,
    },
    md: {
      width: 22,
      height: 22,
    },
    lg: {
      width: 30,
      height: 30,
    },
  },
  '#icon-check': {
    svg: <Path d="M 9.2 10.7 2.1 3.6 0 5.7 8.2 13.9 9.2 15 22 2.1 19.9 0 9.2 10.7 l 0 0 z" fill="#ffffff" />,
    viewBox: '0 0 25 25',
    xs: {
      width: 8,
      height: 8,
    },
    sm: {
      width: 14,
      height: 14,
    },
    md: {
      width: 22,
      height: 22,
    },
    lg: {
      width: 30,
      height: 30,
    },
    xg: {
      width: 80,
      height: 80,
    },
  },
};

export default ({ type, size, image, onClick, linearGradient }) => {
  const svgProps = svgs[image];
  const style = svgProps[size || 'xs'];
  const { width, height } = style;

  return (
    <View style={Object.assign({}, { width, height }, styles.body)}>
      <Svg width={width} height={height} onPress={onClick} viewBox={svgProps.viewBox}>
        <G>
          {svgProps.svg}
          {svgProps.linearGradient && svgProps.linearGradient(linearGradient)}
        </G>
      </Svg>
    </View>
  );
};

const styles = {
  body: {
    flex: 0,
  },
};
