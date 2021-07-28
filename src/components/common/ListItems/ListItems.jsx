import React from "react";

// assets
import styles from "./ListItems.module.scss";
import { ReactComponent as ArrowSvg } from "../../../assets/images/icons/arrow.svg";


export const ListItems = ({items}) => {

  const addButton = () => {
    console.log('add');
  }

  return (
    <div key={items.id} className={styles.items}>
      <h4 className={styles.title}>
        {items.name}
        <hr />
        <ArrowSvg />
      </h4>
      {items.items.map((product, index) => (
        <a key={index} id={product.title} href={product.link} className={styles.item}>
          {product.image && <img src={product.image} alt={product.title} />}
          <div className={styles.description}>
            <h3>{product.title}</h3>
            <div className={styles.info}>
              <div className={styles.price}>
                <span />
                <h4>₹{product.price}</h4>
              </div>
              <button type='button' onClick={() => addButton()}>
                <span>+</span>
                ADD
              </button>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}