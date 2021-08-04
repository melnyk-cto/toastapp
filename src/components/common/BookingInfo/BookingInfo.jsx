import React from "react";

// assets
import styles from "./BookingInfo.module.scss";
import { ReactComponent as CalendarSVG } from "../../../assets/images/icons/calendar-event.svg";
import { ReactComponent as ClockSvg } from "../../../assets/images/icons/clock.svg";
import { ReactComponent as PinSvg } from "../../../assets/images/icons/pin.svg";
import { ReactComponent as UserSvg } from "../../../assets/images/icons/user.svg";

export const BookingInfo = ({mod}) => {
  return (
    <div className={`${styles.info} ${mod ? styles.mod : ''}`}>
      {mod && <div className={`${styles.item} ${styles.people}`}>
        <UserSvg />
        <h5>Sharan Pillai</h5>
      </div>}
      <div className={styles.item}>
        <CalendarSVG />
        <h5>15 Apr 2021</h5>
      </div>
      <div className={styles.item}>
        <ClockSvg />
        <h5>8pm onwards</h5>
      </div>
      <div className={styles.item}>
        <PinSvg />
        <h5>Prism Hyderabad, <span>Old Mumbai Hwy, Financial District, Gowlidoddy, 500075</span></h5>
      </div>
    </div>
  )
}