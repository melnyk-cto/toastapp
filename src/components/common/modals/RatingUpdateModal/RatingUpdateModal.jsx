import React  from "react";

// library
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import { WrapperModal, Card, Wrong } from "../../";
import { modalsActions } from "../../../../redux/modals/actions";
import { routes } from "../../../App/routes";

// assets
import styles from "./RatingUpdateModal.module.scss";
import saly8 from "../../../../assets/images/saly-8.png";

export const RatingUpdateModal = () => {
  const dispatch = useDispatch();

  return (
    <WrapperModal black title='Rate your experience' noFullScreen>
      <div className={styles.ratingUpdate}>
        <Card image={saly8} />
        <Wrong />
      </div>
      <div className={styles.continue}>
        <Link to={routes.orderRating} type='button' className='btn btn-black'
              onClick={() => dispatch(modalsActions.setShowModal(''))}>
          Update
        </Link>
      </div>
    </WrapperModal>
  )
}