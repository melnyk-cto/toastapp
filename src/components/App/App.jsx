// core
import React from 'react';

// library
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

// components
import { routes } from "./routes";
import { Main, Register, Verify, GetStarted, Join, Special, Search, PlaceOrder, Checkout, Coupons } from "../pages";
import { OrderSuccessfullyModal, PaymentConfirmationModal } from "../common";
import { getShowModal } from "../../redux/modals/selectors";

// assets
import styles from './App.module.scss';

function App() {
  const modal = useSelector(getShowModal);

  return (
    <div className={styles.app}>
      {modal === 'Order Successfully' && <OrderSuccessfullyModal />}
      {modal === 'Payment Confirmation' && <PaymentConfirmationModal />}
      <Switch>
        <Redirect exact from='/' to={routes.main} />
        <Route path={routes.register} component={Register} />
        <Route path={routes.verify} component={Verify} />
        <Route path={routes.getStarted} component={GetStarted} />
        <Route path={routes.join} component={Join} />
        <Route path={routes.main} component={Main} />
        <Route path={routes.special} component={Special} />
        <Route path={routes.search} component={Search} />
        <Route path={routes.placeOrder} component={PlaceOrder} />
        <Route path={routes.checkout} component={Checkout} />
        <Route path={routes.coupons} component={Coupons} />
      </Switch>
    </div>
  );
}

export default App;
