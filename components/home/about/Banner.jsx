import Image from 'next/image';
import FadeWrap from '../../template/FadeWrap';
import styles from './banner.module.css';

export default function Banner() {
  return (
    <FadeWrap>
      <div className={styles.aboutWrap}>
        <div className={styles.banner}>
          <div className={styles.imageWrap}>
            <Image
              alt="Rock Bottom Guild Banner"
              src="/images/rbg-name.svg"
              height={1}
              width={1}
              layout="responsive"
              sizes="50vw"
            />
          </div>
          <div className={styles.imageWrap} id={styles.welderPic}>
            <Image
              alt="Rock Bottom Guild Banner"
              src="/images/welder-pic.svg"
              height={1}
              width={1.5}
              layout="responsive"
              sizes="50vw"
            />
          </div>
        </div>

        <div className={styles.bottomWrap}>
          <div>
            <p className={styles.aboutP}>
              Rock Bottom Guild is based out of Iowa and specializes in hitch
              signs and custom metal fabrication. We take inspiration from works
              by West Coast Customs, Orange County Choppers, and our blue collar
              grit to create one of a kind, never massed produced pieces.
            </p>
          </div>
          <div className={styles.imageWrap} id={styles.iowaPic}>
            <Image
              alt="Welder pic"
              src="/images/iowa.svg"
              height={1}
              width={1.5}
              layout="responsive"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </FadeWrap>
  );
}
