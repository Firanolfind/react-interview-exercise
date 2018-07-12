import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend, selectPage, nextPage, prevPage} from '../actions/FriendsActions';
import { FriendList, AddFriendInput, Pagination } from '../components';

class FriendListApp extends Component {

  render () {
    const { friendlist } = this.props;
    const friendListActions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend
    };
    const paginationActions = {
      selectPage: this.props.selectPage,
      nextPage: this.props.nextPage,
      prevPage: this.props.prevPage
    };
    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput 
          addFriend={friendListActions.addFriend} />
        <FriendList 
          friends={friendlist.friendsById} 
          ppp={friendlist.ppp}
          currentPage={friendlist.currentPage}
          actions={friendListActions} />
        <Pagination 
          pages={friendlist.pages} 
          currentPage={friendlist.currentPage} 
          actions={paginationActions}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  selectPage,
  nextPage,
  prevPage
})(FriendListApp)
