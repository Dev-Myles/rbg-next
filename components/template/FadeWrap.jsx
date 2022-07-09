import styles from './fadewrap.module.css';

export default function FadeWrap({ children }) {
  return <div className={styles.fadeWrap}>{children}</div>;
}
