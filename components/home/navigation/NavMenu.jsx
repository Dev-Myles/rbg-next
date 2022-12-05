import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from '../about/Banner';
import Contact from '../contact/Contact';
import Products from '../products/Products';
import styles from './navmenu.module.css';

export default function NavMenu() {
  const [isChannel, setChannel] = useState(0);

  const key = uuidv4();

  const channels = [
    <Banner key={key} />,
    <Products key={key} />,
    <Contact key={key} />,
  ];

  const styling = {
    borderBottom: '2px solid var(--rbg-green)',
  };

  return (
    <div className={styles.navWrap}>
      <div className={styles.navigation}>
        <div
          onClick={() => setChannel(0)}
          style={isChannel == 0 ? styling : null}
          className={styles.navigationLinks}
        >
          Home
        </div>
        <div
          onClick={() => setChannel(1)}
          style={isChannel == 1 ? styling : null}
          className={styles.navigationLinks}
        >
          Products
        </div>
        <div
          onClick={() => setChannel(2)}
          style={isChannel == 2 ? styling : null}
          className={styles.navigationLinks}
        >
          Contact
        </div>
      </div>
      {channels[isChannel]}
    </div>
  );
}
