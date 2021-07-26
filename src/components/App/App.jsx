// core
import React from 'react';

// library
import { Switch, Route } from 'react-router-dom';

// components
import { routes } from "./routes";
import { Home, Register } from "../pages";
// import { Footer, Header } from "../common";

// assets
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      {/*<Header />*/}
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.register} component={Register} />
      </Switch>
      {/*<Footer />*/}
    </div>
  );
}

export default App;
