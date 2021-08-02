import React from "react";

// styles
import styles from "./AddButton.module.scss";

export const AddButton = ({count, register}) => {
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
      ? <button className={`${styles.add} ${styles.register}`} type='button' onClick={() => addButton()}>
        <span className={styles.plus} />
        REGISTER
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