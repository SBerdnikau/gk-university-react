import React, { Component } from 'react';
import { Link } from 'react-router';

export default class UserItem extends Component {
  render() {
    const { username, name, email, phone, website } = this.props;

    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/users/${this.props.id}`}>
            {name}
          </Link>
        </div>
        <div className="card-body text-secondary">
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{website}</p>
        </div>
      </div>
    )
  }
}
