import { noop } from 'lodash';
import React from 'react';
import { shallow } from 'enzyme';
import { clamp } from 'lodash';
import FriendList from '../../../src/components/FriendList';
import FriendListItem from '../../../src/components/FriendListItem';

const defaults = {
  currentPage: 0,
  ppp: 2,
  friends: [{
    name: 'Xuyilary Clinton',
    sex: 'female',
    starred: false
  },
  {
    name: 'Donal Trump',
    sex: 'male',
    starred: true
  }],
  actions: {
    starFriend: noop,
    deleteFriend: noop
  }
}

describe('FriendList', function() {
  it('should render <ul> tag', () => {
    const wrapper = shallow(<FriendList {...defaults} />);
    expect(wrapper.find('ul').exists()).toBeTruthy();
  });

  it('should contain FriendListItem limit to `ppp`', () => {
    const wrapper = shallow(<FriendList {...defaults} />);
    expect(wrapper.find('FriendListItem').length).toBe(defaults.ppp);
  });

  it('should contain paged FriendListItem on next page', () => {
    const page = 1;
    const total = defaults.friends.length;
    const wrapper = shallow(<FriendList {...defaults} currentPage={page} />);
    expect(wrapper.find('FriendListItem').length).toBe(clamp(total - page * defaults.ppp, 0, total));
  });
});