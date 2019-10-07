import React, { Component } from 'react'
import UsersList from '../components/UsersList';
import userStore from '../stores/userStore';
import { getUsers, addUser } from '../actions/actionCreators';


export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.newUser = this.newUser.bind(this);
  }

  newUser() {
    const name = 'New user';
    const email = 'email@mail';
    const phone = '12346789';
    const website = 'site.test.ru';

    addUser( name, email, phone, website);
  }

  onUserChange() {
    const users = userStore.users;
    this.setState({ users });
  }

  render() {
    return (
        <div>
          <button onClick={this.newUser} className="btn btn-primary">Добавить пользователя</button>
          {
            (!this.props.children) ?
                (<UsersList users={this.state.users}/>)
                :
                (this.props.children)
          }
        </div>
    )
  }

  componentDidMount() {
    getUsers();
    userStore.on('change', this.onUserChange);
  }

  componentWillUnmount() {
    userStore.removeListener('change', this.onUserChange);
  }
}
