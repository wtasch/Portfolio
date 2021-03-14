import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      username: '',
      password: '',
      title: '',
      body: '',
      img: '',
      userId: '',
      eventId: ''
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


  createPost = async (e) => {
    e.preventDefault();
    //this.getPosts();
    const data = {
      title: this.state.title,
      body: this.state.body,
      img: this.state.img,
      userId: this.state.userId,
      eventId: this.state.eventId,
    };
    //console.log(data);
    const response = await axios.post('http://localhost:3004/post/createPost', data);
    //console.log(response);
    this.getPosts();
  };

  editPost = async (e) => {
    e.preventDefault();
    //this.getPosts();
    const data = {
      title: this.state.title,
      body: this.state.body,
      img: this.state.img,
      userId: this.state.userId,
      eventId: this.state.eventId,
    };
    console.log("edit post here " + data);
    const response = await axios.post('http://localhost:3004/post/createPost', data);
    console.log("edit after response" + response);
    this.getPosts();
  };


  deletePost=  async (e) => {
    e.preventDefault();  
    const deleteTask = await axios.delete(`http://localhost:3004/post/${e.target.id}`);
    console.log(deleteTask)
    this.getPosts();
}




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
        <div className="task-wrapper">
          <h3>{post.title}</h3>
          <img className="taskImg" src={post.img} alt='family picture' />
          <p>
            {post.body}, {post.eventId}
          </p>
          <div>
            <button className="delButton" id={post.id} onClick={this.editPost}>Edit</button>
            <button className="delButton" id={post.id} onClick={this.deletePost}>Delete</button>
            <Link className="taskLink" to="/ParentForm">Add Post</Link>
          </div>
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
        <h1>Family Post, Pictures and Comments</h1>
        {posts} 
      </div>
    );
  }

}
export default Parent;