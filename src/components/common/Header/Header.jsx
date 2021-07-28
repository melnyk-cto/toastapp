// core
import React from 'react';

// library
import { Link, NavLink } from "react-router-dom";

// components
import { routes } from "../../App/routes";

// assets
import styles from './Header.module.scss';
import { ReactComponent as SearchSvg } from "../../../assets/images/icons/search.svg";
import { ReactComponent as QRSvg } from "../../../assets/images/icons/qr.svg";

const links = [
  {name: 'Special', url: routes.special},
  {name: 'Main', url: routes.main},
  {name: 'Beverages', url: '#'},
  {name: 'Desserts', url: '#'},
]

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <h3>Sacred Earth Cafe</h3>
        <ul>
          <li>
            <Link to='#'>
              <QRSvg />
            </Link>
          </li>
          <li>
            <Link to={routes.search}>
              <SearchSvg />
            </Link>
          </li>
        </ul>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name} className={link.name === 'Main' ? styles.active : ''}>
              <NavLink key={link.name} to={link.url}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

