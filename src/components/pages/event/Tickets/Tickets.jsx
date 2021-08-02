import React from "react";

// library
import { Link } from "react-router-dom";

// components
import { EventSection, NoNavigationLayout, TopPanel } from "../../../common";
import { routes } from "../../../App/routes";

// assets
import styles from './Tickets.module.scss';
import prism from "../../../../assets/images/events/prism-1.png";
import event1 from "../../../../assets/images/events/varnam.png";
import tot from "../../../../assets/images/events/tot.png";
import event3 from "../../../../assets/images/events/event-3.png";

const items = [
  {
    avatar: prism,
    title: 'Prism Hyderabad',
    image: event1,
    info: 'Thursday Live with Varnam',
    date: 'THU, 15 APRIL 2021'
  },
  {
    avatar: tot,
    title: 'TOT Jubilee Hills',
    image: event3,
    info: 'Thursday Live with Varnam',
    date: 'THU, 15 APRIL 2021'
  }
]
export const Tickets = () => {

  return (
    <NoNavigationLayout>
      <main className={styles.tickets}>
        <TopPanel title='Your Tickets' route={routes.event} noWarning noBorder />
        <section className={styles.content}>
          <h3>No bookings yet!</h3>
          <p>Start exploring exclusive events in Hyderabad</p>
          <Link to={routes.event} type='button' className={`btn btn-primary ${styles.btn}`}>
            EXPLORE EVENTS
          </Link>
          <EventSection items={items} title='Events near you' />
        </section>
      </main>
    </NoNavigationLayout>
  )
}