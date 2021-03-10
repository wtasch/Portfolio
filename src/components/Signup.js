import React, { Component } from 'react';
import axios from 'axios';

//import './App.css';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  
//   componentDidMount = () => {
//     this.getPosts();
//   };
//   getPosts = async () => {
//     const response = await axios.get('http://localhost:3004/post/all');
//     this.setState({
//       posts: response.data,
//     });
//   };
  signupOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  signup = async (e) => {
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
  signup = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);
    const response = await axios.post('http://localhost:3004/auth/signup', data);
    console.log(response);
  };
  render() {
    // const posts = this.state.posts.map((post) => {
    //   return (
    //     <div>
    //         
    //     </div>
    //   );
    // });
    return (
      <div className='App'>
        <form onSubmit={this.signup}>
          <p>sign up page here</p>
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.signupOnChange}
          />
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.signupOnChange}
          />
    
          <input type='submit' value='signup' />
        </form>
        {/* {posts} */}
      </div>
    );
  }

}
export default Signup;