// core
import React from 'react'

// library
import { useSelector } from "react-redux";

// components
import { AddProductModal, ComplaintsModal, OrderSuccessfullyModal } from "../";
import { getShowModal } from "../../../redux/modals/selectors";

export const NoNavigationLayout = ({children}) => {
  const modal = useSelector(getShowModal);

  return (
    <>
      {modal === 'Add Product' && <AddProductModal />}
      {modal === 'Complaints' && <ComplaintsModal />}
      {modal === 'Order Successfully' && <OrderSuccessfullyModal />}
      {children}
    </>
  )
};
