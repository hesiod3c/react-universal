import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { setOptions } from '@storybook/addon-options';
import { loadStories } from './story-loader';
import ThemeProvider from '../../src/components/theme-provider';
import CenterView from '../native/centerview';

addDecorator((fn, { kind, story }) => <ThemeProvider theme={{}}><CenterView>{fn()}</CenterView></ThemeProvider>);

// import stories
configure(() => {
  require('../ui/welcome/welcome.story');
  loadStories()
}, module);

const StorybookUI = getStorybookUI({
  port: 9000,
  onDeviceUI: true,
});

class StorybookWrapper extends Component {
  render() {
    return StorybookUI();
  }
}

setTimeout(
  () =>
    setOptions({
      name: 'React Native UI',
    }),
  100
);

AppRegistry.registerComponent('reactnativeui', () => StorybookWrapper);

export default StorybookUI;
