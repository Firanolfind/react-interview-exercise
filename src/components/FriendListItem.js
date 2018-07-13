import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {

  render() {
    const {
      name,
      sex,
      id,
      starred,
      starFriend,
      deleteFriend
    } = this.props;

    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{name}</span></div>
          <div>
            <small>xx friends in common</small>
          </div>
          <div>
            <small>{sex}</small>
            {' '}
            <i className={classNames("fa", {
              "fa-mars": sex === 'male',
              "fa-venus": sex === 'female'
            })} />
          </div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={starFriend.bind(null, id)}>
            <i className={classNames('fa', {
              'fa-star': starred,
              'fa-star-o': !starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={deleteFriend.bind(null, id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired,
  deleteFriend: PropTypes.func.isRequired
};

export default FriendListItem
