import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './App.css';
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import About from './About';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/about">About</Link></Nav.Link>
          <Nav.Link><Link to="/users">Users</Link></Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
      <Route component={About} path={"/about"}></Route>
      <Route component={Users} path={"/users"}></Route>
      <Route component={Home} path={"/"}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
