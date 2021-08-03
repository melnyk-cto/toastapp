import React from "react";

// components
import { AddButton, BookingInfo, PrimaryButton, WrapperModal } from "../../";
import { routes } from "../../../App/routes";

// assets
import styles from "./BookEventModal.module.scss";
import whatsapp from "../../../../assets/images/icons/whatsapp.svg";

const phoneCode = ['+91', '+38'];
export const BookEventModal = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    window.location = routes.bookingConfirmation;
  }

  return (
    <WrapperModal event title='Thursday Live with VARNAM' noFullScreen>
      <div className={styles.registerEvent}>
        <hr />
        <BookingInfo />
        <hr />
        <h6 className={styles.about}>ABOUT THE EVENT</h6>
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