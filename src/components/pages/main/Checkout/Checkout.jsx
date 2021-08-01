import React from "react";

// library
import { useDispatch } from "react-redux";

// components
import { NoNavigationLayout, PrimaryButton, TopPanel, VeganStatus } from "../../../common";
import { Link } from "react-router-dom";
import { routes } from "../../../App/routes";
import { modalsActions } from "../../../../redux/modals/actions";

// assets
import styles from './Checkout.module.scss';
import coupons from "../../../../assets/images/icons/coupons.svg";
import minus from "../../../../assets/images/icons/minus-circle.svg";
import donate from "../../../../assets/images/icons/donate-heart.svg";

const item1 = [
  {title: 'Sunrise Acai Bowl', price: '299.00', count: 1},
  {title: 'Sunrise Acai Bowl', price: '299.00', count: 1},
  {title: 'Sunrise Acai Bowl', price: '299.00', count: 1},
]
export const Checkout = () => {
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(modalsActions.setShowModal('Rating'))
  };
  return (
    <NoNavigationLayout>
      <main className={styles.placeOrder}>
        <TopPanel title='Checkout' noBorder route={routes.placeOrder} />
        <form onSubmit={(e) => onSubmit(e)} className={styles.products}>
          <div className={styles.order}>
            <h5 className={styles.title}>Your Order</h5>
            {item1.map((item, index) => (
              <div key={index} className={styles.item}>
                <h5>
                  <VeganStatus />
                  {item.title}
                </h5>
                <h5 className={styles.count}>x {item.count}</h5>
                <h5>₹{item.price}</h5>
              </div>
            ))}
          </div>
          <div className={styles.order}>
            <h5 className={styles.title}>Your Order</h5>
            {item1.map((item, index) => (
              <div key={index} className={styles.item}>
                <h5>
                  <VeganStatus />
                  {item.title}
                </h5>
                <h5 className={styles.count}>x {item.count}</h5>
                <h5>₹{item.price}</h5>
              </div>
            ))}
          </div>
          <Link to={routes.coupons} className={styles.coupons}>
            <img src={coupons} alt='coupons' />
            <div className={styles.description}>
              <h5>Coupons</h5>
              <h6>No coupons for now</h6>
            </div>
          </Link>
          <div className={styles.waiter}>
            <h4 className={styles.title}>
              <img src={donate} alt='' className={styles.donate} />
              Tip your waiter
              <span className={styles.tipped}>₹100 tipped</span>
              <img src={minus} alt='minus' className={styles.minus} />
            </h4>
            <div className={styles.boxes}>
              <div className={`${styles.box} ${styles.active}`}>₹100</div>
              <div className={styles.box}>
                ₹200
                <span>Most Tipped</span>
              </div>
              <div className={styles.box}>₹500</div>
              <label className={styles.input}>
                <input type='text' placeholder='Enter Amount' />
              </label>
            </div>
          </div>
          <div className={styles.total}>
            <h5>Item Total<span>₹1800.00</span></h5>
            <h6>CGST + SGST<span>₹123.00</span></h6>
            <h6>Coupon Discount<span className={styles.green}>₹123.00</span></h6>
            <h6>Tip<span className={styles.green}>₹50.00</span></h6>
            <h4>Grand Total<span>₹1850.00</span></h4>
          </div>
          <PrimaryButton title='MAKE PAYMENT' info='₹1850.00' white />
        </form>
      </main>
    </NoNavigationLayout>
  )
}