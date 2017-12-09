import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { setOptions } from '@storybook/addon-options';
import { loadStories } from './story-loader';

// import stories
configure(() => {
  require('./welcome/welcome.story');
  loadStories()
}, module);

const StorybookUI = getStorybookUI({
  port: 9000,
  onDeviceUI: true,
});

setTimeout(
  () =>
    setOptions({
      name: 'React Native UI',
    }),
  100
);

AppRegistry.registerComponent('reactnativeui', () => StorybookUI);

export default StorybookUI;