import React, { useState } from "react";
import styles from "./menu.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import RunIcon from "@/assets/svg/runtime.svg";
import RegistryIcon from "@/assets/svg/publish.svg";
import EdgeIcon from "@/assets/svg/edge.svg";
import CLIcon from "@/assets/svg/cli.svg";
import DocsIcon from "@/assets/svg/docs.svg";

const MenuBar = () => {
  return (
    <motion.ul className="border p-10 flex justify-center">
      <MenuItem text="Home" dropdown={true}>
        <ProducItem />
      </MenuItem>
      <MenuItem text="Developers" dropdown={true}>
        <DeveloperItem />
      </MenuItem>
      <MenuItem text="Packages" dropdown={false}></MenuItem>
      <MenuItem text="Blog" dropdown={false}></MenuItem>
    </motion.ul>
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

const MenuItem = ({ text, children, dropdown = false, ...props }: any) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.li
      className={`px-5 relative cursor-pointer ${styles.nav__item}`}
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <Link href="/" className="relative">
        {text}
      </Link>

      {isBeingHovered && dropdown && (
        <motion.div
          {...props}
          layoutId="menu"
          className={`absolute visible shadow-lg border-1 border-grey-200  bg-white -left-2/4 rounded-3xl ${styles.dropdown__container2}`}
          variants={MenuItemVariants}
          style={{ minWidth: 400 }}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      )}
    </motion.li>
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

const ProducItem = () => {
  return (
    <motion.div
      className="my-2 py-10 px-10 group cursor-pointer min-w-max"
      layout
      variants={SubItemVariants}
    >
      <div className={`flex items-center ${styles.product__item}`}>
        <figure className="flex items-center justify-center">
          <RunIcon />
        </figure>
        <div className="flex flex-col">
          <h6>Runtime</h6>
          <p>Run any code anywhere</p>
        </div>
      </div>
      <div className={`flex items-center ${styles.product__item}`}>
        <figure className="flex items-center justify-center">
          <RegistryIcon />
        </figure>
        <div className="flex flex-col">
          <h6>Registry</h6>
          <p>Create, publish, collaborate</p>
        </div>
      </div>
      <div className={`flex items-center ${styles.product__item}`}>
        <figure className="flex items-center justify-center">
          <EdgeIcon />
        </figure>
        <div className="flex flex-col">
          <h6>Edge</h6>
          <p>Deploy above the clouds</p>
        </div>
      </div>
    </motion.div>
  );
};

const DeveloperItem = () => {
  return (
    <motion.div
      className="my-2 group cursor-pointer min-w-max"
      layout
      variants={SubItemVariants}
    >
      <section className="flex flex-col py-10 px-10">
        <div className="flex items-center mb-8">
          <DocsIcon className="mr-2" />
          <h2 className="developer-title text-black text-left">
            Documentation
          </h2>
        </div>

        <section className="grid grid-cols-2">
          <section className="flex flex-col align-start">
            <p className="developer-headline text-left mb-4">Get started</p>
            <ul className={`${styles.developer__links}`}>
              <li>
                <Link href="/">Runtime</Link>
              </li>
            </ul>
          </section>
          <section className="flex flex-col align-start">
            <p className="developer-headline text-left mb-4">Guides</p>
            <ul className={`${styles.developer__links}`}>
              <li>
                <Link href="/">Run a package</Link>
              </li>
            </ul>
          </section>
        </section>

        <div className="flex items-center border border-t border-b border-black border-y py-8 my-8">
          <CLIcon className="mr-2" />
          <h2 className="developer-title text-black">CLI</h2>
        </div>

        <section className="flex flex-col align-start">
          <p className="developer-headline text-left mb-4">Tools</p>
          <h6 className="developer-title text-left">
            Visual Studio Code Extension
          </h6>
        </section>
      </section>
      <section className={`${styles.devloper__sdk}`}>
        <h2 className="mb-6">SDK’S</h2>
        <ul className="flex items-center">
          <li>Python </li>
          <li> Rust </li>
          <li> Go </li>
          <li> C </li>
          <li>Docker</li>
        </ul>
      </section>
    </motion.div>
  );
};

export default MenuBar;
