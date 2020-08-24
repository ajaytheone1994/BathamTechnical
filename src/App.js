import React from 'react';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Navbar from './Demo/Navbar';
import Footer from './Demo/Footer';
import './App.css'
 
 export default function App() {
   return (
      <>
      <Router>
        <Navbar/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/service" component={Service}/>
          <Redirect to="/"/>
       </Switch>
       <Footer/>
       </Router>
      </>
   )
 }
 