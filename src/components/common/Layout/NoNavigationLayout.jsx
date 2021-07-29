// core
import React from 'react'

// library
import { useSelector } from "react-redux";

// components
import { ComplaintsModal } from "../";
import { getShowModal } from "../../../redux/modals/selectors";

export const NoNavigationLayout = ({children}) => {
  const modal = useSelector(getShowModal);

  return (
    <>
      {modal === 'Complaints' && <ComplaintsModal />}
      {children}
    </>
  )
};
