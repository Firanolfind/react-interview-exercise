import React from 'react';
import { noop } from 'lodash';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import AddFriendInput from '../../../src/components/AddFriendInput';

describe('AddFriendInput', function() {
  it('should render <div class="add-form"> tag', () => {
    const wrapper = shallow(<AddFriendInput addFriend={noop} />);
    expect(wrapper.find('div.add-form').exists()).toBeTruthy();
  });

  it('should track input change name text', () => {
  	const name = 'Lol';
    const wrapper = shallow(<AddFriendInput addFriend={noop} />);
    wrapper.find('input.form-control').simulate('change', {target:{value: name}});
    expect(wrapper.state().name).toBe(name);
  });

  it('should track sex change', () => {
    const wrapper = shallow(<AddFriendInput addFriend={noop} />);
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.state().sex).toBe('female');
  });

});