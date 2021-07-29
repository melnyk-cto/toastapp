import React from "react";

// assets
import styles from "./CookingInstruction.module.scss";
import { ReactComponent as CloseSvg } from "../../../assets/images/icons/close.svg";
import cacao from "../../../assets/images/cacao.png";

export const CookingInstruction = ({show, setShow}) => {
  return (
    <div className={`${styles.cooking} ${show ? styles.open : ''}`}>
      <div className={styles.inner}>
        <h3>
          Add cooking instructions
          <span className={styles.close} onClick={() => setShow(false)}>
            <CloseSvg />
          </span>
        </h3>
        <hr />
        <div>
          <div className={styles.avatar}>
            <img src={cacao} alt='cacao' />
          </div>
          <div className={styles.avatar}>
            <img src={cacao} alt='cacao' />
          </div>
          <div className={styles.avatar}>
            <img src={cacao} alt='cacao' />
          </div>
          <div className={styles.avatar}>
            <img src={cacao} alt='cacao' />
          </div>
        </div>
        <form>
          <label>
            Sunrise Acai Bowl
            <textarea placeholder='I would like my dish less spicy...' />
          </label>
          <button type='submit' className='btn btn-primary'>SUBMIT FEEDBACK</button>
        </form>
      </div>
    </div>
  )
}