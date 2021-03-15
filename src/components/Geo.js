import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class Geo extends Component {
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
        <img src="https://i.imgur.com/sVLYUIv.jpg" alt="This is William Tasch" />
           <main>
    <h2>Bill's Family</h2>

    

    <p>Bill is from Chicago Area and attended Southern Illinoins University. 
      <br></br> <br></br>
      Bill moved to Georgia and Married Brandi.  They have two daughers, Tori and Kelly.  
      <br></br>  <br></br>
      Bill's has some John Deere Tractors and has a small farm in Georgia.
      <br></br> <br></br>
    Bill's Family raises and trains Show Horses'.
    
    <br></br> <br></br>
    
    He also enjoy's playing string bass with friends while camping</p>
  </main>

  </body>
       
      </div>
    );
  }

}



export default Geo;