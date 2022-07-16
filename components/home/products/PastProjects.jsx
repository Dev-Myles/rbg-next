import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import styles from './pastprojects.module.css';

export default function PastProjects() {
  const [isPic, setPic] = useState(-1);

  const pictureSrc = [
    '/images/gallerypics/1.png',
    '/images/gallerypics/2.png',
    '/images/gallerypics/3.png',
    '/images/gallerypics/4.png',
    '/images/gallerypics/5.png',
    '/images/gallerypics/6.png',
    '/images/gallerypics/7.png',
    '/images/gallerypics/8.png',
    '/images/gallerypics/9.png',
    '/images/gallerypics/10.png',
    '/images/gallerypics/11.png',
    '/images/gallerypics/12.png',
    '/images/gallerypics/13.png',
    '/images/gallerypics/14.png',
    '/images/gallerypics/15.png',
    '/images/gallerypics/16.png',
    '/images/gallerypics/17.png',
  ];

  function backToGallery() {
    return setPic(-1);
  }

  function examinePic(index) {
    return setPic(index);
  }

  function forward() {
    if (isPic < pictureSrc.length - 1) {
      setPic(isPic + 1);
    } else {
      setPic(0);
    }
  }

  function backwards() {
    if (isPic > 0) {
      setPic(isPic - 1);
    } else {
      setPic(pictureSrc.length - 1);
    }
  }

  return (
    <>
      <h2 className={styles.sectionHeader}>Past Projects</h2>
      <div className={styles.pastProjectsGallery}>
        {isPic == -1 ? null : (
          <div className={styles.exit} onClick={() => backToGallery()}>
            <AiOutlineClose />
          </div>
        )}
        {isPic == -1 ? (
          pictureSrc.map((e, i) => {
            return (
              <div
                onClick={() => examinePic(i)}
                key={uuidv4()}
                className={styles.imageWrap}
              >
                <Image
                  src={e}
                  alt="Picture in past project gallery"
                  height={1}
                  width={1}
                  layout="responsive"
                  sizes="10vw"
                />
              </div>
            );
          })
        ) : (
          <>
            <div className={styles.imageButtonWrap}>
              <button
                onClick={() => backwards()}
                className={styles.galleryButtons}
              >
                <BsChevronLeft />
              </button>
              <div className={styles.shirtWrapZoomed}>
                <div key={uuidv4()}>
                  <Image
                    key={uuidv4()}
                    src={pictureSrc[isPic]}
                    alt="Project gallery picture"
                    height={1}
                    width={1}
                    layout="responsive"
                  />
                </div>
                <span>
                  {isPic + 1} / {pictureSrc.length}
                </span>
              </div>
              <button
                onClick={() => forward()}
                className={styles.galleryButtons}
              >
                <BsChevronRight />
              </button>
            </div>
          </>
        )}
      </div>
      <h3 style={{ textAlign: 'center' }}>Check out more on our Instagram!</h3>
    </>
  );
}
