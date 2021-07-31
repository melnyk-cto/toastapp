import React, { useState } from "react";

// assets
import styles from "./CookingInstruction.module.scss";
import { ReactComponent as CloseSvg } from "../../../assets/images/icons/close.svg";
import coffee from "../../../assets/images/coffee.png";
import fresh from "../../../assets/images/fresh.png";
import soup from "../../../assets/images/soup.png";

const avatars = [
  {image: soup, alt: 'soup', name: '', status: null},
  {image: null, alt: '', name: 'Ch', status: 'online'},
  {image: null, alt: '', name: 'Ac', status: null},
  {image: coffee, alt: 'coffee', name: '', status: null},
  {image: fresh, alt: 'fresh', name: '', status: null}
];
export const CookingInstruction = ({show, setShow, setInstructionAdded}) => {
  const [activeAvatar, setActiveAvatar] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    setInstructionAdded(true)
  };

  return (
    <div className={`${styles.cooking} ${show ? styles.open : ''}`}>
      <div className={styles.inner}>
        <h3>
          Add cooking instructions
          <span className={styles.close} onClick={() => setShow(false)}>
            <CloseSvg />
          </span>
        </h3>
        <hr />
        <div className={styles.avatars}>
          {avatars.map((avatar, index) => (
            <div key={index}
                 className={`${styles.avatar} ${activeAvatar === index ? styles.active : ''}`}
                 onClick={() => setActiveAvatar(index)}>
              {avatar.image ? <img src={avatar.image} alt={avatar.alt} />
                : <span className={avatar.status ? styles.status : ''}>{avatar.name}</span>}
            </div>
          ))}
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <label>
            Sunrise Acai Bowl
            <textarea placeholder='I would like my dish less spicy...' />
          </label>
          <button type='submit' className='btn btn-primary'>ADD</button>
        </form>
      </div>
    </div>
  )
}