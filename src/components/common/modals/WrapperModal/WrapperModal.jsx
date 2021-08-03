import React from "react";

// library
import { useDispatch } from "react-redux";

// components
import { modalsActions } from "../../../../redux/modals/actions";

// assets
import styles from "./WrapperModal.module.scss";
import { ReactComponent as BackSvg } from "../../../../assets/images/icons/arrow-back.svg";
import { ReactComponent as CloseSvg } from "../../../../assets/images/icons/close.svg";

export const WrapperModal = ({children, lightIcon, blackIcon, title, disableMenu, noFullScreen, event, rating}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.modal} ${lightIcon ? styles.light : ''} ${blackIcon ? styles.black : ''} ${noFullScreen ? styles.noFullScreen : ''} ${rating ? styles.rating : ''} ${event ? styles.event : ''}`}>
      {disableMenu ? '' : noFullScreen ? '' : <>
        <div className={styles.back} onClick={() => dispatch(modalsActions.setShowModal(''))}>
          <BackSvg />
        </div>
        <h2 className={styles.header}>{title && title}</h2>
      </>}
      {noFullScreen ? <div className={styles.inner}>
        {title && <h3 className={styles.header}>
          {title}
          <span className={styles.close} onClick={() => dispatch(modalsActions.setShowModal(''))}>
            <CloseSvg />
          </span>
        </h3>}
        {children}
      </div> : children}
    </div>
  )
}