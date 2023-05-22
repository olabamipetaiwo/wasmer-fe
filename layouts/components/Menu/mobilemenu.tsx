import React, { useState } from "react";
import styles from "./menu.module.scss";
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
import RunIcon from "@/assets/svg/runtime.svg";
import RegistryIcon from "@/assets/svg/publish.svg";
import EdgeIcon from "@/assets/svg/edge.svg";
import CLIcon from "@/assets/svg/cli.svg";
import DocsIcon from "@/assets/svg/docs.svg";

import SearchIcon from "@/assets/svg/search.svg";

interface IProps {
  isOpened: boolean;
}

const MobileMenu = ({ isOpened }: IProps) => {
  const mobileLinks = [
    {
      title: "Products",
      link: "/Products",
    },
  ];

  const variants = {
    open: { opacity: 1, scale: 1, y: 0, x: 0 },
    closed: { opacity: 0, scale: 0.5, y: "50%", x: "-100%" },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.5, y: -50 }}
      animate={isOpened ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={` absolute top-44 z-20 w-full  `}
    >
      <section
        className={`${styles.mobile__container} border p-10 flex flex-col`}
      >
        <div className={`flex items-center ${styles.nav__search}`}>
          <SearchIcon />
          <input type="text" placeholder="Search packages, users or apps" />
        </div>

        <ul className={`mt-5 ${styles.developer__links}`}>
          {mobileLinks.map((_link) => {
            return (
              <li key={_link.title}>
                <Link href="/">{_link.title}</Link>
              </li>
            );
          })}
        </ul>

        <section className="flex items-center border border-t border-b border-black border-y py-8 my-8">
          <CLIcon className="mr-2" />
          <h2 className="developer-title text-black">CLI</h2>
        </section>
        <section className="flex flex-col align-start">
          <p className="developer-headline text-left mb-4">Tools</p>
          <h6 className="developer-title text-left">
            Visual Studio Code Extension
          </h6>
        </section>
      </section>
    </motion.nav>
  );
};

export default MobileMenu;
