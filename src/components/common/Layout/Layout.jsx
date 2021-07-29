// core
import React from 'react'

// components
import { AddProductModal, Footer, Header, } from "../";

export const Layout = ({children}) => {

  return (
    <>
      <AddProductModal />
      <Header />
      {children}
      <Footer />
    </>
  )
};
