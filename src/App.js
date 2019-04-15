import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import History from './Components/History';
import Erreur from './Components/Erreur';
import Product from './Components/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <NavBar /> 
            <Switch>
              <Route exact path="/" component={Home} />  {/* the slash+exact means "only the main page" of the website */}
              <Route path="/notre-histoire" component={History} />
              <Route path="/about" component={About} /> 
              <Route path="/contact" component={Contact} /> 
              <Route path="/produit-:productNumber(\d+)" component={Product} />
              <Route component={Erreur} />
            </Switch>
          </header>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
