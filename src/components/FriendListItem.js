import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {

  render() {
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{this.props.name}</span></div>
          <div>
            <small>xx friends in common</small>
          </div>
          <div>
            <small>{this.props.sex}</small>
            {' '}
            <i className={classNames("fa", {
              "fa-mars": this.props.sex === 'male',
              "fa-venus": this.props.sex === 'female'
            })} />
          </div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classNames('fa', {
              'fa-star': this.props.starred,
              'fa-star-o': !this.props.starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.deleteFriend(this.props.id)}>
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
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired
};

export default FriendListItem
