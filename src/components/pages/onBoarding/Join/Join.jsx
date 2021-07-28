// core
import React, { useEffect, useReducer, useState } from 'react';

// components
import { routes } from "../../../App/routes";
import { NoNavigationLayout } from "../../../common";

// assets
import styles from '../Onboarding.module.scss';
import saly4 from '../../../../assets/images/onboarding/saly-4.png';
import alert from '../../../../assets/images/onboarding/alert-circle.svg';

const digits = [0, 1, 2, 3];
export const Join = () => {
  const [activeButton, setActiveButton] = useState(false);

  const handleChangeDigits = (evt, digit) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({[name]: newValue});

    // go to next input field
    if (document.getElementsByName(`digit${digit + 1}`)[0]) {
      document.getElementsByName(`digit${digit + 1}`)[0].focus()
    }
  };

  const onHandleFocus = (evt) => {
    evt.target.value = '';
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({[name]: newValue});
  }

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      digit0: "",
      digit1: "",
      digit2: "",
      digit3: "",
    }
  );

  useEffect(() => {
    if (formInput.digit0 !== '' && formInput.digit1 !== '' && formInput.digit2 !== '' && formInput.digit3 !== '') {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [formInput]);


  useEffect(() => {
    document.body.addEventListener('keyup', function (e) {
      if (e.keyCode === 8) {
        // go to next input field
        if (e.target.name) {
          if (document.getElementsByName(`digit${Number(e.target.name.substr(e.target.name.length - 1) - 1)}`)[0]) {
            document.getElementsByName(`digit${Number(e.target.name.substr(e.target.name.length - 1) - 1)}`)[0].focus()
          }
        }
      }
    });
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = routes.main;
  }

  return (
    <NoNavigationLayout>
      <main className={`${styles.register} ${styles.join}`}>
        <section>
          <div className={styles.inner}>
            <img className={styles.saly} src={saly4} alt='saly4' />
            <div className={styles.panel}>
              <h2>
                Join your friends on this table
              </h2>
              <p>Ask for the 4 digit code displayed on your friend's screen</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.digit}>
                  {digits.map((digit) => (
                    <label key={digit} className='digit'>
                      <input type="text"
                             maxLength={1}
                             name={`digit${digit}`}
                             value={formInput[`digit${digit}`]}
                             onFocus={(e) => onHandleFocus(e)}
                             onChange={(e) => handleChangeDigits(e, digit)} />
                    </label>
                  ))}
                  <div className={styles.alert}>
                    <img src={alert} alt='alert' />
                  </div>
                </div>
                <button type='submit'
                        className={`${activeButton ? styles.active : ''} btn`}>
                  JOIN TABLE
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </NoNavigationLayout>
  );
};
