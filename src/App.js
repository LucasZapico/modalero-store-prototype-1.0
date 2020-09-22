import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "./assets/sass/styles.scss";
import PageNotFound from './components/404.js'
import HomePage from './components/HomePage'
import Navigation from './components/Navigation'
import Footer from "./components/Footer";

const App = () => {
  const currentUser = 'Calvin'
  return (
    
  
    <Router>
      {/* <Navigation authUser={currentUser} /> */}

      <div >
        <Navigation/>
        {currentUser ? (
          <>
            <Switch>
              <>
               
                <Route exact path={ROUTES.HOME} component={HomePage} />
              </>

              <Route component={PageNotFound} />
            </Switch>
          </>
        ) : (
          <>
          <Switch>

              <Route
                exact
                path={ROUTES.SIGN_IN}
                
              />
              <Route component={PageNotFound} />
            </Switch>
          </>
        )}
        <Footer/>
      </div>
    </Router>
  );



};

export default App;
