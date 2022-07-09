import Footer from './Footer';
import styles from './layout.module.css';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className={styles.layoutWrap}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
