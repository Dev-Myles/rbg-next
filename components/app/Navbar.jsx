import Image from 'next/image';
import { IconContext } from 'react-icons';
import { BsInstagram } from 'react-icons/bs';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbarWrap}>
      <div className={styles.imageWrap}>
        <Image
          alt="Rock Bottom Guild Logo"
          src="/images/RBG-logo.svg"
          height={1}
          width={2}
          layout="responsive"
        />
      </div>
      <div className={styles.linkWrap}>
        <span>Rock Bottom Guild</span>
      </div>
      <a href="https://www.instagram.com/rock_bottom_guild/">
        <IconContext.Provider value={{ size: '1.33em' }}>
          <BsInstagram className="react-icons" />
        </IconContext.Provider>
      </a>
    </div>
  );
}
