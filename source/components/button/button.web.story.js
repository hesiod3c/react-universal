import React from 'react';
import { storiesOf } from '../../internals/storybook/helpers/index.web';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from './index.web';
import '../../node_modules/@descco/ui-core/lib/css/06-components/button.css';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.addWithInfo(
  'Style',
  `
    This is the basic usage with the button.
  `,
  () => (
    <div>
      <Button onClick={action('clicked')}>Default</Button>&nbsp;
      <Button style="primary">Primary</Button>&nbsp;
      <Button style="success">Success</Button>&nbsp;
      <Button style="info">Info</Button>&nbsp;
      <Button style="warning">Warning</Button>&nbsp;
      <Button style="danger">Danger</Button>&nbsp;
    </div>
  )
);

stories.addWithInfo('Size', () => (
  <div>
    <Button size="mini">Mini</Button>&nbsp;
    <Button size="small">Small</Button>&nbsp;
    <Button>Medium</Button>&nbsp;
    <Button size="large">Large</Button>&nbsp;
    <Button style="primary" size="large">Large</Button>&nbsp;
    <Button style="primary">Medium</Button>&nbsp;
    <Button style="primary" size="small">Small</Button>&nbsp;
    <Button style="primary" size="mini">Mini</Button>&nbsp;
  </div>
));

stories.addWithInfo('Outline', () => (
  <div>
    <Button outline>Default</Button>&nbsp;
    <Button style="primary" outline>Primary</Button>&nbsp;
    <Button style="success" outline>Success</Button>&nbsp;
    <Button style="info" outline>Info</Button>&nbsp;
    <Button style="warning" outline>Warning</Button>&nbsp;
    <Button style="danger" outline>Danger</Button>&nbsp;
  </div>
));

stories.addWithInfo('Active', () => (
  <div>
    <Button active>Default</Button>&nbsp;
    <Button style="primary" active>Primary</Button>&nbsp;
    <Button style="success" active>Success</Button>&nbsp;
    <Button style="info" active>Info</Button>&nbsp;
    <Button style="warning" active>Warning</Button>&nbsp;
    <Button style="danger" active>Danger</Button>&nbsp;
  </div>
));

stories.addWithInfo('Block', () => (
  <div>
    <Button block>Default</Button>&nbsp;
    <Button style="primary" block>Primary</Button>&nbsp;
    <Button style="success" block>Success</Button>&nbsp;
    <Button style="info" block>Info</Button>&nbsp;
    <Button style="warning" block>Warning</Button>&nbsp;
    <Button style="danger" block>Danger</Button>&nbsp;
  </div>
));

stories.addWithInfo('Disabled', () => (
  <div>
    <Button disabled={boolean('Disabled', false)}>{text('Text (default)', 'Default')}</Button>&nbsp;
    <Button style="primary" disabled={boolean('Disabled', false)}>{text('Text (primary)', 'Primary')}</Button>&nbsp;
    <Button style="info" disabled={boolean('Disabled', false)} rounded>{text('Text (rounded)', 'Rounded')}</Button>&nbsp;
    <Button style="warning" disabled={boolean('Disabled', false)} outline>{text('Text (outline)', 'Outline')}</Button>
    <br /><br />
    <Button style="danger" disabled={boolean('Disabled', false)} block>{text('Text (block)', 'Outline')}</Button>
  </div>
));

stories.addWithInfo('Loading', () => (
  <div>
    <Button loading={boolean('Loading', false)}>{text('Text (default)', 'Default')}</Button>&nbsp;
  </div>
));
