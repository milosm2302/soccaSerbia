import React,{ useEffect, useState } from 'react';
import './App.css'
import {  BrowserRouter as Router, Route, Switch, useParams  } from 'react-router-dom';
import axios from 'axios';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Standings from './pages/teams/Standings';
import Player from './pages/players/Player';
import Team from './pages/teams/Team';



 const App = () => {

  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  useEffect( async ()=>{
    const response = await axios.get(("http://localhost:3001/teams"));
    const res = await response.data;
    
    setTeams(res)
    
   
  },[])

  useEffect( async ()=>{
    const response = await axios.get(("http://localhost:3002/players"));
    const res = await response.data;
    
    setPlayers(res)
    
   
  },[])
  console.log(players)

   
  
  return (
    <div class="container">
      
      <Router>
      <Navbar />
      <div className="container-inner">
      <Route exact path = "/"  component={Home} />
      <Route exact path = "/standings">
        <Standings teams={teams} />
      </Route>
      <Route exact path = "/standings/:name">
        <Team teams={teams} />
      </Route>
      <Route exact path = "/standings/:name/:id">
        <Player players={players} />
      </Route> 
      <Route exact path = "/about"  component={About}  teams={teams} />
      <Route exact path = "/contact"  component={Contact} />
      </div>
      <Footer/>
      </Router>
      
    </div>
  )
}
export default App;
