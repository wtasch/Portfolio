import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//import './App.css';
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      eventId: 0,
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
    this.getTasks();
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
  };

  deleteTask=  async (e) => {
    e.preventDefault();  
    const deleteTask = await axios.delete(`http://localhost:3004/task/${e.target.id}`);
    console.log(deleteTask)
    this.getTasks();
}
  render() {
    const tasks = this.state.tasks.map((task) => {
      return (
        <div key="firstName">
          <h3>{task.desc}</h3>
          <img src={task.img} alt='family picture' />
          <p>
            {task.firstName} {task.lastName}
          </p>
          <button id={task.id} onClick={this.deleteTask}>delete</button>
        </div>
      );
    });
    return (
      <div className='App'>
        <form onSubmit={this.createTask}>
          <input
            name='eventId'
            type='text'
            placeholder='enter eventId here'
            value={this.state.eventId}
            onChange={this.taskOnChange}
          />

<input
            name='desc'
            type='text'
            placeholder='enter new task here'
            value={this.state.desc}
            onChange={this.taskOnChange}
          />

<input
            name='firstName'
            type='text'
            placeholder='enter firstName here'
            value={this.state.firstName}
            onChange={this.taskOnChange}
          />

<input
            name='lastName'
            type='text'
            placeholder='enter last name here'
            value={this.state.lastName}
            onChange={this.taskOnChange}
          />

<input
            name='image'
            type='text'
            placeholder='enter pic link here'
            value={this.state.image}
            onChange={this.taskOnChange}
          />

<input
            name='completed'
            type='text'
            placeholder='is this complete?'
            value={this.state.completed}
            onChange={this.taskOnChange}
          />

          <input type='submit' value='Add Task' />
        </form>
       
        {tasks}
      </div>
    );
  }

}




export default TaskList;