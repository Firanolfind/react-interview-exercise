import React from 'react';
import { noop } from 'lodash';
import { shallow } from 'enzyme';
import FriendListItem from '../../../src/components/FriendListItem';

const defaults = {
  starFriend: noop,
  deleteFriend: noop
}

describe('FriendListItem', function() {
  it('should render <li> tag', () => {
    const wrapper = shallow(<FriendListItem {...defaults} id={1} name="name" />);
    expect(wrapper.find('li').exists()).toBeTruthy();
  });

  it('should render name', () => {
  	const name = "Theodore Roosevelt";
    const wrapper = shallow(
      <FriendListItem {...defaults} id={1} name={name} />
    );
    expect(
      wrapper.find('li > div > div > span')
    	.text()).toBe(name);
  });

  it('should render sex', () => {
  	const sex = "male";
    const wrapper = shallow(
      <FriendListItem {...defaults} id={1} name="name" sex={sex} />
    );
    expect(
      wrapper.find('li > div > div > small')
      	.at(1)
    	.text()).toBe(sex);
  });

  it('should render sex icon', () => {
  	const sex = "female";
    const wrapper = shallow(
      <FriendListItem {...defaults} id={1} name="name" sex={sex} />
    );
    expect(
      wrapper.find('li > div > div > i').at(0).hasClass('fa-venus')
    ).toBeTruthy();
  });

  it('should render starred icon', () => {
    const wrapper = shallow(
      <FriendListItem {...defaults} id={1} name="name" starred />
    );
    expect(
      wrapper.find('li > div > button > i').at(0).hasClass('fa-star')
    ).toBeTruthy();
  });

  it('should render unstarred icon', () => {
    const wrapper = shallow(
      <FriendListItem {...defaults} id={1} name="name" />
    );
    expect(
      wrapper.find('li > div > button > i').at(0).hasClass('fa-star-o')
    ).toBeTruthy();
  });

  it('should fire starFriend function', () => {
  	var clickCount = 0;
  	const starFriend = jest.fn();
    const wrapper = shallow(<FriendListItem {...defaults} id={1} name="name" starFriend={starFriend} />);
    wrapper.find('.fa-star-o').parent().simulate('click');
    expect(starFriend).toHaveBeenCalled();
  });

  it('should fire deleteFriend function', () => {
  	var clickCount = 0;
  	const deleteFriend = jest.fn();
    const wrapper = shallow(<FriendListItem {...defaults} id={1} name="name" deleteFriend={deleteFriend} />);
    wrapper.find('.fa-trash').parent().simulate('click');
    expect(deleteFriend).toHaveBeenCalled();
  });
});