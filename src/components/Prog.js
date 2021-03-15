import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class Prog extends Component {
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
        <img src="https://i.imgur.com/2WGAElH.png" alt="This is William Tasch" />
           <main>
   
    <h2>Programming Languages</h2>
    <p>
JavaScript, Python(beginner), HTML, CSS, Sequelize, Express, Node.js, React.
      <br></br> <br></br>
      Deere's Systems:  SAP PMG, SAP PAG, AMES, Jdaat, GFPT, DGT, JDtester, SmartTest, RollTest. 
      <br></br>  <br></br>      
      Allen Bradley Studio, SQL Management Studio, Ignition, Creo Modeling, 3D Printing.
      <br></br><br></br>
      Developed Computer Simulation Models for Factory Systems and Automated Manufactuing.
      <br></br><br></br>
      Software Enginneer Certification from General Assembly.  Here are a few Course Projects:
      
      <br></br><br></br>
      <a href="https://wtasch.github.io/Hangman-Project-1/" className="headerLink"> - Project1 HangMan Game-Click to Play</a>
      <br></br><br></br>
      <a href="http://couchslothmovies.surge.sh/" className="headerLink"> - Project3 Movie app-Click to Play (this was a Team Project)</a>
      </p>
    
    
  </main>

  </body>
       
      </div>
    );
  }

}



export default Prog;