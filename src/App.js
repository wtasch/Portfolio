import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import Profile from './components/Profile';
import KidsPage from './components/KidsPage';
import Parent from './components/Parent';
import ParentForm from './components/ParentForm';
import Signup from './components/Signup';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import Home from './components/Home';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import PartList from './components/PartList';
import PartForm from './components/PartForm';
import ShopList from './components/ShopList';
import ShopForm from './components/ShopForm';



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
      potentialKids: [],
      horses: [],
    }
  }

  componentDidMount = async () => {
    const randomOne = await axios.get("https://randomuser.me/api/");
    const randomTwo = await axios.get("https://randomuser.me/api/");
    const randomThree = await axios.get("https://randomuser.me/api/");
    const randomFour = await axios.get("https://randomuser.me/api/");
    const randomFive = await axios.get("https://randomuser.me/api/");
    const response = await axios.get ('http://localhost:3004/post/all');
    const horsePic = await axios.get ('https://source.unsplash.com/550x225/?horses&i=0');
    const kids = [
      randomOne.data.results[0],
      randomTwo.data.results[0],
      randomThree.data.results[0],
      randomFour.data.results[0],
      randomFive.data.results[0]
    ];
    this.setState({
      potentialKids: kids,
      horses: horsePic,
      //
      apiDataLoaded: true
    })
   // console.log(response)
   // console.log("horse pic" + horsePic)
  }
  

  addKid = (newKid) => {
    const currentKids = this.state.user;
    currentKids.kidList.push(newKid);

    const potentialKids = this.state.potentialKids;
    const newPotentialKids= potentialKids.filter(kid => {
      return newKid.login.uuid !== kid.login.uuid
    })
  
    // reset = (newKid) => {
    //   const currentKids = this.state.user;
    //   currentKids.kidList.push(newKid);
  
    //   const potentialKids = this.state.potentialKids;
    //   const newPotentialKids= potentialKids.filter(kid => {
    //     return newKid.login.uuid !== kid.login.uuid
    //   })

  this.setState({ 
    user: currentKids,
    potentialKids: newPotentialKids
  })
}
  render() {

  
    return (

      <div className="App">
        <Header />
        
        <div>
          {/* <ShopList /> */}
          {/* <PartList /> */}
         {/* <EventList /> */}
          {/* <TaskList /> */}
          {/* <Signup /> */}
          {/* <Parent />  */}
          
          
          
        </div>
        {/* <nav>
            <Link to="/profile">Kids Profile</Link>
            <Link to="/users">Users</Link>
        </nav>
          <h1>Family App</h1> */}
          {/* <Switch> */}

          <Route path="/home" render={() => (
            <Home />
          )} />

          <Route path="/profile" render={() => (
            <Profile user={this.state.user} />
          )} />

          <Route path="/EventList" render={() => (
            <EventList />
          )} />

          <Route path="/EventForm" render={() => (
          <EventForm
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
          />
         )} /> 


          <Route path="/TaskList" render={() => (
          <TaskList
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
          />
         )} /> 

        <Route path="/TaskForm" render={() => (
          <TaskForm
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
          />
         )} /> 

        <Route path="/ShopList" render={() => (
          <ShopList
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
          />
         )} /> 

        <Route path="/ShopForm" render={() => (
          <ShopForm
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
          />
         )} /> 


        <Route path="/PartList" render={() => (
          <PartList
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
          />
         )} /> 

          <Route path="/PartForm" render={() => (
          <PartForm
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
          />
         )} /> 
        
           <Route path="/Parent" render={() => (
          <Parent
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
           />
        )} />

          <Route path="/ParentForm" render={() => (
          <ParentForm
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
          />
         )} /> 

          <Route path="/KidsPage" render={() => (
          <KidsPage
           potentialKids={this.state.potentialKids}
           addKid={this.addKid} />
        )} />
      {/* </Switch> */}

      </div>
    );
  }
}
export default App;







