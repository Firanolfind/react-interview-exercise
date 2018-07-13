import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  render () {

    const from = this.props.currentPage * this.props.ppp;
    const to = (this.props.currentPage + 1) * this.props.ppp;

    return (
        <ul className={styles.friendList}>
          {
            this.props.friends
              .slice(from, to)
              .map((friend, index) => {
                return (
                  <FriendListItem
                    key={index}
                    id={from + index}
                    name={friend.name}
                    sex={friend.sex}
                    starred={friend.starred}
                    {...this.props.actions} />
                );
              })
          }
        </ul>
    );
  }

}

FriendList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  ppp: PropTypes.number.isRequired,
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
