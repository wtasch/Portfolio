import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      eventId: '',
      desc: '',
      firstName: '',
      lastName: '',
      image: '',
      completed: '',
      
    };
  }

  
  componentDidMount = () => {
    this.getTasks();
  };
  getTasks = async () => {
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

  createTask = async (e) => {
    e.preventDefault();
    //this.getTasks();
    const data = {
      eventId: this.state.eventId,
      desc: this.state.desc,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      image: this.state.image,
      completed: this.state.completed
    };
    console.log(data);
    const response = await axios.post('http://localhost:3004/task/createTask', data);
    console.log(response);
    this.getTasks();
  };

  deleteTask=  async (e) => {
    e.preventDefault();  
    const deleteTask = await axios.delete(`http://localhost:3004/task/${e.target.id}`);
    console.log(deleteTask)
    this.getTasks();
}
  render() {

    return (
      <div className='input-container'>
        <form className="taskInput" onSubmit={this.createTask}>
        <h3>Add Tasks</h3>
          <div className="input-wrapper">
            <p className="input-name"> Date </p>          
              <input
                name='eventId'
                className="taskInputCell"
                type='text'
                placeholder='Date Due Date'
                value={this.state.eventId}
                onChange={this.taskOnChange}
              />
          </div>

          <div className="input-wrapper">
            <p className="input-name"> Project Name </p>
              <input
                name='desc'
                className="taskInputCell"
                type='text'
                placeholder='enter new Project here'
                value={this.state.desc}
                onChange={this.taskOnChange}
              />
          </div>

          <div className="input-wrapper">
            <p className="input-name"> Name </p>
            <input
                name='firstName'
                className="taskInputCell"
                type='text'
                placeholder='enter Name here'
                value={this.state.firstName}
                onChange={this.taskOnChange}
            />
          </div>

          <div className="input-wrapper">
            <p className="input-name"> Project Details </p>
            <input      
                name='lastName'
                className="taskInputCell"
                type='text'
                placeholder='Project Details'
                value={this.state.lastName}
                onChange={this.taskOnChange}
          />
          </div>
          <div className="input-wrapper">
            <p className="input-name"> Picture </p>
<input
            name='image'
            className="taskInputCell"
            type='text'
            placeholder='enter pic link here'
            value={this.state.image}
            onChange={this.taskOnChange}
          />
          </div>

          <div className="input-wrapper">
            <p className="input-name"> Complete? </p>
<input
            name='completed'
            className="taskInputCell"
            type='text'
            placeholder='is this complete?'
            value={this.state.completed}
            onChange={this.taskOnChange}
          />
          </div>

          <input className="taskLink" type='submit' value='Add Task' />
          <Link className="taskLink" to="/TaskList">Back to Task List</Link>
        </form>
        <br></br>
        
        {/* {tasks} */}
      </div>
    );
  }

}



export default TaskForm;
//   class PostContainer extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         posts: []
//       }
//     }
  
//     // GET all posts ==> List those posts
  
//     createPost = (e, post) => {
//       e.preventDefault();
  
//       const oldPosts = this.state.posts;
//       oldPosts.push(post);
  
//       this.setState({ posts: oldPosts });
//       this.props.history.push('/profile/post/list');
//     }
  
//     updatePost = (e, postId, revisedPost) => {
//       e.preventDefault();
//       const updatedPosts = this.state.posts.map((post, index) => (
//         parseInt(postId) === index ? revisedPost : post
//       ))
  
//       this.setState({
//         posts: updatedPosts
//       })
//       this.props.history.push('/profile/post/list');
//     }
  
//     render() {
//       return (
//         <div>
//           <Link to="/profile/post/new">Create a Post</Link>
//           <Link to="/profile/post/list">All Posts</Link>
//           <Route path="/profile/post/new" render={() => (
//             <CreatePostForm createPost={this.createPost} />
//           )} />
//           <Route path="/profile/post/list" render={() => (
//             <PostList posts={this.state.posts} />
//           )} />
//           <Route path="/profile/post/edit/:index" render={(routerProps) => (
//             <UpdatePostForm
//               posts={this.state.posts}
//               updatePost={this.updatePost}
//               postId={routerProps.match.params.index}
//             />
//           )} />
//         </div>
//       )
//     }
//   }
  
//   export default withRouter(PostContainer);