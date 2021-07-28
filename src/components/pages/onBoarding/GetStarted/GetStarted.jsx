// core
import React, { useReducer, useState } from 'react';

// components
import { routes } from "../../../App/routes";
import { NoNavigationLayout } from "../../../common";

// assets
import styles from '../Onboarding.module.scss';
import saly3 from '../../../../assets/images/onboarding/saly-3.png';

export const GetStarted = () => {
  const [activeButton, setActiveButton] = useState(false);

  const handleChangePhone = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({[name]: newValue});
    if (evt.target.value.length > 0) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput, 'formInput');
    window.location = routes.join;
  }

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: "",
    }
  );

  return (
    <NoNavigationLayout>
      <main className={`${styles.register} ${styles.getStarted}`}>
        <section>
          <div className={styles.inner}>
            <img className={styles.saly} src={saly3} alt='saly3' />
            <div className={styles.panel}>
              <h2>Let’s get started</h2>
              <p>What should we call you?</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                  <input type='text'
                         required
                         placeholder='Your name'
                         name='name'
                         value={formInput.name}
                         onChange={handleChangePhone} />
                </label>
                <button
                  type='submit'
                  className={`${activeButton ? styles.active : ''} btn`}>
                  Start ordering
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </NoNavigationLayout>
  );
};
