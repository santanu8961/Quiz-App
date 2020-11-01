import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import DashBoardComp from './Components/DashBoardComp/DashBoardComp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuizComp from './Components/DashBoardComp/QuizComp';

function App() {
 

   
  return (
    <div style={{backgroundColor:'#d6ddf5',height:'100vh'}} className="App">

      <Router>
      <Switch>
          <Route exact path="/">
           <DashBoardComp />
          </Route>
         
          <Route exact path="/quiz/:id">
           <QuizComp />
          </Route>
         
        </Switch>
      </Router>

 
    </div>
  );
}

export default App;
