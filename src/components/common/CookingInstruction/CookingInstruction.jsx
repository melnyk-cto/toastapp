import React from "react";

// assets
import styles from "./CookingInstruction.module.scss";
import { ReactComponent as CloseSvg } from "../../../assets/images/icons/close.svg";
import cacao from "../../../assets/images/cacao.png";

export const CookingInstruction = ({show, setShow, setInstructionAdded}) => {

  const onSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    setInstructionAdded(true)
  };

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
        <form onSubmit={(e) => onSubmit(e)}>
          <label>
            Sunrise Acai Bowl
            <textarea placeholder='I would like my dish less spicy...' />
          </label>
          <button type='submit' className='btn btn-primary'>ADD</button>
        </form>
      </div>
    </div>
  )
}