import React, { useState } from "react";

// library
import { useDispatch, useSelector } from "react-redux";

// components
import { Dialogs, Emotions, Feedback, Instruction, NoNavigationLayout, VeganStatus } from "../../../common";
import { Link } from "react-router-dom";
import { routes } from "../../../App/routes";
import { modalsActions } from "../../../../redux/modals/actions";
import { getShowModal } from "../../../../redux/modals/selectors";

// assets
import styles from './OrderRating.module.scss';
import { ReactComponent as CloseSvg } from "../../../../assets/images/icons/close.svg";
import { ReactComponent as EditSvg } from "../../../../assets/images/icons/edit-1.svg";
import soup from '../../../../assets/images/soup.jpg';

const items = [
  {image: soup, title: 'Sunrise Acai Bowl'},
  {image: soup, title: 'Sunrise Acai Bowl'},
  {image: soup, title: 'Sunrise Acai Bowl'},
  {image: soup, title: 'Sunrise Acai Bowl'},
  {image: soup, title: 'Sunrise Acai Bowl'},
]
const stars = [0, 1, 2, 3, 4];
export const OrderRating = () => {
  const dispatch = useDispatch();
  const modal = useSelector(getShowModal);

  const [instructionAdded, setInstructionAdded] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <NoNavigationLayout>
      {modal === 'Dialogs' && <Dialogs />}
      <Feedback showFeedback={showFeedback} setShowFeedback={setShowFeedback}
                setInstructionAdded={setInstructionAdded} />
      <main className={styles.orderRating}>
        <div className={styles.panel}>
          <Link to={routes.checkout}
                className={`${styles.icon} ${styles.close}`}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(modalsActions.setShowModal('Dialogs'))
                }}>
            <CloseSvg />
          </Link>
          <h3>
            Sacred Earth Cafe
            <div className={styles.stars}>
              {stars.map((star, index) => (
                <span key={index} className={`${styles.star} ${star === 2 && styles.active}`} />
              ))}
            </div>
          </h3>
          <div className={`${styles.icon} ${styles.edit}`}
               onClick={() => dispatch(modalsActions.setShowModal('Rating Update'))}>
            <EditSvg />
          </div>
        </div>
        <section className={styles.content}>
          <h3>Rate your items</h3>
          {items.map((product, index) => (
            <div key={index} className={styles.item}>
              {product.image && <img src={product.image} className={styles.image} alt={product.title} />}
              <div className={styles.description}>
                <h4>
                  <VeganStatus />
                  {product.title}
                </h4>
                {!instructionAdded &&
                <Link to={'#'} className={styles.review} onClick={() => setShowFeedback(true)}>
                  Add a review
                </Link>}
              </div>
              <Emotions />
              <div>
                {instructionAdded &&
                <Instruction
                  black
                  description='Convallis blandit egestas nulla rutrum. Eleifend suspendisse venenatis sed lectus. Sed quisque mauris in hac vulputate. Id.' />}
              </div>
            </div>))}
          <button type='button' className='btn btn-primary'>SUBMIT</button>
        </section>
      </main>
    </NoNavigationLayout>
  )
}