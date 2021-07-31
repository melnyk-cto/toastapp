import React from "react";

// library
import { useDispatch } from "react-redux";

// components
import { modalsActions } from "../../../../redux/modals/actions";
import { WrapperModal } from "../WrapperModal/WrapperModal";

// assets
import styles from "./OrderSuccessfullyModal.module.scss";
import { ReactComponent as WarningSvg } from "../../../../assets/images/icons/warning.svg";
import saly7 from "../../../../assets/images/saly-7.png";
import currency from "../../../../assets/images/icons/currency.svg";

export const OrderSuccessfullyModal = () => {
  const dispatch = useDispatch();

  return (
    <WrapperModal black>
      <div className={styles.order}>
        <div className={styles.warning} onClick={() => dispatch(modalsActions.setShowModal('Complaints'))}>
          <WarningSvg />
        </div>
        <div className={styles.bottom}>
          <div className={styles.card}>
            <div className={styles.item}>
              <div className={styles.description}>
                <h2>
                  Order successfully
                  placed!
                </h2>
                <img src={saly7} alt='saly7' />
              </div>
              <p>Your order will be served soon.</p>
            </div>
            <div className={styles.buttons}>
              <button type='button' className='btn'>Order more</button>
              <button type='button' className='btn'>
                Pay now
                <span className={styles.currency}>
              <img src={currency} alt='currency' />
            </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </WrapperModal>
  )
}