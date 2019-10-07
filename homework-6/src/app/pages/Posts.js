import React, { Component } from 'react'
import postStore from '../stores/postStore';
import { getPosts, addPost } from '../actions/actionCreators';
import PostsList from '../components/PostsList';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.onPostChange = this.onPostChange.bind(this);
    this.newPost = this.newPost.bind(this);
  }

  newPost() {
    const body = 'Текст внутри body';
    const userId = 1;
    const title = 'Мой пост';

    addPost(title, userId, body);
  }

  onPostChange() {
    const posts = postStore.posts;
    this.setState({ posts });
  }

  render() {
    return (
      <div>
        <button onClick={this.newPost} className="btn btn-primary">Добавить пост</button>
        <PostsList posts={this.state.posts} />
      </div>
    )
  }

  componentDidMount() {
    getPosts();
    postStore.on('change', this.onPostChange);
  }

  componentWillUnmount() {
    postStore.removeListener('change', this.onPostChange);
  }
}
