// core
import React from 'react';

// library
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import { routes } from "../../App/routes";
import { modalsActions } from "../../../redux/modals/actions";

// assets
import styles from './Header.module.scss';
import { ReactComponent as SearchSvg } from "../../../assets/images/icons/search.svg";
import { ReactComponent as QRSvg } from "../../../assets/images/icons/qr.svg";

const links = [
  {name: 'Special', url: routes.special},
  {name: 'Main', url: routes.main},
  {name: 'Beverages', url: routes.beverages},
  {name: 'Desserts', url: routes.desserts},
]

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <h3>Sacred Earth Cafe</h3>
        <ul>
          <li>
            <div className={styles.icon} onClick={() => dispatch(modalsActions.setShowModal('Share'))}>
              <QRSvg />
            </div>
          </li>
          <li>
            <Link to={routes.search} className={styles.icon}>
              <SearchSvg />
            </Link>
          </li>
        </ul>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <NavLink key={link.name} to={link.url}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

