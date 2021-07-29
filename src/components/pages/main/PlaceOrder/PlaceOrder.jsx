import React, { useRef, useState } from "react";

// library
import { Link } from "react-router-dom";

// components
import { ListItems, NoNavigationLayout } from "../../../common";
import { routes } from "../../../App/routes";

// assets
import styles from './PlaceOrder.module.scss';
import saly6 from "../../../../assets/images/saly-6.png";
import { ReactComponent as BackSvg } from "../../../../assets/images/icons/arrow-back.svg";
import cacao from "../../../../assets/images/cacao.png";
import chocolate from "../../../../assets/images/chocolate2.png";

export const PlaceOrder = () => {
  const [items, setItems] = useState(null);

  let refSearch = useRef(null);

  const handleClickSearch = () => {
    if (refSearch.current.value.length === 0) {
      setItems(null)
    } else {
      setItems([
        {
          id: 0,
          name: 'Today’s Special',
          items: [
            {image: cacao, title: 'Cacao Acai Bowl', price: 299, link: '#'},
          ]
        },
        {
          id: 1,
          name: 'Beverages',
          items: [
            {image: chocolate, title: 'Chocolate Milk Shake', price: 299, link: '#'},
          ]
        }
      ])
    }
  }
  return (
    <NoNavigationLayout>
      <main className={styles.placeOrder}>
        <div className={styles.panel}>
          <Link to={routes.main}>
            <BackSvg />
          </Link>
          <h2>Place Order</h2>
        </div>
        {items ? <section className={styles.content}>
            <ListItems items={items} />
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