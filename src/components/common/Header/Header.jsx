// core
import React from 'react';

// components
import { routes } from "../../App/routes";

// assets
import styles from './Header.module.scss';
import { ReactComponent as SearchSvg } from "../../../assets/images/icons/search.svg";
import { ReactComponent as QRSvg } from "../../../assets/images/icons/qr.svg";

const links = [
  {name: 'Special', url: routes.special},
  {name: 'Main', url: routes.home},
  {name: 'Beverages', url: ''},
  {name: 'Desserts', url: ''},
]

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <h3>Sacred Earth Cafe</h3>
        <ul>
          <li>
            <a href='#'>
              <QRSvg />
            </a>
          </li>
          <li>
            <a href='#'>
              <SearchSvg />
            </a>
          </li>
        </ul>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li className={link.name === 'Main' ? styles.active : ''}>
              <a key={link.name} href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

