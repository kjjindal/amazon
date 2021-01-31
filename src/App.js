import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout  from './Checkout';

function App() {
  return (
    <>
    <Router >
    <div className="App">
    <Switch>
    <Route path="/" exact>
<Header  />
<Home  />

    </Route>
    <Route path="/checkout" exact>
<Header  />
<Checkout />
    </Route>
    <Route path="/login" exact>
<Header  />

<h1>Amazon clone login  </h1>
    </Route>
   

    </Switch>
    </div>

    </Router>



    </>
     
      
  );
}

export default App;
