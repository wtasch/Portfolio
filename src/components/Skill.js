import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],

      
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
 
    return (
      <div className='input-containere'>

        <body>
        <img src="https://i.imgur.com/28sbBCg.jpg" alt="This is William Tasch" />
           <main>
    <h2>Computer Skills</h2>

    

    <p>Developed and supported Augusta's MES-Manufacturing Execution System 2001 through 2013.
      <br></br> <br></br>
      AMES united Coordinator.  Setup Production Reporting and Mistake Proofing Stations.  
      <br></br>  <br></br>      
      Integrated Factory Dashboard, build requirements and production tracking.    See pic to the right.
      <br></br><br></br>
      Developed Computer Simulation Models for Factory Systems and Automated Manufactuing Cells.


      </p>
    
    
  </main>

  </body>
       
      </div>
    );
  }

}



export default Skill;