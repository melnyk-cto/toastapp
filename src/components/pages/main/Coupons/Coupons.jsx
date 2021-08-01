import React from "react";

// components
import { NoNavigationLayout, TopPanel } from "../../../common";

// assets
import styles from './Coupons.module.scss';
import { ReactComponent as CheckSvg } from "../../../../assets/images/icons/check.svg";
import { routes } from "../../../App/routes";

const coupons = [
  {
    title: 'Get flat 20% off',
    description: 'Prism Hyderabad, Old Mumbai Hwy, Financial District, Gowlidoddy, 500075',
    code: 'super20',
    applied: true
  },
  {
    title: 'Get flat 20% off',
    description: 'Use paytm and get a flat upto 399 cashback on your order. Terms & conditions apply.',
    code: 'super20',
    applied: false
  },
  {
    title: 'Get flat 20% off',
    description: 'Use paytm and get a flat upto 399 cashback on your order. Terms & conditions apply.',
    code: 'super20',
    applied: false
  },
]
export const Coupons = () => {

  return (
    <NoNavigationLayout>
      <main className={styles.coupons}>
        <TopPanel title='Coupons' noBorder noWarning route={routes.checkout} />
        {coupons.map(coupon => (
          <div className={styles.coupon}>
            <h2>{coupon.title}</h2>
            <p>{coupon.description}</p>
            <hr />
            <div className={styles.info}>
              {coupon.code}
              <button type='button' className={`btn btn-primary ${coupon.applied ? '' : styles.applied}`}>
                {coupon.applied ? <>APPLIED <CheckSvg /></> : 'APPLY'}
              </button>
            </div>
          </div>
        ))}
      </main>
    </NoNavigationLayout>
  )
}