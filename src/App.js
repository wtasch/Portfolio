import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import Profile from './components/Profile';
import KidsPage from './components/KidsPage';
import Parent from './components/Parent';
import Signup from './components/Signup';
import TaskList from './components/TaskList';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "Brandi",
        username: "mom",
        image: "https://i.imgur.com/dShEQw5.jpg",
        kidList: [],
        tasks: [],
      },
      apiDataLoaded: false,
      potentialKids: []
    }
  }

  componentDidMount = async () => {
    const randomOne = await axios.get("https://randomuser.me/api/");
    const randomTwo = await axios.get("https://randomuser.me/api/");
    const randomThree = await axios.get("https://randomuser.me/api/");
    const randomFour = await axios.get("https://randomuser.me/api/");
    const randomFive = await axios.get("https://randomuser.me/api/");
    const response = await axios.get ('http://localhost:3004/post/all');
    const kids = [
      randomOne.data.results[0],
      randomTwo.data.results[0],
      randomThree.data.results[0],
      randomFour.data.results[0],
      randomFive.data.results[0]
    ];
    this.setState({
      potentialKids: kids,
      //
      apiDataLoaded: true
    })
    console.log(response)
  }
  

  addKid = (newKid) => {
    const currentKids = this.state.user;
    currentKids.kidList.push(newKid);

    const potentialKids = this.state.potentialKids;
    const newPotentialKids= potentialKids.filter(kid => {
      return newKid.login.uuid !== kid.login.uuid
    })
  

  this.setState({ 
    user: currentKids,
    potentialKids: newPotentialKids
  })
}
  render() {

  
    return (

      <div className="App">
        
        <div>
          <TaskList />
          <Signup />
          <Parent />
          
          
        </div>
        <nav>
            <Link to="/profile">Profile</Link>
            <Link to="/users">Users</Link>
        </nav>
          <h1>Family App</h1>
          <Route path="/profile" render={() => (
            <Profile user={this.state.user} />
          )} />
          <Route path="/users" render={() => (
          <KidsPage
           potentialKids={this.state.potentialKids}
           addKid={this.addKid} />
        )} />
      </div>
    );
  }
}
export default App;







