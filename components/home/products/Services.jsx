import { FaTruckMonster, FaTshirt } from 'react-icons/fa';
import { GiFlatHammer, GiLaserBlast } from 'react-icons/gi';
import { GoFlame } from 'react-icons/go';
import { MdBuild } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import styles from './gallery.module.css';

export default function Services() {
  const servicesGallery = [
    { name: 'General Fabrication', icon: <GiFlatHammer /> },
    { name: 'Welding Repair', icon: <GoFlame /> },
    { name: 'Built from Spec Parts', icon: <MdBuild /> },
    { name: 'Custom Signs/Shirts', icon: <FaTshirt /> },
    { name: 'Plasma Table Services', icon: <GiLaserBlast /> },
    { name: 'Hitch Signs', icon: <FaTruckMonster /> },
  ];

  const styling = {
    marginRight: '.5rem',
  };

  return (
    <>
      <h2 className={styles.sectionHeader}>Our Services/Products</h2>
      <div className={styles.scrollingGallery}>
        {servicesGallery.map((e) => {
          return (
            <div key={uuidv4()} className={styles.serviceWrap}>
              <div style={styling}>
                <span>{e.name}</span>
              </div>
              {e.icon}
            </div>
          );
        })}
      </div>
    </>
  );
}
