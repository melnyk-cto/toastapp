import React, { useState } from "react";

// library
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import { WrapperModal } from "../WrapperModal/WrapperModal";
import { modalsActions } from "../../../../redux/modals/actions";
import { routes } from "../../../App/routes";

// assets
import styles from "./PaymentConfirmationModal.module.scss";
import success from "../../../../assets/images/success.png";

const stars = [
  {name: 'Great'},
  {name: 'Awesome!'},
  {name: 'Good'},
  {name: 'Bad'},
  {name: 'Poor'},
];
const wrong = ['SERVICE', 'PREPARATION ISSUES', 'FOOD TASTE', 'APP ISSUE', 'CLEANLINESS', 'OTHER'];
export const PaymentConfirmationModal = () => {
  const dispatch = useDispatch();

  const [activeStar, setActiveStar] = useState('Awesome!');

  return (
    <WrapperModal black disableMenu>
      <div className={styles.paymentConfirmation}>
        <div className={styles.bottom}>
          <div className={styles.card}>
            <div className={styles.description}>
              <div>
                <h2>
                  Payment <br />
                  successfully!
                </h2>
                <h4>Rate your experience at <br />
                  <span>Sacred Earth Cafe</span>
                </h4>
              </div>
              <img src={success} alt='success' />
            </div>
            <div className={styles.rate}>
              <div className={styles.stars}>
                {stars.map((star, index) => (
                  <span key={index} className={`${styles.star} ${star.name === activeStar && styles.active}`}
                        onClick={() => setActiveStar(star.name)} />
                ))}
              </div>
              <p>{activeStar}</p>
            </div>
          </div>
          <div className={styles.wrong}>
            <h5> What went wrong?</h5>
            {wrong.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <Link to={'#'} className={styles.provide}>Provide a Feedback</Link>
          </div>
        </div>
        <div className={styles.continue}>
          <Link to={routes.orderRating} type='button' className='btn btn-primary'
                onClick={() => dispatch(modalsActions.setShowModal(''))}>
            CONTINUE
          </Link>
        </div>
      </div>
    </WrapperModal>
  )
}