import React, { Component } from 'react';
import Movies from './components/movie'
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Customers from './components/customers'; 
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';



class App extends Component {
  render() {
    return (
      <React.Fragment>
         <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers}/>
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="movies" />
          <Redirect to="not-found" />
        </Switch>
    </main>
      </React.Fragment>
     
  );
 }
}

export default App;
