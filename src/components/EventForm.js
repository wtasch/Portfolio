import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class ParentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      name: '',
      img: '',
      workOn: '',
      location: '',
      eventId: ''
      
    };
  }

  
  componentDidMount = () => {
    this.getEvents();
  };
  getEvents = async () => {
    const response = await axios.get('http://localhost:3004/event');//was /all
    this.setState({
        events: response.data,
    });
  };

  eventOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createEvent = async (e) => {
    e.preventDefault();
    //this.getTasks();
    const data = {        
        name: this.state.name,
        img: this.state.img,
        workOn: this.state.workOn,
        location: this.state.location,
        eventId: this.state.eventId,
        
      };
    console.log("before api event post" + data);
    const response = await axios.post('http://localhost:3004/event/createEvent', data);
    console.log("after api event response" + response);
    this.getEvents();
  };

  deleteEvent=  async (e) => {
    e.preventDefault();  
    const deleteEvent = await axios.delete(`http://localhost:3004/event/${e.target.id}`);
    console.log(deleteEvent)
    this.getEvents();
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
          
        <form className="taskInput" onSubmit={this.createEvent}>
            <h3>Add Events</h3>
          <div className="input-wrapper">
                <p className="input-name"> Event Name </p>          
                  <input
                    name='name'
                    className="taskInputCell"
                    type='text'
                    placeholder='enter title here'
                    value={this.state.name}
                    onChange={this.eventOnChange}
                  />
          </div>

          <div className="input-wrapper">
                <p className="input-name"> Image link </p>          

                  <input
                    name='img'
                    className="taskInputCell"
                    type='text'
                    placeholder='enter Comments here'
                    value={this.state.img}
                    onChange={this.eventOnChange}
                  />
          </div>

          <div className="input-wrapper">
                <p className="input-name"> Date mm/dd/yy</p>   
                  <input
                    name='workOn'
                    className="taskInputCell"
                    type='text'
                    placeholder='enter image link here'
                    value={this.state.wordOn}
                    onChange={this.eventOnChange}
                  />
          </div>

          <div className="input-wrapper">
                <p className="input-name"> Location </p>   
                  <input      
                    name='location'
                    className="taskInputCell"
                    type='text'
                    placeholder='enter last name or user id here'
                    value={this.state.location}
                    onChange={this.eventOnChange}
                  />
          </div>

          <div className="input-wrapper">
                  <p className="input-name"> Priority </p>   
                   <input
                    name='eventId'
                    className="taskInputCell"
                    type='text'
                    placeholder='enter event here'
                    value={this.state.eventId}
                    onChange={this.eventOnChange}
                  />
          </div>

          <input className="taskLink" type='submit' value='Add event' />
          <Link className="taskLink" to="/EventList">Back to Event List</Link>
        </form>
       
        {/* {tasks} */}
      </div>
    );
  }

}



export default ParentForm;