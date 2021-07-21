// core
import React from 'react';

// library
import { Switch, Route } from 'react-router-dom';

// components
import { Home } from "../pages";

import { Footer, Header } from "../common";

// assets
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
