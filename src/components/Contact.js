import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class Contact extends Component {
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
        <img src="https://i.imgur.com/btLoK9w.png" alt="This is William Tasch" />
           <main>
   
    <h2>William E. Tasch</h2>
    <p>
   Address:  203 Sussex Ct., Evans, GA  30809
      <br></br> <br></br>
      Cell:      (706) 825-0053
      <br></br>  <br></br>      
      email: taschwilliam@johndeere.com
      <br></br><br></br>
      Github:   https://github.com/wtasch
      
      </p>

    
    
  </main>

  </body>
       
      </div>
    );
  }

}



export default Contact;