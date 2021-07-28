// core
import React, { useEffect, useReducer, useState } from 'react';

// components
import { routes } from "../../../App/routes";
import { NoNavigationLayout } from "../../../common";

// assets
import styles from '../Onboarding.module.scss';
import saly2 from '../../../../assets/images/onboarding/saly-2.png';
import arrow from '../../../../assets/images/onboarding/arrow-left.svg';

const digits = [0, 1, 2, 3, 4, 5];
let time = 59;
export const Verify = () => {
  const [activeButton, setActiveButton] = useState(false);
  const [timer, setTimer] = useState(time);

  const handleChangeDigits = (evt, digit) => {
    if (evt.target.value.length <= 1) {
      const name = evt.target.name;
      const newValue = evt.target.value;
      setFormInput({[name]: newValue});

      // go to next input field
      if (document.getElementsByName(`digit${digit + 1}`)[0]) {
        document.getElementsByName(`digit${digit + 1}`)[0].focus()
      }
    }
  };

  const onHandleFocus = (evt) => {
    evt.target.value = '';
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({[name]: newValue});
  }

  useEffect(() => {
    // timer
    const intervalId = setInterval(() => {
      if (time === -1) {
        clearInterval(intervalId);
      } else {
        setTimer(time--)
      }
    }, 1000);
  }, []);


  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      digit0: "",
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
      digit5: "",
    }
  );

  useEffect(() => {
    if (formInput.digit0 !== '' && formInput.digit1 !== '' && formInput.digit2 !== '' && formInput.digit3 !== '' && formInput.digit4 !== '' && formInput.digit5 !== '') {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [formInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = routes.getStarted;
  }

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

  return (
    <NoNavigationLayout>
      <main className={`${styles.register} ${styles.verify}`}>
        <section>
          <div className={styles.inner}>
            <img className={styles.saly} src={saly2} alt='saly2' />
            <div className={styles.panel}>
              <h2>
                <a href={routes.register}>
                  <img src={arrow} alt='arrow' />
                </a>
                Enter Verification Code</h2>
              <p>Enter the 6 digit code sent to your moble number</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.digit}>
                  {digits.map((digit) => (
                    <label key={digit} className='digit'>
                      <input type="number"
                             maxLength={1}
                             name={`digit${digit}`}
                             value={formInput[`digit${digit}`]}
                             onFocus={(e) => onHandleFocus(e)}
                             onChange={(e) => handleChangeDigits(e, digit)} />
                    </label>
                  ))}
                </div>
                <p className={styles.sent}>
                  Resend OTP?
                  <span className={styles.timer}>00:{timer}</span>
                </p>
                <button type='submit'
                        className={`${activeButton ? styles.active : ''} btn`}>
                  VERIFY OTP
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </NoNavigationLayout>
  );
};
