import React from "react";

// library
import { useDispatch } from "react-redux";

// components
import { modalsActions } from "../../../redux/modals/actions";

// styles
import styles from "./AddButton.module.scss";

export const AddButton = ({count, register}) => {
  const dispatch = useDispatch();

  const addButton = () => {
    console.log('add');
  }

  const changeCount = (symbol) => {
    if (symbol === '-') {
      console.log('-')
    } else {
      console.log('+')
    }
  }

  return (
    register
      ? <button className={`${styles.add} ${styles.register}`} type='button'
                onClick={() => dispatch(modalsActions.setShowModal('Register Event'))}>
        <span className={styles.plus} />
        <span className={styles.name}>REGISTER</span>
      </button>
      : !count ?
      <button className={styles.add} type='button' onClick={() => addButton()}>
        <span className={styles.plus} />
        ADD
      </button>
      : <button className={`${styles.add} ${styles.mod}`} type='button'>
        <span className={styles.minus} onClick={() => changeCount('-')} />
        {count}
        <span className={styles.plus} onClick={() => changeCount('+')} />
      </button>
  )
}