// core
import React, { useEffect } from 'react';

// library
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

// components
import { routes } from "./routes";
import {
  Main,
  Register,
  Verify,
  GetStarted,
  Join,
  Special,
  Search,
  PlaceOrder,
  Checkout,
  Coupons,
  OrderRating,
  Event,
  Tickets,
  BookingConfirmation
} from "../pages";
import { OrderModal, RatingModal, RatingUpdateModal } from "../common";
import { getShowModal } from "../../redux/modals/selectors";

// assets
import styles from './App.module.scss';

const App = () => {
  const modal = useSelector(getShowModal);

  useEffect(() => {
    if (modal !== '') {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [modal])

  return (
    <div className={styles.app}>
      {modal === 'Order' && <OrderModal />}
      {modal === 'Rating' && <RatingModal />}
      {modal === 'Rating Update' && <RatingUpdateModal />}
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
        <Route path={routes.orderRating} component={OrderRating} />
        <Route path={routes.event} component={Event} />
        <Route path={routes.tickets} component={Tickets} />
        <Route path={routes.bookingConfirmation} component={BookingConfirmation} />
      </Switch>
    </div>
  );
}

export default App;
