import React from 'react';
import { shallow } from 'enzyme';
import Svg from '../svg';

describe('Svg', function() {
  describe('Estrutura', function() {
    it('exibe o componente default', () => {
      const component = shallow(<Svg image="#icon-bank-slip" />);
      expect(component).toMatchSnapshot();
    });
  });
});
