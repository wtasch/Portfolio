import React, { Component } from 'react';
import axios from 'axios';

//import './App.css';
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      username: '',
      password: '',
    };
  }

  
  componentDidMount = () => {
    this.getPosts();
  };
  getPosts = async () => {
    const response = await axios.get('http://localhost:3004/post/all');
    this.setState({
      posts: response.data,
    });
  };
  loginOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  login = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    const response = await axios.post('http://localhost:3004/auth/login', data);
    console.log(response);
  };

  signupOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  login = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    const response = await axios.post('http://localhost:3004/auth/login', data);
    console.log(response);
  };
  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <div>
          <h3>{post.title}</h3>
          <img src={post.img} alt='family picture' />
          <p>
            {post.body}, {post.taskId}
          </p>
        </div>
      );
    });
    return (
      <div className='App'>
        <form onSubmit={this.login}>
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.loginOnChange}
          />
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.loginOnChange}
          />
          <input type='submit' value='Login' />
        </form>
        {posts}
      </div>
    );
  }

}
export default Parent;