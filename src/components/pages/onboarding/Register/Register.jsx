// core
import React, { useState } from 'react';

// assets
import styles from './Register.module.scss';
import saly from '../../../../assets/images/onboarding/saly.png';
import numbers from '../../../../assets/images/onboarding/numbers.svg';

const phoneCode = ['+093', '+380'];
export const Register = () => {
  const [activeButton, setActiveButton] = useState(false);

  const handleChangePhone = (e) => {
    console.log(e.target.value.length, 'e.target.value.length')
    if (e.target.value.length === 10) {
      setActiveButton(true);
    } else  {
      setActiveButton(false);
    }
  };

  return (
    <main className={styles.register}>
      <section>
        <div className={styles.inner}>
          <img className={styles.saly} src={saly} alt='saly' />
          <img className={styles.saly} src={numbers} alt='numbers' />
          <div className={styles.panel}>
            <h2>Register yourself</h2>
            <p>Enter your 10 digit phone number</p>
            <form>
              <label className='phone'>
                <select name='' id=''>
                  {phoneCode.map((code) => (
                    <option key={code} value=''>{code}</option>
                  ))}
                </select>
                <input type='number' placeholder='Phone number' onChange={(e) => handleChangePhone(e)} />
              </label>
              <p className={styles.sent}> An OTP will be sent on this number.</p>
              <button type='button' className={`${activeButton ? styles.active : ''} btn`}>
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
