import React, { useState } from "react";

// library
import { useDispatch } from "react-redux";

// components
import { VeganStatus } from "../../VeganStatus/VeganStatus";
import { modalsActions } from "../../../../redux/modals/actions";
import { Feedback } from "../../Feedback/Feedback";

// assets
import styles from "./ComplaintsModal.module.scss";
import { ReactComponent as BackSvg } from "../../../../assets/images/icons/arrow-back.svg";
import { ReactComponent as ArrowSvg } from "../../../../assets/images/icons/arrow.svg";

const items = [
  {
    title: 'Sunrise Acai Bowl',
    price: '299',
    description: 'Blended with frozen mango & pineapple, topped with fresh fruit, goji berries, fresh coconut, and house granola.'
  },
  {
    title: 'Sunrise Acai Bowl',
    price: '299',
    description: 'Blended with frozen mango & pineapple, topped with fresh fruit, goji berries, fresh coconut, and house granola.'
  }
]
export const ComplaintsModal = () => {
  const dispatch = useDispatch();
  const [showFeedback, setShowFeedback] = useState(false);
  const showItems = (e) => {
    e.target.parentElement.classList.toggle(styles.hide);
  };

  return (
    <div className={styles.modal}>
      <Feedback showFeedback={showFeedback} setShowFeedback={setShowFeedback} />
      <div className={styles.back} onClick={() => dispatch(modalsActions.setShowModal(''))}>
        <BackSvg />
      </div>
      <h2 className={styles.header}>Complaints</h2>
      <div className={styles.bottom}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.top}>
              <h4 className={styles.title}>
                <VeganStatus />
                {item.title}
                <span className={styles.price}>₹{item.price}</span>
              </h4>
              <p className={styles.description}>{item.description}</p>
              <hr />
            </div>
            <h5 className={styles.subTitle} onClick={(e) => showItems(e)}>
              What was not right?
              <ArrowSvg />
            </h5>
            <div className={styles.panel}>
              <label className='checkbox'>
                <input type='checkbox' hidden name='taking' />
                <span className='icon' />
                Order taking too long
              </label>
              <label className='checkbox'>
                <input type='checkbox' hidden name='order' />
                <span className='icon' />
                Order not as mentioned
              </label>
              <label className='checkbox'>
                <input type='checkbox' hidden name='missing' />
                <span className='icon' />
                Missing items
              </label>
              <button type='button' className={styles.something} onClick={() => setShowFeedback(true)}>Something else?
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}