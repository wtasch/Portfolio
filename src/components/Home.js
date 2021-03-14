import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../Home.css';

const Home = (props) => {
    // const randomHorse = await axios.get("https://source.unsplash.com/1600x900/?horses");

    
  
  return (
    <div>
{/* <head>
  <title>William Tasch| Computer Engineer</title>
</head> */}
<body>

  {/* <header> */}
    {/* <h1>William E. Tasch</h1> */}
    {/* <nav>
      <a href="#" class="active">About Me</a> |
      <a href="#" class="active">Objective</a> |
      <a href="#" class="active">Skills</a> |
      <a href="#" class="active">Experience</a> |
      <a href="#" class="active">Education</a> |
      <a href="#" class="active">Hobbies</a> |
      <a href="#" class="active">Resume</a> |
      <a href="#">Contact Info</a>
    </nav> */}
  {/* </header> */}
<img src="https://i.imgur.com/btLoK9w.png" alt="This is William Tasch" />
  <main>
    <h2>About Bill</h2>

    

    <p>Bill has worked as a Manufacturing Engineer for over 30 years and has been with John Deere for 20 years. 
      <br></br> <br></br>
      Set up and Supports the Tractor Assembly Factory in Augusta Georgia.  
      <br></br>  <br></br>
      Most recently was responible for Tractor Testing and Vehicle Controller Programming.
      <br></br> <br></br>
    Bill Was also the AMES Unit Coordinator for the Augusta Factory.
    
    <br></br> <br></br>
    
    Recently completed General Assembly’s Software Engineering Immersive Program</p>
  </main>

  <footer>
    <a href="#">Facebook</a> |
    <a href="#">Twitter</a> |
    <a href="#">Instagram</a> |
    <a href="#">LinkedIn</a>
  </footer>

  </body>

    </div>
  )
}

export default Home;