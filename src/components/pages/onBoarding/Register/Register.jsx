// core
import React, { useReducer, useState } from 'react';

// components
import { routes } from "../../../App/routes";
import { NoNavigationLayout } from "../../../common";

// assets
import styles from '../Onboarding.module.scss';
import saly from '../../../../assets/images/onboarding/saly-1.png';
import numbers from '../../../../assets/images/onboarding/numbers.svg';

const phoneCode = ['+91', '+38'];
export const Register = () => {
  const [activeButton, setActiveButton] = useState(false);

  const handleChangePhone = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({[name]: newValue});
    if (evt.target.value.length === 10) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput, 'formInput');
    window.location = routes.verify;
  }

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      phone: "",
    }
  );

  return (
    <NoNavigationLayout>
      <main className={styles.register}>
        <section>
          <div className={styles.inner}>
            <img className={styles.saly} src={saly} alt='saly' />
            <img className={styles.numbers} src={numbers} alt='numbers' />
            <div className={styles.panel}>
              <h2>Register yourself</h2>
              <p>Enter your 10 digit phone number</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <label className='phone'>
                  <select>
                    {phoneCode.map((code) => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                  <input type='number'
                         required
                         placeholder='Phone number'
                         name='phone'
                         value={formInput.phone}
                         onChange={handleChangePhone} />
                </label>
                <p className={styles.sent}>An OTP will be sent on this number.</p>
                <button type='submit'
                        className={`${activeButton ? styles.active : ''} btn`}>
                  Continue
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </NoNavigationLayout>
  );
};
