import React from "react";

// library
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// components
import { WrapperModal } from "../WrapperModal/WrapperModal";
import { routes } from "../../../App/routes";
import { modalsActions } from "../../../../redux/modals/actions";

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
        <div className={styles.warning}>
          <WarningSvg />
        </div>
        <div className={styles.bottom}>
          <div className={styles.card}>
            <div className={styles.item}>
              <div className={styles.description}>
                <h2>
                  Order <br />
                  successfully <br />
                  placed!
                </h2>
                <img src={saly7} alt='saly7' />
              </div>
              <p>Your order will be served soon.</p>
            </div>
            <div className={styles.buttons}>
              <button type='button' className={`btn ${styles.button}`}>Order more</button>
              <Link to={routes.checkout} type='button'
                    className={`btn ${styles.button}`}
                    onClick={() => dispatch(modalsActions.setShowModal(''))}>
                Pay now
                <span className={styles.currency}>
              <img src={currency} alt='currency' />
            </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </WrapperModal>
  )
}