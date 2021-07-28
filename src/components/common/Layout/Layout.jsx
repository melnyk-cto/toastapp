// core
import React from 'react'

// components
import { Footer, Header, } from "../";

export const Layout = ({children}) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
};
