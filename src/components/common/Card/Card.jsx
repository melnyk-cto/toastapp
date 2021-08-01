import React, { useState } from "react";

// assets
import styles from "./Card.module.scss";

const stars = [
  {name: 'Great'},
  {name: 'Awesome!'},
  {name: 'Good'},
  {name: 'Bad'},
  {name: 'Poor'},
];
export const Card = ({title, image}) => {
  const [activeStar, setActiveStar] = useState('Awesome!');

  return (
    <div className={styles.card}>
      <div className={styles.description}>
        <div>
          {title && <h2>{title}</h2>}
          <h4>Rate your experience at <br />
            <span>Sacred Earth Cafe</span>
          </h4>
        </div>
        <img src={image} alt='image' />
      </div>
      <div className={styles.rate}>
        <div className={styles.stars}>
          {stars.map((star, index) => (
            <span key={index} className={`${styles.star} ${star.name === activeStar && styles.active}`}
                  onClick={() => setActiveStar(star.name)} />
          ))}
        </div>
        <p>{activeStar}</p>
      </div>
    </div>
  )
}
