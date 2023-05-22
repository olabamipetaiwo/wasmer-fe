import React, { useState } from "react";
import styles from "./menu.module.scss";
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
import RunIcon from "@/assets/svg/runtime.svg";
import RegistryIcon from "@/assets/svg/publish.svg";
import EdgeIcon from "@/assets/svg/edge.svg";
import CLIcon from "@/assets/svg/cli.svg";
import DocsIcon from "@/assets/svg/docs.svg";

interface IProps {
  isOpened: boolean;
}

const MobileMenu = ({ isOpened }: IProps) => {
  return (
    <motion.nav className={` absolute top-44 z-20 w-full  `}>
      <section className={`${styles.mobile__container} border p-10 flex`}>
        <h2>this is mobilemenu</h2>
      </section>
    </motion.nav>
  );
};

export default MobileMenu;
