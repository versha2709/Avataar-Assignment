// Header.js

import React, { useState } from 'react';
import styles from './Header.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreActive, setMoreActive] = useState(false);

  const menuToggler = () => setMenuOpen((p) => !p);
  const toggleMoreDropdown = () => setMoreActive((prev) => !prev);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>Avataar</span>
        </div>
        <div>
          <nav className={`${styles.nav} ${menuOpen ? styles['nav--open'] : ''}`}>
            <a className={styles.nav__item} href={'/'}>
              HOME
            </a>
            <a className={styles.nav__item} href={'/'}>
              ELECTRONICS
            </a>
            <a className={styles.nav__item} href={"/"}>
                            BOOKS
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            MUSIC
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            MOVIES
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            CLOTHING
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            GAMES
                        </a>
                        <div className={`${styles.nav__item} ${styles.more} ${moreActive ? 'active' : ''}`} onClick={toggleMoreDropdown}>
                            MORE
                            <div className={`${styles.dropdown}`}>
                                <a className={`${styles.nav__item} ${styles.dropdown__item}`} href={"/"}>
                                    FURNITURE
                                </a>
                                <a className={`${styles.nav__item} ${styles.dropdown__item}`} href={"/"}>
                                    ELECTRONICS
                                </a>
                                <a className={`${styles.nav__item} ${styles.dropdown__item}`} href={"/"}>
                                    TRAVEL
                                </a>
                                <a className={`${styles.nav__item} ${styles.dropdown__item}`} href={"/"}>
                                    BOTANICAL CATEGORY NAME
                                </a>

              </div>
            </div>
            <div className={styles.nav__searchbar}>
              
              <input type="text" placeholder="Search Something" />
              <button>Search</button>
            </div>

            <div className={styles.nav__button__container}></div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}></div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
