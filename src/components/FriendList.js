import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import classNames from 'classnames';

class FriendList extends Component {
  render () {

    const currentPage = 1;
    const ppp = 2;
    const pages = Math.ceil(this.props.friends.length / ppp);
    const offset = currentPage * ppp;

    return (
      <div>
        <ul className={styles.friendList}>
          {
            this.props.friends
              .slice(currentPage, ppp)
              .map((friend, index) => {
                return (
                  <FriendListItem
                    key={index}
                    id={index}
                    name={friend.name}
                    starred={friend.starred}
                    {...this.props.actions} />
                );
              })
          }
        </ul>
        <ul className="pagination">
          {[...Array(pages)].map((val, index) => {
            return (
              <li 
                key={index} >
                  <button 
                    className={classNames(
                      "btn btn-sm",
                      (index === currentPage ? 'btn-success' : 'btn-default')
                    )}>
                    {index + 1}
                  </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
