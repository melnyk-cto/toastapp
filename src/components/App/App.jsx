// core
import React from 'react';

// library
import { Switch, Route } from 'react-router-dom';

// components
import { routes } from "./routes";
import { Main, Register, Verify, GetStarted, Join, Special } from "../pages";
import { Footer, Header } from "../common";

// assets
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      {(window.location.pathname === '/main' || window.location.pathname === '/special') && <Header />}
      <Switch>
        <Route exact path={routes.home} component={Main} />
        <Route exact path={routes.special} component={Special} />
        <Route path={routes.register} component={Register} />
        <Route path={routes.verify} component={Verify} />
        <Route path={routes.getStarted} component={GetStarted} />
        <Route path={routes.join} component={Join} />
      </Switch>
      {(window.location.pathname === '/main' || window.location.pathname === '/special') && <Footer />}
    </div>
  );
}

export default App;
