import Link from 'next/link';
import { IconContext } from 'react-icons';
import { BsInstagram } from 'react-icons/bs';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerWrap}>
      <Link href="/policy">
        <a>Policy</a>
      </Link>
      <a href="https://www.instagram.com/rock_bottom_guild/">
        <IconContext.Provider value={{ size: '1.33em' }}>
          <BsInstagram className="react-icons" />
        </IconContext.Provider>
      </a>
    </div>
  );
}
