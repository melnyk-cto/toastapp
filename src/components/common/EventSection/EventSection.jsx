import React from "react";

// assets
import styles from "./EventSection.module.scss";

export const EventSection = ({title, items}) => {
  return (
    <div className={styles.events}>
      <div className={styles.inner}>
        <h5 className={styles.title}>
          {title}
          <hr />
        </h5>
        {items.map((item) => (
          <div className={styles.item}>
            <div className={styles.top}>
              <img src={item.avatar} alt='avatar' />
              <h5>{item.title}</h5>
            </div>
            <img src={item.image} alt='event' />
            <div className={styles.bottom}>
              <h4>{item.info}</h4>
              <h6>{item.date}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}