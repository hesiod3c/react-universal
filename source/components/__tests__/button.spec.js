import React from 'react';
import { shallow } from 'enzyme';
import Button from '../button';

describe('Button', function() {
  describe('Estrutura', function() {
    it('exibe o botão primário', () => {
      const component = shallow(<Button>Text</Button>);
      expect(component).toMatchSnapshot();
    });

    it('exibe o botão secundário', () => {
      const component = shallow(<Button styleType="secondary">Text</Button>);
      expect(component).toMatchSnapshot();
    });

    it('exibe o botão com tamanho large', () => {
      const component = shallow(<Button size="large">Text</Button>);
      expect(component).toMatchSnapshot();
    });

    it('exibe o botão acompanhando o tamanho do conteúdo interno', () => {
      const component = shallow(<Button block={false}>Text</Button>);
      expect(component).toMatchSnapshot();
    });

    it('exibe o botão com loading', () => {
      const component = shallow(<Button loading={true}>Text</Button>);
      expect(component).toMatchSnapshot();
    });
  });
});
