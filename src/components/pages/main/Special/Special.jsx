// core
import React from 'react';

// components
import { ListItems } from "../../../common";

// assets
import styles from './Special.module.scss';
import soup from '../../../../assets/images/soup.jpg';
import banner from '../../../../assets/images/special-banner.png';

const items1 = {
  id: 0,
  name: 'Acai bowls',
  items: [
    {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
    {title: 'Sunrise Acai Bowl', price: 299, link: '#'},
    {image: soup, title: 'Item name in two lines increases height', price: 299, link: '#'},
  ]
};

export const Special = () => {

  return (
    <main className='special'>
      <section>
        <div className={styles.banner}>
          <div className={styles.image}>
            <img src={banner} alt='banner' />
            <h2>Welcome to <br /> Sacred Earth Cafe</h2>
          </div>
        </div>
      </section>
      <section>
        <ListItems items={items1} />
      </section>
    </main>
  );
};

