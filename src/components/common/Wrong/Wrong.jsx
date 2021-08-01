import React, { useState } from "react";

// components
import { Link } from "react-router-dom";

// assets
import styles from "./Wrong.module.scss";

const wrong = ['SERVICE', 'PREPARATION ISSUES', 'FOOD TASTE', 'APP ISSUE', 'CLEANLINESS', 'OTHER'];
export const Wrong = () => {
  const [currentWrong, setCurrentWrong] = useState('SERVICE');

  return (
    <div className={styles.wrong}>
      <h5> What went wrong?</h5>
      {wrong.map((item) => (
        <span
          key={item}
          className={item === currentWrong ? styles.active : ''}
          onClick={() => setCurrentWrong(item)}>
              {item}
            </span>
      ))}
      <Link to={'#'} className={styles.provide}>Provide a Feedback</Link>
    </div>
  )
}