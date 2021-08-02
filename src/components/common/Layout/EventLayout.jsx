// core
import React from 'react'

// components
import { Footer } from "../";

export const EventLayout = ({children}) => {

  return (
    <>
      {children}
      <Footer noMenu />
    </>
  )
};
