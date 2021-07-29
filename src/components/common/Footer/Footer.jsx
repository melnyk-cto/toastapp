// core
import React from 'react';

// components
import { routes } from "../../App/routes";

// assets
import styles from './Footer.module.scss';
import { ReactComponent as LightningSvg } from '../../../assets/images/icons/lightning.svg';
import { ReactComponent as BookSvg } from '../../../assets/images/icons/book-open.svg';
import { ReactComponent as ShoppingSvg } from '../../../assets/images/icons/shopping-bag.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.menu} btn`}>
        Menu
      </div>
      <ul>
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
  );
};

