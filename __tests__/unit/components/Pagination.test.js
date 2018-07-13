import React from 'react';
import { noop } from 'lodash';
import { shallow, mount } from 'enzyme';
import Pagination, { Button } from '../../../src/components/Pagination';

const defaults = {
  pages: 10,
  currentPage: 0,
  actions: {
    prevPage: noop,
    nextPage: noop,
    selectPage: noop
  }
}

describe('Pagination', function() {
  it('should render <ul> tag', () => {
    const wrapper = shallow(<Pagination {...defaults} />);
    expect(wrapper.find('ul').exists()).toBeTruthy();
  });

  it('should contain <Button> component', () => {
    const wrapper = mount(<Pagination {...defaults} />);
    expect(wrapper.render().find('Button').length).toBe(7);
  });

  it('should contain <li>', () => {
    const wrapper = mount(<Pagination {...defaults} />);
    expect(wrapper.render().find('Button').length).toBe(7);
  });

  it('should fire selectPage', () => {
    const selectPage = jest.fn();
    const props = {
      ...defaults, 
      ...{
        actions: {
          ...defaults.actions, 
          selectPage
        }
      }
    };
    const wrapper = shallow(<Pagination {...props} />);
    wrapper.find(Button).at(5).simulate('click');
    expect(selectPage).toHaveBeenCalled();
  });
});