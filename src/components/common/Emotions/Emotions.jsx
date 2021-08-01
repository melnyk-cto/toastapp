import React, { useState } from "react";

// assets
import styles from "./Emotions.module.scss";
import loved from "../../../assets/images/icons/loved-it.svg";
import satisfied from "../../../assets/images/icons/satisfied.svg";
import confused from "../../../assets/images/icons/confused.svg";
import hate from "../../../assets/images/icons/hate-it.svg";
import disgust from "../../../assets/images/icons/disgust.svg";

const emotions = [
  {title: 'loved', icon: loved},
  {title: 'satisfied', icon: satisfied},
  {title: 'confused', icon: confused},
  {title: 'hate', icon: hate},
  {title: 'disgust', icon: disgust},
];
export const Emotions = () => {
  const [activeEmotion, setActiveEmotion] = useState(loved);
  const [showEmotion, setShowEmotion] = useState(false);

  const changeEmotion = (emotion) => {
    setActiveEmotion(emotion);
  };

  return (
    <div className={styles.emotions} onClick={() => setShowEmotion(!showEmotion)}>
      <img src={activeEmotion} alt='emotion' />
      {showEmotion && <ul>
        {emotions.map((emotion) => (
          <li>
            <img src={emotion.icon} alt={emotion.title} onClick={() => changeEmotion(emotion.icon)} />
          </li>
        ))}
      </ul>}
    </div>
  )
}