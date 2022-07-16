import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import styles from './gallery.module.css';

export default function Gallery() {
  const shirtSrc = [
    {
      title: 'Blue Collar Billy - front',
      src: '/images/gallerypics/shirts/1f.png',
    },
    {
      title: 'Blue Collar Billy - back',
      src: '/images/gallerypics/shirts/1b.png',
    },
    {
      title: 'Good Times... - front',
      src: '/images/gallerypics/shirts/2f.png',
    },
    { title: 'Good Times... - back', src: '/images/gallerypics/shirts/2b.png' },
    { title: 'Gun > Run - front', src: '/images/gallerypics/shirts/3f.png' },
    { title: 'Gun > Run - back', src: '/images/gallerypics/shirts/3b.png' },
    { title: 'AKA Patriot - front', src: '/images/gallerypics/shirts/4f.png' },
    { title: 'AKA Patriot - back', src: '/images/gallerypics/shirts/4b.png' },
    { title: 'Double Tap - front', src: '/images/gallerypics/shirts/5f.png' },
  ];
  const [isPic, setPic] = useState(-1);

  function backToGallery() {
    return setPic(-1);
  }

  function examinePic(index) {
    return setPic(index);
  }

  function forward() {
    if (isPic < shirtSrc.length - 1) {
      setPic(isPic + 1);
    } else {
      setPic(0);
    }
  }

  function backwards() {
    if (isPic > 0) {
      setPic(isPic - 1);
    } else {
      setPic(shirtSrc.length - 1);
    }
  }

  return (
    <>
      <h2 className={styles.sectionHeader}>Custom Shirts</h2>
      <h3 style={{ textAlign: 'center' }}>Price: $15 + shipping</h3>
      <div className={styles.shirtGallery}>
        {isPic == -1 ? null : (
          <div className={styles.exit} onClick={() => backToGallery()}>
            <AiOutlineClose />
          </div>
        )}
        {isPic == -1 ? (
          shirtSrc.map((e, i) => {
            return (
              <div
                onClick={() => {
                  examinePic(i);
                }}
                key={uuidv4()}
                className={styles.shirtWrap}
              >
                <Image
                  src={e.src}
                  alt="Shirt gallery picture"
                  height={1.5}
                  width={1}
                  layout="responsive"
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
                    src={shirtSrc[isPic].src}
                    alt="Shirt gallery picture"
                    height={1.5}
                    width={1}
                    layout="responsive"
                  />
                </div>
                <span>
                  {isPic + 1} / {shirtSrc.length}
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
    </>
  );
}
