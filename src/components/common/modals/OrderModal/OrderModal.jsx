import React from "react";

// library
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// components
import { WrapperModal } from "../WrapperModal/WrapperModal";
import { routes } from "../../../App/routes";
import { modalsActions } from "../../../../redux/modals/actions";
import { EventSection } from "../../EventSection/EventSection";

// assets
import styles from "./OrderModal.module.scss";
import { ReactComponent as WarningSvg } from "../../../../assets/images/icons/warning.svg";
import saly7 from "../../../../assets/images/saly-7.png";
import currency from "../../../../assets/images/icons/currency.svg";
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
export const OrderModal = () => {
  const dispatch = useDispatch();

  return (
    <WrapperModal blackIcon>
      <div className={styles.order}>
        <div className={styles.warning}>
          <WarningSvg onClick={() => dispatch(modalsActions.setShowModal('Complaints'))} />
        </div>
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
        <EventSection items={items} title='Explore Events ' />
      </div>
    </WrapperModal>
  )
}