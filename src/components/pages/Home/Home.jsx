// core
import React from 'react';

// assets
import styles from './Home.module.scss';
import soup from '../../../assets/images/soup.jpg';
import { ReactComponent as ArrowSvg } from '../../../assets/images/icons/arrow.svg';

const items = [
  {
    id: 0,
    name: 'Acai bowls',
    items: [
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {image: soup, title: 'Item name in two lines increases height', price: 299, link: '#'},
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
    ]
  },
  {
    id: 1,
    name: 'Acai bowls',
    items: [
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {image: soup, title: 'Item name in two lines increases height', price: 299, link: '#'},
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
    ]
  }
]
export const Home = () => {

  const addButton = () => {
    console.log('add');
  }

  return (
    <main className='home'>
      <section>
        <div className='container'>
          {items.map(item => (
            <div key={item.id} className={styles.items}>
              <h4 className={styles.title}>
                {item.name}
                <hr />
                <ArrowSvg />
              </h4>
              {item.items.map((product) => (
                <a id={product.title} href={product.link} className={styles.item}>
                  {product.image && <img src={product.image} alt={product.title} />}
                  <div className={styles.description}>
                    <h3>{product.title}</h3>
                    <div className={styles.info}>
                      <div className={styles.price}>
                        <span />
                        <h4>₹{product.price}</h4>
                      </div>
                      <button type='button' onClick={() => addButton()}>
                        <span>+</span>
                        ADD
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

