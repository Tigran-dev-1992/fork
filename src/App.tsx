import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Developers from './Components/DevelopersItem/Developers';
import MainPage from './Components/MainPage/MainPage';
import Navbar from './Components/Navigation/NavBar';
import Preloder from './Components/PreLoader/Preloader';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app d-flex justify-content-center align-items-center">
        <div className="container">
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/developers" component={Developers} />
          </Switch>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
