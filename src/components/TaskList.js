import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class TaskList extends Component {
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
  
    <h2>Task List</h2>
    const tasks = this.state.tasks.map((task) => {
      return (
        <div>
          
        <div className="task-wrapper" key="firstName">
         <div className="text-containter">
          <h3 className="showText">Project Description: {task.desc}</h3>
          <h3 className="showText"> Also,  {task.firstName} </h3>
          <h3 className="showText">{task.lastName}</h3>
          <h3 className="showText">Please Complete by:  {task.completed}</h3>
          </div>
          <img className="taskImg" src={task.image} alt='No Picture added to this task' />
          <p>
            {/* some texts here */}
          </p>
            <div>
            <button className="taskLink" id={task.id} onClick={this.deleteTask}>Complete</button>
            <button className="delButton" id={task.id} onClick={this.deleteTask}>delete</button>
            <Link className="taskLink" to="/TaskForm">Add Tasks</Link></div>
          </div>
        </div>
      );
    });
    return (
      <div className='App'>
        <h1>Task List</h1>
        {/* <form className="taskInput" onSubmit={this.createTask}>
          <input
            name='eventId'
            className="taskInputCell"
            type='text'
            placeholder='enter eventId here'
            value={this.state.eventId}
            onChange={this.taskOnChange}
          />

<input
            name='desc'
            className="taskInputCell"
            type='text'
            placeholder='enter new task here'
            value={this.state.desc}
            onChange={this.taskOnChange}
          />

<input
            name='firstName'
            className="taskInputCell"
            type='text'
            placeholder='enter firstName here'
            value={this.state.firstName}
            onChange={this.taskOnChange}
          />
<p> Last Name </p>
<input      
            name='lastName'
            className="taskInputCell"
            type='text'
            placeholder='enter last name here'
            value={this.state.lastName}
            onChange={this.taskOnChange}
          />

<input
            name='image'
            className="taskInputCell"
            type='text'
            placeholder='enter pic link here'
            value={this.state.image}
            onChange={this.taskOnChange}
          />

<input
            name='completed'
            className="taskInputCell"
            type='text'
            placeholder='is this complete?'
            value={this.state.completed}
            onChange={this.taskOnChange}
          />

          <input type='submit' value='Add Task' />
        </form> */}
     
        {tasks}
      </div>
    
    );
  }

}




export default TaskList;