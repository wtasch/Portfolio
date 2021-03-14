import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class ParentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
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

  postOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createPost = async (e) => {
    e.preventDefault();
    //this.getTasks();
    const data = {
        eventId: this.state.eventId,
        title: this.state.title,
        body: this.state.body,
        img: this.state.img,
        userId: this.state.userId,
        
      };
    console.log(data);
    const response = await axios.post('http://localhost:3004/post/createPost', data);
    console.log(response);
    this.getPosts();
  };

  deletePost=  async (e) => {
    e.preventDefault();  
    const deletePost = await axios.delete(`http://localhost:3004/post/${e.target.id}`);
    console.log(deletePost)
    this.getPosts();
}
  render() {
    // const tasks = this.state.tasks.map((task) => {
    //   return (
    //     <div className="task-wrapper" key="firstName">
    //       <h3>Task Desc: {task.desc} for {task.firstName} {task.lastName}{task.completed}</h3>
    //       <img className="taskImg" src={task.image} alt='family picture' />
    //       <p>
    //         some texts here
    //       </p>
    //       <button id={task.id} onClick={this.deleteTask}>delete</button>
    //     </div>
    //   );
    // });
    return (
      <div className='input-container'>
        
        <form className="taskInput" onSubmit={this.createPost}>
        <h3>Add Posts, Picture and Comments</h3>
          <div className="input-wrapper">
                <p className="input-name"> Title </p>          
                  <input
                    name='title'
                    className="taskInputCell"
                    type='text'
                    placeholder='enter title here'
                    value={this.state.title}
                    onChange={this.postOnChange}
                  />
          </div>

          <div className="input-wrapper">
                <p className="input-name"> Comments </p>          

                  <input
                    name='body'
                    className="taskInputCell"
                    type='text'
                    placeholder='enter Comments here'
                    value={this.state.body}
                    onChange={this.postOnChange}
                  />
          </div>

          <div className="input-wrapper">
                <p className="input-name"> Image Link </p>   
                  <input
                    name='img'
                    className="taskInputCell"
                    type='text'
                    placeholder='enter image link here'
                    value={this.state.img}
                    onChange={this.postOnChange}
                  />
          </div>

          <div className="input-wrapper">
                <p className="input-name"> User </p>   
                  <input      
                    name='userId'
                    className="taskInputCell"
                    type='text'
                    placeholder='enter last name or user id here'
                    value={this.state.userId}
                    onChange={this.postOnChange}
                  />
          </div>

          <div className="input-wrapper">
                  <p className="input-name"> Event Info </p>   
                   <input
                    name='eventId'
                    className="taskInputCell"
                    type='text'
                    placeholder='enter event here'
                    value={this.state.eventId}
                    onChange={this.postOnChange}
                  />
          </div>

          <input className="taskLink" type='submit' value='Add post' />
          <Link className="taskLink" to="/Parent">Back to Parent List</Link>
        </form>
       
        {/* {tasks} */}
      </div>
    );
  }

}



export default ParentForm;