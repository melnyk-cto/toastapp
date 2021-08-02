import React, { useState } from "react";

// library
import { Link } from "react-router-dom";

// components
import { AddButton, EventLayout } from "../../../common";
import { routes } from "../../../App/routes";

// assets
import styles from "./Event.module.scss";
import { ReactComponent as TicketSvg } from "../../../../assets/images/icons/ticket.svg";
import { ReactComponent as CalendarSvg } from "../../../../assets/images/icons/calendar.svg";
import { ReactComponent as HeartSvg } from "../../../../assets/images/icons/heart.svg";
import { ReactComponent as ShareSvg } from "../../../../assets/images/icons/share.svg";
import { ReactComponent as WalletSvg } from "../../../../assets/images/icons/wallet.svg";
import saly9 from "../../../../assets/images/saly-9.png";
import prism from "../../../../assets/images/events/prism.png";
import sacred from "../../../../assets/images/events/sacred.png";
import event1 from "../../../../assets/images/events/varnam.png";
import event2 from "../../../../assets/images/events/event-2.png";
import people1 from "../../../../assets/images/events/people-1.png";
import people2 from "../../../../assets/images/events/people-2.png";
import people3 from "../../../../assets/images/events/people-3.png";


const events = [
  {
    avatar: prism,
    name: 'Prism Hyderabad',
    address: 'Financial District, Gachibowli',
    image: event1,
    day: 15,
    month: 'Apr',
    date: 'THU, 15 APRIL 2021, 8PM ONWARDS',
    info: 'Thursday Live with VARNAM',
    price: '534'
  },
  {
    avatar: sacred,
    name: 'Sacred Earth Cafe',
    address: 'Madhapur',
    image: event2,
    day: 16,
    month: 'Apr',
    date: 'FRI, 16 APRIL 2021, 8PM ONWARDS',
    info: 'Acai Fest@ Sacred Earth',
    price: '534'
  },
]
export const Event = () => {
  const [items, setItems] = useState(null);

  return (
    <EventLayout>
      <main className={styles.event}>
        <div className={styles.panel}>
          <div>
            <h2>Events</h2>
            <p>Hyderabad {items && <span>| 413 Events</span>}</p>
          </div>
          <div className={styles.icon} onClick={() => setItems(events)}>
            <TicketSvg />
          </div>
          <Link to={routes.eventCalendar} className={`${styles.icon} ${items ? '' : styles.noActive}`}>
            <CalendarSvg />
          </Link>
        </div>
        {!items ? <section className={styles.empty}>
            <img src={saly9} alt='' />
            <p>Oh oh! No events for now.</p>
          </section>
          : <section className={styles.content}>
            {items.map((event, index) => (
              <div className={styles.item}>
                <div key={index} className={styles.top}>
                  <img src={event.avatar} alt='avatar' />
                  <div>
                    <h4 className={styles.title}>{event.name}</h4>
                    <p>{event.address}</p>
                  </div>
                  <div className={styles.date}>
                    <h4>{event.day}</h4>
                    <p>{event.month}</p>
                  </div>
                </div>
                <div className={styles.middle}>
                  <div className={styles.peoples}>
                    <div className={styles.people}>
                      <img src={people1} alt='people1' />
                    </div>
                    <div className={styles.people}>
                      <img src={people2} alt='people2' />
                    </div>
                    <div className={styles.people}>
                      <img src={people3} alt='people3' />
                    </div>
                    <div className={styles.people}>
                      120+
                    </div>
                  </div>
                  <img src={event.image} alt='image' />
                </div>
                <div className={styles.description}>
                  <h6>{event.date}</h6>
                  <h3>{event.info}</h3>
                  <div className={styles.action}>
                    <div className={styles.icon}>
                      <HeartSvg />
                    </div>
                    <div className={styles.icon}>
                      <ShareSvg />
                    </div>
                    <div className={`${styles.icon} ${styles.mod}`}>
                      <WalletSvg />
                      <h5>₹{event.price}</h5>
                    </div>
                    <AddButton register />
                  </div>
                </div>
              </div>
            ))}
          </section>}
      </main>
    </EventLayout>
  )
}