import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    return (
      <div className="add-form">
        <input
          type="text"
          autoFocus="true"
          className={classNames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={this.state.name}
          onChange={this.handleInputChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)} />
        <div className="btn-group btn-sex">
          <button 
            type="button" 
            className={classNames("btn btn-xs",
              [this.state.sex === 'male' ? "btn-success": "btn-default"]
            )}
            onClick={this.handleSexChange.bind(this, 'male')} >
            {'Male'}
          </button>
          <button 
            type="button" 
            className={classNames("btn btn-xs",
              [this.state.sex === 'female' ? "btn-success": "btn-default"]
            )}
            onClick={this.handleSexChange.bind(this, 'female')} >
            {'Female'}
          </button>
        </div>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      sex: this.props.sex || 'male'
    };
  }

  handleInputChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSexChange (sex, e) {
    this.setState({ sex: sex });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addFriend(name, this.state.sex);
      this.setState({ name: '' });
    }
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
