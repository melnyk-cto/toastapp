import React from "react";

// components
import { AddButton } from "../AddButton/AddButton";
import { VeganStatus } from "../VeganStatus/VeganStatus";

// assets
import styles from "./ListItems.module.scss";
import { ReactComponent as ArrowSvg } from "../../../assets/images/icons/arrow.svg";


export const ListItems = ({items, toggle}) => {

  const showItems = (e) => {
    e.target.parentElement.classList.toggle(styles.hide);
  };

  return (
    items.map((item) => (
      <div key={item.id} className={styles.items}>
        {toggle ? <h4 className={`${styles.title} ${styles.toggle}`} onClick={(e) => showItems(e)}>
            {item.name}
            <hr />
            <ArrowSvg />
          </h4>
          : <h4 className={styles.title}>
            {item.name}
          </h4>}
        <div className={styles.panel}>
          {item.items.map((product, index) => (
            <a key={index} id={product.title} href={product.link} className={styles.item}>
              {product.image && <img src={product.image} alt={product.title} />}
              <div className={styles.description}>
                <h3>{product.title}</h3>
                <div className={styles.info}>
                  <div className={styles.price}>
                    <VeganStatus />
                    <h4>₹{product.price}</h4>
                  </div>
                  <AddButton />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    ))
  )
}