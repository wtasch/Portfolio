import React, { Component } from 'react';
import axios from 'axios';
import { Route, withRouter, Link } from 'react-router-dom';


//import './App.css';
class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      title: '',
      body: '',
    };
  }

  
  componentDidMount = () => {
    this.createPostold();
  };
  createPostold = async () => {
    const response = await axios.get('http://localhost:3004/task/all');
    this.setState({
      tasks: response.data,
    });
  };
  taskOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  createPostols = async (e) => {
    // e.preventDefault();
    const data = {
      title: this.state.title,
      // password: this.state.password,
    };
    console.log(data);
    const response = await axios.post('http://localhost:3004/post/createPostold', data);
    console.log(response);
  };


  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <div>
          <h3>{post.title}</h3>
          <img src={post.img} alt='family picture' />
          <p>
            {post.body} 
            {/* {task.lastName} */}
          </p>
        </div>
      );
    });
    return (
      <div className='App'>
        <form onSubmit={this.createPostold}>
          <input
            name='desc'
            type='text'
            placeholder='enter new task here'
            value={this.state.desc}
            onChange={this.taskOnChange}
          />
          {/* <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.loginOnChange}
          /> */}
          <input type='submit' value='Add Poster here' />
        </form>
        {posts}
      </div>
    );
  }

}



export default withRouter(PostContainer);