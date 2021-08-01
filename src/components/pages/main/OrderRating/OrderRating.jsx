import React  from "react";

// library
import { useDispatch } from "react-redux";

// components
import { Emotions, NoNavigationLayout, VeganStatus } from "../../../common";
import { Link } from "react-router-dom";
import { routes } from "../../../App/routes";
import { modalsActions } from "../../../../redux/modals/actions";

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


  return (
    <NoNavigationLayout>
      <main className={styles.orderRating}>
        <div className={styles.panel}>
          <Link to={routes.main} className={`${styles.icon} ${styles.close}`}>
            <CloseSvg />
          </Link>
          <h2>
            Sacred Earth Cafe
            <div className={styles.stars}>
              {stars.map((star, index) => (
                <span key={index} className={`${styles.star} ${star === 2 && styles.active}`} />
              ))}
            </div>
          </h2>
          <div className={`${styles.icon} ${styles.edit}`}
               onClick={() => dispatch(modalsActions.setShowModal('Complaints'))}>
            <EditSvg />
          </div>
        </div>
        <section className={styles.content}>
          <h3>Rate your items</h3>
          {items.map((product, index) => (
            <div key={index} className={styles.item}>
              {product.image && <img src={product.image} className={styles.image} alt={product.title} />}
              <div className={styles.description}>
                <h3>
                  <VeganStatus />
                  {product.title}
                </h3>
                <Link to={'#'} className={styles.review}>Add a review</Link>
              </div>
              <Emotions />
            </div>
          ))}
          <button type='button' className='btn btn-primary'>SUBMIT</button>
        </section>
      </main>
    </NoNavigationLayout>
  )
}