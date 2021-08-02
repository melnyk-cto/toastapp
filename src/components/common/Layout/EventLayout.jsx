// core
import React from 'react'

// library
import { useSelector } from "react-redux";

// components
import { Footer, RegisterEventModal } from "../";
import { getShowModal } from "../../../redux/modals/selectors";

export const EventLayout = ({children}) => {
    const modal = useSelector(getShowModal);

  return (
    <>
      {modal === 'Register Event' && <RegisterEventModal />}
      {children}
      <Footer noMenu />
    </>
  )
};
