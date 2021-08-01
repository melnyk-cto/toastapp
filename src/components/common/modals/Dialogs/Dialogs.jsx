import React from "react";

// library
import { useDispatch } from "react-redux";

// components
import { modalsActions } from "../../../../redux/modals/actions";
import { routes } from "../../../App/routes";

// assets
import styles from "./Dialogs.module.scss";

export const Dialogs = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.dialogs}>
      <div className={styles.inner}>
        <h3>Review not posted</h3>
        <p>
          You’ve not submitted your review, your review won’t be posted. Are you sure you want to exit?
        </p>
        <div className={styles.buttons}>
          <button
            type='button'
            className='btn btn-white'
            onClick={() => dispatch(modalsActions.setShowModal(''))}>
            CANCEL
          </button>
          <button type='button'
                  className='btn btn-primary'
                  onClick={() => window.location = routes.main}>
            EXIT
          </button>
        </div>
      </div>
    </div>
  )
}