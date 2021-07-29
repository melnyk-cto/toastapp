import React, { useRef, useState } from "react";

// library
import { Link } from "react-router-dom";

// components
import { ListItems, NoNavigationLayout } from "../../../common";
import { routes } from "../../../App/routes";

// assets
import styles from './Search.module.scss';
import saly5 from "../../../../assets/images/saly-5.png";
import banner from "../../../../assets/images/search-banner.png";
import { ReactComponent as SearchSvg } from "../../../../assets/images/icons/search.svg";
import { ReactComponent as BackSvg } from "../../../../assets/images/icons/arrow-back.svg";
import cacao from "../../../../assets/images/cacao.png";
import chocolate from "../../../../assets/images/chocolate2.png";

export const Search = () => {
  const [items, setItems] = useState(null);

  let refSearch = useRef(null);

  const handleClickSearch = () => {
    if (refSearch.current.value.length === 0) {
      setItems(null)
    } else {
      setItems([
        {
          id: 0,
          name: 'Today’s Special',
          items: [
            {image: cacao, title: 'Cacao Acai Bowl', price: 299, link: '#'},
          ]
        },
        {
          id: 1,
          name: 'Beverages',
          items: [
            {image: chocolate, title: 'Chocolate Milk Shake', price: 299, link: '#'},
          ]
        }
      ])
    }
  }
  return (
    <NoNavigationLayout>
      <main className={styles.search}>
        <div className={styles.panel}>
          <Link to={routes.main}>
            <BackSvg />
          </Link>
          <label>
            <input ref={refSearch} type='text' placeholder='Search your food' />
            <div className={styles.searchIcon} onClick={() => handleClickSearch()}>
              <SearchSvg />
            </div>
          </label>
        </div>
        {items ? <section>
            <ListItems items={items} />
          </section>
          : <section>
            <div className={styles.card}>
              <div>
                <p>Checkout exclusive events going on in Hyderabad</p>
                <h5>Explore Events ></h5>
              </div>
              <img src={saly5} alt='saly5' />
            </div>
            <img className={styles.banner} src={banner} alt='' />
          </section>}
      </main>
    </NoNavigationLayout>

  )
}