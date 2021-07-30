import React from "react";

// library
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// components
import { AddButton } from "../AddButton/AddButton";
import { VeganStatus } from "../VeganStatus/VeganStatus";
import { modalsActions } from "../../../redux/modals/actions";

// assets
import styles from "./GridItems.module.scss";
import { ReactComponent as ArrowSvg } from "../../../assets/images/icons/arrow.svg";

export const GridItems = ({items, toggle}) => {
  const dispatch = useDispatch();

  const showItems = (e) => {
    e.target.parentElement.classList.toggle(styles.hide);
  };

  const addProduct = () => {
    dispatch(modalsActions.setShowModal('Add Product'));
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
            <Link key={index} id={product.title} to={product.link} className={styles.item} onClick={() => addProduct()}>
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
            </Link>
          ))}
        </div>
      </div>
    ))
  )
}