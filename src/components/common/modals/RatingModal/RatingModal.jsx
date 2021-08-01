import React from "react";

// library
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import { WrapperModal, Card, Wrong } from "../../";
import { modalsActions } from "../../../../redux/modals/actions";
import { routes } from "../../../App/routes";

// assets
import styles from "./RatingModal.module.scss";
import success from "../../../../assets/images/success.png";

export const RatingModal = () => {
  const dispatch = useDispatch();

  return (
    <WrapperModal black disableMenu noFullScreen>
      <div className={styles.rating}>
        <Card title='Payment successfully!' image={success} />
        <Wrong />
      </div>
      <div className={styles.continue}>
        <Link to={routes.orderRating} type='button' className='btn btn-primary'
              onClick={() => dispatch(modalsActions.setShowModal(''))}>
          CONTINUE
        </Link>
      </div>
    </WrapperModal>
  )
}