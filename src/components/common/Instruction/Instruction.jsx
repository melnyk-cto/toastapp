import React from "react";

// assets
import styles from "./Instruction.module.scss";
import editWhite from "../../../assets/images/icons/edit-white.svg";
import edit from "../../../assets/images/icons/edit.svg";
import minus from "../../../assets/images/icons/minus-circle.svg";

export const Instruction = ({title, description, black}) => {
  return (
    <div className={styles.instruction}>
      <div>
        {title && <h5>{title}</h5>}
        <p>{description}</p>
      </div>
      <div className={styles.action}>
        {black ? <img src={edit} alt='edit' /> : <img src={editWhite} alt='edit' />}
        <img src={minus} alt='minus' />
      </div>
    </div>
  )
}