// core
import React from 'react'

// library
import { useSelector } from "react-redux";

// components
import { AddProductModal, Footer, Header, ShareModal} from "../";
import { getShowModal } from "../../../redux/modals/selectors";

export const Layout = ({children}) => {
  const modal = useSelector(getShowModal);

  return (
    <>
      {modal === 'Add Product' && <AddProductModal />}
      {modal === 'Share' && <ShareModal />}
      <Header />
      {children}
      <Footer />
    </>
  )
};
