// core
import React from 'react';

// library
import { Switch, Route } from 'react-router-dom';

// components
import { routes } from "./routes";
import { Main, Register, Verify, GetStarted, Join, Special, Search } from "../pages";

// assets
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route path={routes.register} component={Register} />
        <Route path={routes.verify} component={Verify} />
        <Route path={routes.getStarted} component={GetStarted} />
        <Route path={routes.join} component={Join} />
        <Route exact path={routes.main} component={Main} />
        <Route exact path={routes.special} component={Special} />
        <Route exact path={routes.search} component={Search} />
      </Switch>
    </div>
  );
}

export default App;
