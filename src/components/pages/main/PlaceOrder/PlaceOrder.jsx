import React, { useState } from "react";

// library
import { Link } from "react-router-dom";

// components
import { ListItems, NoNavigationLayout, PrimaryButton } from "../../../common";
import { routes } from "../../../App/routes";

// assets
import styles from './PlaceOrder.module.scss';
import saly6 from "../../../../assets/images/saly-6.png";
import { ReactComponent as BackSvg } from "../../../../assets/images/icons/arrow-back.svg";

export const PlaceOrder = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      name: 'Current order',
      items: [
        {title: 'Cacao Acai Bowl', price: 299, link: '#'},
        {title: 'Cacao Acai Bowl', price: 299, link: '#'},
        {title: 'Cacao Acai Bowl', price: 299, link: '#'},
        {title: 'Cacao Acai Bowl', price: 299, link: '#'},
      ]
    },
  ]);

  return (
    <NoNavigationLayout>
      <main className={styles.placeOrder}>
        <div className={styles.panel}>
          <Link to={routes.main}>
            <BackSvg />
          </Link>
          <h2>Place Order</h2>
        </div>
        {items ? <section className={styles.products}>
            <ListItems items={items} toggle list instruction />
            <ListItems items={items} toggle list />
            <PrimaryButton title='PLACE ORDER' info='4 Items' white/>
          </section>
          : <section className={styles.content}>
            <h3>No orders yet!</h3>
            <p>Add something from the menu.</p>
            <Link to={routes.main} type='button' className={`btn btn-primary ${styles.btn}`}>START ORDERING</Link>
            <img className={styles.banner} src={saly6} alt='' />
          </section>}
      </main>
    </NoNavigationLayout>
  )
}