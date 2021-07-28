import React from "react";

// styles
import styles from "./AddButton.module.scss";

export const AddButton = () => {
  const addButton = () => {
    console.log('add');
  }

  return (
    <button className={styles.add} type='button' onClick={() => addButton()}>
      <span>+</span>
      ADD
    </button>
  )
}