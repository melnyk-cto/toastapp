import React, { useState } from "react";

// library
import { useDispatch } from "react-redux";

// components
import { Feedback } from "../../Feedback/Feedback";
import { WrapperModal } from "../WrapperModal/WrapperModal";
import { modalsActions } from "../../../../redux/modals/actions";

// assets
import styles from "./ShareModal.module.scss";

export const ShareModal = () => {
  const dispatch = useDispatch();
  const [showFeedback, setShowFeedback] = useState(false);
  const [instructionAdded, setInstructionAdded] = useState(false);

  return (
    <>
      <Feedback
        showFeedback={showFeedback}
        setShowFeedback={setShowFeedback}
        setInstructionAdded={setInstructionAdded} />}
      <WrapperModal noFullScreen title='Share code with friends'>
        <div className={styles.share}>
          <p className={styles.description}>
            This code will be required by others to join your table.
          </p>
          <span className={styles.digit}>S</span>
          <span className={styles.digit}>L</span>
          <span className={styles.digit}>E</span>
          <span className={styles.digit}>D</span>
          <hr />
          <h3>Request Service</h3>
          <div className={styles.panel}>
            <label className='checkbox'>
              <input type='checkbox' hidden name='water' />
              <span className='icon' />
              Water
            </label>
            <label className='checkbox'>
              <input type='checkbox' hidden name='salt' />
              <span className='icon' />
              Salt & Pepper
            </label>
            <label className='checkbox'>
              <input type='checkbox' hidden name='tissue' />
              <span className='icon' />
              Tissue Paper
            </label>
            <label className='checkbox'>
              <input type='checkbox' hidden name='sauces' />
              <span className='icon' />
              Sauces
            </label>
            <label className='checkbox'>
              <input type='checkbox' hidden name='cleaning' />
              <span className='icon' />
              Cleaning
            </label>
            <button type='button' className={styles.something} onClick={() => setShowFeedback(true)}>
              Something else?
            </button>
            <button type='button' className='btn btn-second'
                    onClick={() => dispatch(modalsActions.setShowModal(''))}>
              REQUEST
            </button>
          </div>
        </div>
      </WrapperModal>
    </>
  )
}