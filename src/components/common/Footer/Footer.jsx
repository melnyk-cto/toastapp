// core
import React, { useState } from 'react';

// components
import { routes } from "../../App/routes";

// assets
import styles from './Footer.module.scss';
import { ReactComponent as LightningSvg } from '../../../assets/images/icons/lightning.svg';
import { ReactComponent as BookSvg } from '../../../assets/images/icons/book-open.svg';
import { ReactComponent as ShoppingSvg } from '../../../assets/images/icons/shopping-bag.svg';
import { ReactComponent as CloseSvg } from "../../../assets/images/icons/close.svg";

export const Footer = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={`${styles.menu} ${showMenu ? styles.open : ''}`}>
        <div className={styles.inner}>
          <h3>
            Menu
            <span className={styles.close} onClick={() => setShowMenu(false)}>
            <CloseSvg />
          </span>
          </h3>
          <hr />
          <ul className={styles.availability}>
            <li>
              Veg Only
              <label className={styles.radio}>
                <input type='checkbox' hidden checked />
                <span />
              </label>
            </li>
            <li>
              Contains Egg
              <label className={styles.radio}>
                <input type='checkbox' hidden />
                <span />
              </label>
            </li>
          </ul>
          <hr />
          <ul className={styles.availability}>
            <li>All <span>56</span></li>
            <li>Starters <span>56</span></li>
            <li>Breakfast <span>56</span></li>
            <li>Lunch <span>56</span></li>
            <li>Dinner <span>56</span></li>
          </ul>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={`${styles.menuBtn} btn`} onClick={() => setShowMenu(true)}>
          Menu
        </div>
        <ul className={styles.nav}>
          <li>
            <a href='#'>
              <LightningSvg />
            </a>
          </li>
          <li className={styles.active}>
            <a href='#'>
              <BookSvg />
            </a>
          </li>
          <li className={styles.notEmpty}>
            <span className={styles.count}>1</span>
            <a href={routes.placeOrder}>
              <ShoppingSvg />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

