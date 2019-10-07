import axios from 'axios';
import dispatcher from '../dispatcher';

export function getPosts() {
  axios.get('http://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      const data = response.data;
      const action = {
        type: 'GET_POSTS',
        data: data
      };
      dispatcher.dispatch(action);
    })
}

export function getUsers() {
    axios.get('http://jsonplaceholder.typicode.com/users/')
        .then(response => {
            const data = response.data;
            const action = {
                type: 'GET_USERS',
                data: data
            };
            dispatcher.dispatch(action);
        })
}

export function addPost(title, userId, body) {
  const action = {
    type: 'ADD_POST',
    data: { title, userId, body }
  };
  dispatcher.dispatch(action);
}

export function addUser( name, email, phone, website) {
    const action = {
        type: 'ADD_USER',
        data: {  name, email, phone, website }
    };
    dispatcher.dispatch(action);
}