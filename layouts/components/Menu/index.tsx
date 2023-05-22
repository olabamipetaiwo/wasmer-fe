import React, { ReactElement, useState } from "react";
import styles from "./menu.module.scss";
import LogoIcon from "@/assets/svg/logo.svg";
import SearchIcon from "@/assets/svg/search.svg";
import MenuIcon from "@/assets/svg/menu.svg";
import CloseIcon from "@/assets/svg/close.svg";
import MenuBar from "@/layouts/components/Menu/menu";
import MobileMenu from "@/layouts/components/Menu/mobilemenu";

const Menu = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`absolute z-10 w-full flex items-center justify-between  ${styles.nav__container}`}
      >
        <div className="flex items-center">
          <LogoIcon />
          <div className={`hidden md:flex items-center ${styles.nav__search}`}>
            <SearchIcon />
            <input type="text" placeholder="Search packages, users or apps" />
          </div>
        </div>
        <div className="flex items-center">
          <MenuBar />
          <button className={`${styles.nav__auth__btn}`}> Sign up</button>
          <button
            onClick={() => setOpen(!open)}
            className="flex md:hidden items-center justify-center ml-4"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {open && <MobileMenu isOpened={open} />}
    </>
  );
};

export default Menu;
