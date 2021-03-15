import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import Profile from './components/Profile';
import Skill from './components/Skill';
import Prog from './components/Prog';
import Hobby from './components/Hobby';
import Signup from './components/Signup';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import Home from './components/Home';
import Objective from './components/Objective';
import Geo from './components/Geo';
import Contact from './components/Contact';
import Resume from './components/Resume';
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
          {/* <Home/> */}
          
          
          
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

          <Route path="/Objective" render={() => (
            <Objective />
          )} />

          <Route path="/Geo" render={() => (
          <Geo
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


        <Route path="/Contact" render={() => (
          <Contact
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
          />
         )} /> 

          <Route path="/Resume" render={() => (
          <Resume
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
          />
         )} /> 
        
           <Route path="/Prog" render={() => (
          <Prog
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
           />
        )} />

          <Route path="/Hobby" render={() => (
          <Hobby
          //  potentialKids={this.state.potentialKids}
          //  addKid={this.addKid} 
          />
         )} /> 

          <Route path="/Skill" render={() => (
          <Skill/>
        )} />
      {/* </Switch> */}

      </div>
    );
  }
}
export default App;







