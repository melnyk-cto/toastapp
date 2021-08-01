import React from "react";

// library
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import { routes } from "../../App/routes";

// assets
import styles from "./TopPanel.module.scss";
import { ReactComponent as BackSvg } from "../../../assets/images/icons/arrow-back.svg";
import { ReactComponent as WarningSvg } from "../../../assets/images/icons/warning.svg";
import { modalsActions } from "../../../redux/modals/actions";

export const TopPanel = ({title, noBorder, noWarning, route}) => {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.panel} ${noBorder ? styles.noBorder : ''}`}>
      <Link to={route ? route : routes.main} className={styles.icon}>
        <BackSvg />
      </Link>
      <h2>
        {title}
        {!noWarning && <div className={styles.icon} onClick={() => dispatch(modalsActions.setShowModal('Complaints'))}>
          <WarningSvg />
        </div>}
      </h2>
    </div>
  )
}