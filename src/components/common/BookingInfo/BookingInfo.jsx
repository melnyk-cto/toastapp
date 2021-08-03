import React from "react";

// assets
import styles from "./BookingInfo.module.scss";
import calendar from "../../../assets/images/icons/calendar-event.svg";
import clock from "../../../assets/images/icons/clock.svg";
import pin from "../../../assets/images/icons/pin.svg";

export const BookingInfo = ({people}) => {
  return (
    <div className={styles.info}>
      {people && <div className={`${styles.item} ${styles.people}`}>
        <img src={calendar} alt='people' />
        <h5>Sharan Pillai</h5>
      </div>}
      <div className={styles.item}>
        <img src={calendar} alt='calendar' />
        <h5>15 Apr 2021</h5>
      </div>
      <div className={styles.item}>
        <img src={clock} alt='clock' />
        <h5>8pm onwards</h5>
      </div>
      <div className={styles.item}>
        <img src={pin} alt='pin' />
        <h5>Prism Hyderabad, <span>Old Mumbai Hwy, Financial District, Gowlidoddy, 500075</span></h5>
      </div>
    </div>
  )
}