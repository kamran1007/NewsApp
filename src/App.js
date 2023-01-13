import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <>
      <Router><Navbar/>
      
      <Switch>
        <Route exact ="/"><News key="general" pageSize = {6} country="in"category = "general"/></Route>
        <Route exact ="/business"><News key="business"  pageSize = {6} country="in"category = "business"></News></Route>
        <Route exact ="/entertainment"><News key="entertainment" pageSize = {6} country="in"category = "entertainment"></News></Route>
        <Route exact ="/health"><News key="health"  pageSize = {6} country="in"category = "health"></News></Route>
        <Route exact ="/science"><News key="science"  pageSize = {6} country="in"category = "science"></News></Route>
        <Route exact ="/sports"><News key="sports"  pageSize = {6} country="in"category = "sports"></News></Route>
        <Route exact ="/technology"><News key ="technology" pageSize = {6} country="in"category = "technology"></News></Route>
      </Switch>
      </Router>
      
      </>
    )
  }
}
