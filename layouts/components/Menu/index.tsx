import React, { ReactElement, useState } from "react";
import styles from "./menu.module.scss";
import LogoIcon from "@/assets/svg/logo.svg";
import SearchIcon from "@/assets/svg/search.svg";
import MenuBar from "@/layouts/components/Menu/menu";

const Menu = (): ReactElement => {
  return (
    <>
      <nav
        className={`flex items-center justify-between ${styles.nav__container}`}
      >
        <div className="flex items-center">
          <LogoIcon />
          <div className={`flex items-center ${styles.nav__search}`}>
            <SearchIcon />
            <input type="text" placeholder="Search packages, users or apps" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="dropdownBackground">
            <span className="arrow"></span>
          </div>
          <MenuBar />
          <button className={`${styles.nav__auth__btn}`}> Sign up</button>
        </div>
      </nav>
    </>
  );
};

export default Menu;
