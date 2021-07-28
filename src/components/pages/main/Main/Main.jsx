// core
import React from 'react';

// components
import { Layout, ListItems } from "../../../common";

// assets
import soup from '../../../../assets/images/soup.jpg';

const items1 = [
  {
    id: 0,
    name: 'Acai bowls',
    items: [
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {image: soup, title: 'Item name in two lines increases height', price: 299, link: '#'},
    ]
  },
  {
    id: 1,
    name: 'Acai bowls',
    items: [
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {image: soup, title: 'Item name in two lines increases height', price: 299, link: '#'},
    ]
  },
  {
    id: 2,
    name: 'Acai bowls',
    items: [
      {image: soup, title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {title: 'Sunrise Acai Bowl', price: 299, link: '#'},
      {image: soup, title: 'Item name in two lines increases height', price: 299, link: '#'},
    ]
  }
];

const items2 = [
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
];

export const Main = () => {

  return (
    <Layout>
      <main className='home'>
        <section>
          <ListItems items={items1}  toggle />
          <ListItems items={items2} toggle />
        </section>
      </main>
    </Layout>
  );
};

