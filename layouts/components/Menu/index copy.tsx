import React, { ReactElement, useEffect, useState } from "react";
import styles from "./menu.module.scss";
import Link from "next/link";
import LogoIcon from "@/assets/svg/logo.svg";
import SearchIcon from "@/assets/svg/search.svg";
import { motion } from "framer-motion";
import Hashicon from "@/assets/svg/search.svg";

const NiceMenu = () => {
  return (
    <motion.div className="flex justify-center">
      <MenuItem text={"Home"}>
        <SubItem title="Product" text="A SaaS for e-commerce" />
      </MenuItem>
      <MenuItem text={"About us"} style={{ minWidth: 400 }}>
        <SubItem title="The Team" text="Get to know us better" />
      </MenuItem>
    </motion.div>
  );
};

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const MenuItem = ({ text, children, ...props }: any) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="px-5 relative cursor-pointer"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <span className="relative">{text}</span>
      {isBeingHovered && (
        <div className="min-w-max ">
          <motion.div
            {...props}
            layoutId="menu"
            className="absolute border border-1 shadow-lg py-10 px-10 bg-white rounded-box -left-2/4"
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const SubItemVariants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const SubItem = ({ title, text }: any) => {
  return (
    <motion.div
      className="my-2 group cursor-pointer min-w-max"
      layout
      variants={SubItemVariants}
    >
      <div className="flex items-center gap-4">
        <div className="">
          <p className="font-bold text-gray-800 group-hover:text-blue-900 text-md">
            {title}
          </p>
          <span className="font-bold text-gray-400 group-hover:text-blue-400 text-sm">
            {text}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

interface ILink {
  title: string;
  link: string;
}

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
          <NiceMenu />

          <ul className={`flex items-center ${styles.nav__items}`}>
            <li>
              <Link href="/ttt">Packages</Link>
            </li>
            <li>
              <Link href="/ttt">Blog</Link>
            </li>
          </ul>

          <button className={`${styles.nav__auth__btn}`}> Sign up</button>
        </div>
      </nav>
    </>
  );
};

export default Menu;
