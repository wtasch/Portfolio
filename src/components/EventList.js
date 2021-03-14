import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      name: '',
      img: '',
      workOn: '',
      location: '',
      eventId: '',
      
    };
  }

  
  componentDidMount = () => {
    this.getEvents();
  };
  getEvents = async () => {
    //console.log("before api event call");
    const response = await axios.get('http://localhost:3004/event');
    //console.log("after get all event call" + response);
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
    //this.getEvents();
    const data = {
      eventId: this.state.eventId,
      name: this.state.desc,
      img: this.state.firstName,
      workOn: this.state.lastName,
      location: this.state.image,
    };
    console.log("before api event post" + data);
    const response = await axios.post('http://localhost:3004/event/createEvent', data);
    console.log("after api event post" + response);
    this.getEvents();
  };

  deleteEvent=  async (e) => {
    e.preventDefault();  
    const deleteEvent = await axios.delete(`http://localhost:3004/event/${e.target.id}`);
    console.log(deleteEvent)
    this.getEvents();
}
  render() { 
    // return(
    // )
    <p>
    some texts  from event component here
  </p>
    const events = this.state.events.map((event) => {
      return (
        <div>
          
        <div className="task-wrapper" key="firstName">
         
          <h3>Project Description: {event.name} Also,   {event.workOn}
          <br></br>Please Complete by:  {event.location}</h3>
          <img className="taskImg" src={event.img} alt='No Picture added to this event' />
          <p>
            some texts  from event component here
          </p>
            <div>
            <button className="taskLink" id={event.id} onClick={this.deleteEvent}>Complete</button>
            <button className="delButton" id={event.id} onClick={this.deleteEvent}>delete</button>
            <Link className="taskLink" to="/EventForm">Add Events</Link></div>
          </div>
        </div>
      );
    });
    return (
      <div className='App'>
        
        <h1>Events List</h1>
       <Link className="headerLink" to="/EventList">Event List</Link>
        {events}
      </div>
    );
  }

}




export default EventList;