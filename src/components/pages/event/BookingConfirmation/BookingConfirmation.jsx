import React from "react";

// components
import { BookingInfo, EventSection, NoNavigationLayout, TopPanel } from "../../../common";
import { routes } from "../../../App/routes";

// assets
import styles from './BookingConfirmation.module.scss';
import prism from "../../../../assets/images/events/prism-1.png";
import event1 from "../../../../assets/images/events/varnam.png";
import verified from "../../../../assets/images/icons/verified.svg";
import { ReactComponent as ShareSvg } from "../../../../assets/images/icons/share.svg";
import { ReactComponent as DownloadSvg } from "../../../../assets/images/icons/download.svg";

const items = [
  {
    avatar: prism,
    title: 'Prism Hyderabad',
    image: event1,
    info: 'Thursday Live with Varnam',
    date: 'THU, 15 APRIL 2021'
  },
];
export const BookingConfirmation = () => {
  return (
    <NoNavigationLayout>
      <main className={styles.bookingConfirmation}>
        <TopPanel title='Booking confirmed!' route={routes.event} noWarning noBorder verified={verified} />
        <section className={styles.content}>
          <div className={styles.booking}>
            <h3>Thursday Live with VARNAM</h3>
            <div className={styles.info}>
              <BookingInfo people />
            </div>
            <hr />
            <div className={styles.ticket}>
              <div className={styles.number}>
                <p>Ticket Number</p>
                <h1>A25A</h1>
              </div>
              <div className={styles.icon}>
                <ShareSvg />
              </div>
              <div className={styles.icon}>
                <DownloadSvg />
              </div>
            </div>
          </div>
          <EventSection items={items} title='More events near you' />
        </section>
      </main>
    </NoNavigationLayout>
  )
}