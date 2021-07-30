import React, { useState } from "react";

// library
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import { CookingInstruction, ListItems, NoNavigationLayout, PrimaryButton } from "../../../common";
import { routes } from "../../../App/routes";
import { modalsActions } from "../../../../redux/modals/actions";

// assets
import styles from './PlaceOrder.module.scss';
import saly6 from "../../../../assets/images/saly-6.png";
import { ReactComponent as BackSvg } from "../../../../assets/images/icons/arrow-back.svg";
import { ReactComponent as WarningSvg } from "../../../../assets/images/icons/warning.svg";

export const PlaceOrder = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [items, setItems] = useState([
    {
      id: 0,
      name: 'Current order',
      items: [
        {title: 'Cacao Acai Bowl', price: 299, link: '#'},
        {title: 'Cacao Acai Bowl', price: 299, link: '#'},
        {title: 'Cacao Acai Bowl', price: 299, link: '#'},
      ]
    },
  ]);

  return (
    <NoNavigationLayout>
      <CookingInstruction show={show} setShow={setShow} />
      <main className={styles.placeOrder}>
        <div className={styles.panel}>
          <Link to={routes.main} className={styles.icon}>
            <BackSvg />
          </Link>
          <h2>
            Place Order
            {items && <div className={styles.icon} onClick={() => dispatch(modalsActions.setShowModal('Complaints'))}>
              <WarningSvg />
            </div>}
          </h2>
        </div>
        {items ? <section className={styles.products}>
            <ListItems items={items} toggle list instruction setShow={setShow} />
            <ListItems items={items} toggle list />
            <PrimaryButton title='PLACE ORDER' info='4 Items' white />
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