import React from "react";

// assets
import styles from "./Feedback.module.scss";
import { ReactComponent as CloseSvg } from "../../../assets/images/icons/close.svg";

export const Feedback = ({showFeedback, setShowFeedback, setInstructionAdded}) => {

  const onSubmit = (e) => {
    e.preventDefault();
    setShowFeedback(false);
    setInstructionAdded(true);
  }
  return (
    <div className={`${styles.feedback} ${showFeedback ? styles.open : ''}`}>
      <div className={styles.inner}>
        <h3>
          Provide a feedback
          <span className={styles.close} onClick={() => setShowFeedback(false)}>
            <CloseSvg />
          </span>
        </h3>
        <hr />
        <form onSubmit={(e) => onSubmit(e)}>
          <label>
            <textarea placeholder='Something else? Mention it here.' />
          </label>
          <button type='submit' className='btn btn-primary'>SUBMIT FEEDBACK</button>
        </form>
      </div>
    </div>
  )
}