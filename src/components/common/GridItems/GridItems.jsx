import React from "react";

// components
import { AddButton } from "../AddButton/AddButton";
import { VeganStatus } from "../VeganStatus/VeganStatus";

// assets
import styles from "./GridItems.module.scss";
import { ReactComponent as ArrowSvg } from "../../../assets/images/icons/arrow.svg";


export const GridItems = ({items, toggle}) => {

  const showItems = (e) => {
    e.target.parentElement.classList.toggle(styles.hide);
  };


  return (
    items.map(item => (
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
              <div className={styles.image}>
                {product.image && <img src={product.image} alt={product.title} />}
              </div>
              <div className={styles.description}>
                <h4 className={styles.itemTitle}>
                  <VeganStatus />
                  {product.title}
                </h4>
                <div className={styles.info}>
                  <div className={styles.price}>
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