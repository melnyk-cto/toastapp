import React from "react";

// library
import { useDispatch } from "react-redux";

// components
import { modalsActions } from "../../../../redux/modals/actions";

// assets
import styles from "./WrapperModal.module.scss";
import { ReactComponent as BackSvg } from "../../../../assets/images/icons/arrow-back.svg";

export const WrapperModal = ({children, light, black, title, disableMenu}) => {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.modal} ${light ? styles.light : ''} ${black ? styles.black : ''}`}>
      {disableMenu ? '' : <>
        <div className={styles.back} onClick={() => dispatch(modalsActions.setShowModal(''))}>
          <BackSvg />
        </div>
        <h2 className={styles.header}>{title && title}</h2>
      </>}
      {children}
    </div>
  )
}