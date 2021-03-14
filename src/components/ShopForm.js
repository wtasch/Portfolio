import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import '../TaskList.css';

//import './App.css';
class ShopForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
      eventId: '',
      desc: '',
      firstName: '',
      lastName: '',
      image: '',
      completed: '',
      
    };
  }

  
  componentDidMount = () => {
    this.getShops();
  };
  getShops = async () => {
    const response = await axios.get('http://localhost:3004/shop');
    this.setState({
      shops: response.data,
    });
  };
  
  shopOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createShop = async (e) => {
    e.preventDefault();
    //this.getShops();
    const data = {
      eventId: this.state.eventId,
      desc: this.state.desc,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      image: this.state.image,
      completed: this.state.completed
    };
    console.log(data);
    const response = await axios.post('http://localhost:3004/shop/createShop', data);
    console.log(response);
    this.getShops();
  };

  deleteShop=  async (e) => {
    e.preventDefault();  
    const deleteShop = await axios.delete(`http://localhost:3004/shop/${e.target.id}`);
    console.log(deleteShop)
    this.getShops();
}
  render() {

    return (
      <div className='input-container'>
        <form className="taskInput" onSubmit={this.createShop}>
        <h3>Add To Shopping List</h3>
          <div className="input-wrapper">
            <p className="input-name"> Date </p>          
              <input
                name='eventId'
                className="taskInputCell"
                type='text'
                placeholder='Date Due Date'
                value={this.state.eventId}
                onChange={this.shopOnChange}
              />
          </div>

          <div className="input-wrapper">
            <p className="input-name"> Project Name </p>
              <input
                name='desc'
                className="taskInputCell"
                type='text'
                placeholder='enter new Project here'
                value={this.state.desc}
                onChange={this.shopOnChange}
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
                onChange={this.shopOnChange}
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
                onChange={this.shopOnChange}
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
            onChange={this.shopOnChange}
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
            onChange={this.shopOnChange}
          />
          </div>

          <input className="taskLink" type='submit' value='Add Shop' />
          <Link className="taskLink" to="/ShopList">Back to Shop List</Link>
        </form>
        <br></br>
        
        {/* {shops} */}
      </div>
    );
  }

}



export default ShopForm;