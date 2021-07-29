import React from "react";

// assets
import styles from "./PrimaryButton.module.scss";
import { ReactComponent as ArrowRightSvg } from "../../../assets/images/icons/arrow-right.svg";

export const PrimaryButton = ({title, info, white}) => {
  return (
    <button type='submit' className={`btn-card ${styles.card} ${white ? styles.white : ''}`}>
      {info}
      <span className={styles.add}>

        {title}
        <div className={styles.right}>
              <ArrowRightSvg />
            </div>
          </span>
    </button>
  )
}