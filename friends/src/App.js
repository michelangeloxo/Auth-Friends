import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Friends from './components/friends';
import { Route, Link, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if(localStorage.getItem('token')) {
      return <Component {...props} />;
    } else { 
      return <Redirect to='/login'/>;
    }
  }}/>;
};

const PrivateRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if(localStorage.getItem('token')) {
      return <Component {...props} />;
    } else { 
      return <Redirect to='/login'/>;
    }
  }}/>;
};

function App() {
  return (
    <div className="App">
      
        <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <ProtectedRoute path="/friends" component={Friends} />
        <PrivateRoute path="/login" component={Login} />
        
      </header>

      
    </div>
  );
}

export default App;
