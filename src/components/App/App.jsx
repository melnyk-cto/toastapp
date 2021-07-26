// core
import React from 'react';

// library
import { Switch, Route } from 'react-router-dom';

// components
import { routes } from "./routes";
import { Home, Register, Verify, GetStarted, Join } from "../pages";
import { Footer, Header } from "../common";

// assets
import styles from './App.module.scss';

function App() {
  console.log(window.location.pathname === '/', '3333333')
  return (
    <div className={styles.app}>
      {window.location.pathname === '/' && <Header />}
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.register} component={Register} />
        <Route path={routes.verify} component={Verify} />
        <Route path={routes.getStarted} component={GetStarted} />
        <Route path={routes.join} component={Join} />
      </Switch>
      {window.location.pathname === '/' && <Footer />}
    </div>
  );
}

export default App;
