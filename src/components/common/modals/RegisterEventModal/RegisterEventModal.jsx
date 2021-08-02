import React from "react";

// components
import { AddButton, PrimaryButton, WrapperModal } from "../../";

// assets
import styles from "./RegisterEventModal.module.scss";
import calendar from "../../../../assets/images/icons/calendar-event.svg";
import clock from "../../../../assets/images/icons/clock.svg";
import pin from "../../../../assets/images/icons/pin.svg";
import whatsapp from "../../../../assets/images/icons/whatsapp.svg";

const phoneCode = ['+91', '+38'];
export const RegisterEventModal = () => {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <WrapperModal event title='Thursday Live with VARNAM' noFullScreen>
      <div className={styles.registerEvent}>
        <hr />
        <div className={styles.info}>
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
        <hr />
        <h6>ABOUT THE EVENT</h6>
        <p>
          Experience a journey of melodious tunes with Band @varnamtheband at @prismhyderabad.
        </p>
        <hr />
        <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
          <h6>BOOK TICKET</h6>
          <label>
            <input type='text' placeholder='Your name' />
          </label>
          <label className='phone'>
            <select>
              {phoneCode.map((code) => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
            <input type='text' placeholder='Phone number' />
            <img className={styles.whatsapp} src={whatsapp} alt='whatsapp' />
          </label>
          <div className={styles.taxes}>
            <AddButton count={1} />
            <h5>₹534.00 inc taxes.</h5>
          </div>
          <PrimaryButton white info='₹534.00' title='Pay Now' />
        </form>
      </div>
    </WrapperModal>
  )
}