import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class PartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parts: [],
      eventId: '',
      desc: '',
      firstName: '',
      lastName: '',
      image: '',
      completed: '',
      
    };
  }

  
  componentDidMount = () => {
    this.getParts();
  };
  getParts = async () => {
    const response = await axios.get('http://localhost:3004/part');
    this.setState({
        parts: response.data,
    });
  };
  
  partOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createPart = async (e) => {
    e.preventDefault();
    //this.getparts();
    const data = {
      eventId: this.state.eventId,
      desc: this.state.desc,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      image: this.state.image,
      completed: this.state.completed
    };
    console.log(data);
    const response = await axios.post('http://localhost:3004/part/createPart', data);
    console.log(response);
    this.getParts();
  };

  deletePart=  async (e) => {
    e.preventDefault();  
    const deletePart = await axios.delete(`http://localhost:3004/part/${e.target.id}`);
    console.log(deletePart)
    this.getParts();
}
  render() {

    return (
      <div className='input-container'>
        <form className="taskInput" onSubmit={this.createPart}>
        <h3>Add Parts</h3>
          <div className="input-wrapper">
            <p className="input-name"> Priority </p>          
              <input
                name='eventId'
                className="taskInputCell"
                type='text'
                placeholder='Date Due Date'
                value={this.state.eventId}
                onChange={this.partOnChange}
              />
          </div>

          <div className="input-wrapper">
            <p className="input-name"> Part Name </p>
              <input
                name='desc'
                className="taskInputCell"
                type='text'
                placeholder='enter new Project here'
                value={this.state.desc}
                onChange={this.partOnChange}
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
                onChange={this.partOnChange}
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
                onChange={this.partOnChange}
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
            onChange={this.partOnChange}
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
            onChange={this.partOnChange}
          />
          </div>

          <input className="taskLink" type='submit' value='Add Part' />
          <Link className="taskLink" to="/PartList">Back to Part List</Link>
        </form>
        <br></br>
        
        {/* {parts} */}
      </div>
    );
  }

}



export default PartForm;