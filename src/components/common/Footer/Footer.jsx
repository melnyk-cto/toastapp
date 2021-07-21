// core
import React from 'react';

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
      <div className='container'>
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
          <li>
            <a href='#'>
              <ShoppingSvg />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

