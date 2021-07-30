import React from "react";

//library
import { useDispatch } from "react-redux";

// components
import { AddButton } from "../AddButton/AddButton";
import { VeganStatus } from "../VeganStatus/VeganStatus";
import { modalsActions } from "../../../redux/modals/actions";

// assets
import styles from "./ListItems.module.scss";
import { ReactComponent as ArrowSvg } from "../../../assets/images/icons/arrow.svg";

export const ListItems = ({items, mod,toggle, list, instruction, setShow}) => {
  const dispatch = useDispatch();

  const showItems = (e) => {
    e.target.parentElement.classList.toggle(styles.hide);
  };

  const addProduct = () => {
    dispatch(modalsActions.setShowModal('Add Product'));

  };

  return (
    items.map((item) => (
      <div key={item.id} className={`${styles.items} ${mod ? styles.mod : ''}`}>
        {toggle ? <h4 className={`${styles.title} ${styles.toggle}`} onClick={(e) => showItems(e)}>
            {item.name}
            <hr />
            <ArrowSvg />
          </h4>
          : <h4 className={styles.title}>
            {item.name}
          </h4>}
        {!list ? <div className={styles.panel}>
            {item.items.map((product, index) => (
              <a key={index} id={product.title} href={product.link} className={styles.item} onClick={() => addProduct()}>
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
          : <div className={`${styles.panel} ${styles.mod}`}>
            {item.items.map((product, index) => (
              <div key={index} id={product.title} className={styles.item}>
                <div className={styles.description}>
                  <div className={styles.list}>
                    <VeganStatus />
                    <div>
                      <h4>{product.title}</h4>
                      <div className={styles.info}>
                        <div className={styles.price}>
                          <h5>₹{product.price}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <AddButton count={1} />
                </div>
              </div>
            ))}
            {instruction && <div className={styles.link} onClick={() => setShow(true)}>Add cooking instruction</div>}
          </div>}
      </div>
    ))
  )
}