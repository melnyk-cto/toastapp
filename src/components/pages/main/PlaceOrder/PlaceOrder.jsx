import React, { useState } from "react";

// library
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import { CookingInstruction, ListItems, NoNavigationLayout, PrimaryButton, TopPanel } from "../../../common";
import { routes } from "../../../App/routes";
import { modalsActions } from "../../../../redux/modals/actions";

// assets
import styles from './PlaceOrder.module.scss';
import saly6 from "../../../../assets/images/saly-6.png";

const data = [
  {
    id: 0,
    name: 'Current order',
    items: [
      {title: 'Cacao Acai Bowl', price: 299, link: '#'},
      {title: 'Cacao Acai Bowl', price: 299, link: '#'},
      {title: 'Cacao Acai Bowl', price: 299, link: '#'},
    ]
  },
]
export const PlaceOrder = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [items, setItems] = useState(null);
  const [instructionAdded, setInstructionAdded] = useState(false);

  const startOrdering = (e) => {
    e.preventDefault();
    setItems(data)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(modalsActions.setShowModal('Order'))
  };

  return (
    <NoNavigationLayout>
      <CookingInstruction show={show} setShow={setShow} setInstructionAdded={setInstructionAdded} />
      <main className={styles.placeOrder}>
        <TopPanel title='Place Order' />
        {items ? <section onSubmit={(e) => onSubmit(e)} className={styles.products}>
            <form action=''>
              <ListItems items={items} toggle list instruction setShow={setShow} instructionAdded={instructionAdded} />
              <ListItems items={items} toggle list instruction setShow={setShow} instructionAdded={instructionAdded} />
              <PrimaryButton title='PLACE ORDER' info='4 Items' white />
            </form>
          </section>
          : <section className={styles.content}>
            <h3>No orders yet!</h3>
            <p>Add something from the menu.</p>
            <Link to={routes.main} type='button' className={`btn btn-primary ${styles.btn}`}
                  onClick={(e) => startOrdering(e)}>START ORDERING</Link>
            <img className={styles.banner} src={saly6} alt='' />
          </section>}
      </main>
    </NoNavigationLayout>
  )
}