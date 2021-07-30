import React from "react";

// library
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import { VeganStatus } from "../../VeganStatus/VeganStatus";
import { modalsActions } from "../../../../redux/modals/actions";
import { PrimaryButton } from "../../PrimaryButton/PrimaryButton";

// assets
import styles from "./AddProductModal.module.scss";
import plate from "../../../../assets/images/icons/plate.svg";
import { ReactComponent as BackSvg } from "../../../../assets/images/icons/arrow-back.svg";

export const AddProductModal = () => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('add');
  };

  return (
    <div className={styles.modal}>
      <div className={styles.back} onClick={() => dispatch(modalsActions.setShowModal(''))}>
        <BackSvg />
      </div>
      <div className={styles.top}>
        <img src={plate} alt='plate' />
      </div>
      <form onSubmit={(e) => onSubmit(e)} className={styles.bottom}>
        <div className={styles.form}>
          <h3 className={styles.itemTitle}>
            <VeganStatus />
            Sunrise Acai Bowl
          </h3>
          <span className={styles.chip}>
          gluten-free
        </span>
          <span className={styles.chip}>
          vegan
        </span>
          <p>
            Blended with frozen mango & pineapple, topped with fresh fruit, goji berries, fresh coconut, and house
            granola.
          </p>
          <div className={styles.option}>
            <h4>Select Size</h4>
            <label className='radio'>
              <input type='radio' hidden name='size' />
              <span className='icon' />
              Medium
              <span className={styles.price}>₹380</span>
            </label>
            <label className='radio'>
              <input type='radio' hidden name='size' />
              <span className='icon' />
              Large
              <span className={styles.price}>₹420</span>
            </label>
          </div>
          <div className={styles.option}>
            <h4>Add Toppings <span>(optional)</span></h4>
            <label className='checkbox'>
              <input type='checkbox' hidden name='fresh' />
              <span className='icon' />
              Fresh Fruit
              <span className={styles.price}>₹25</span>
            </label>
            <label className='checkbox'>
              <input type='checkbox' hidden name='house' />
              <span className='icon' />
              House Granola
              <span className={styles.price}>₹25</span>
            </label>
            <label className='checkbox'>
              <input type='checkbox' hidden name='chia' />
              <span className='icon' />
              Chia Seeds
              <span className={styles.price}>₹25</span>
            </label>
            <label className='checkbox'>
              <input type='checkbox' hidden name='coconut' />
              <span className='icon' />
              Coconut Flakes
              <span className={styles.price}>₹25</span>
            </label>
            <label className='checkbox'>
              <input type='checkbox' hidden name='berries' />
              <span className='icon' />
              Goji Berries
              <span className={styles.price}>₹25</span>
            </label>
          </div>
          <Link to='#' className={styles.more}>Show more</Link>
        </div>
        <PrimaryButton title='ADD ITEM' info='₹405.00'/>
      </form>
    </div>
  )
}