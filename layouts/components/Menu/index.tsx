import React, { ReactElement, useState } from "react";
import styles from "./menu.module.scss";
import LogoIcon from "@/assets/svg/logo.svg";
import SearchIcon from "@/assets/svg/search.svg";
import MenuIcon from "@/assets/svg/menu.svg";
import CloseIcon from "@/assets/svg/close.svg";
import MenuBar from "@/layouts/components/Menu/menu";
import MobileMenu from "@/layouts/components/Menu/mobilemenu";
import type { MotionProps, Variants } from "framer-motion";

// import { motion, useAnimate } from "framer-motion";



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
          <div className="dropdownBackground">
            <span className="arrow"></span>
          </div>
          <MenuBar />
          <button className={`${styles.nav__auth__btn}`}> Sign up</button>
          <button
            onClick={() => setOpen(!open)}
            className="flex md:hidden items-center justify-center ml-4"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* <MenuButton isOpen={open} onClick={() => setOpen(!open)} /> */}
        </div>
      </nav>
      {open && <MobileMenu isOpened={open} />}
    </>
  );
};

export default Menu;

// interface Props {
//   isOpen?: boolean;
//   color?: string;
//   strokeWidth?: string | number;
//   transition?: any;
//   lineProps?: any;
//   width?: any;
//   height?: any;
//   onClick: any;
// }

// const MenuButton = ({
//   isOpen = false,
//   width = 24,
//   height = 24,
//   strokeWidth = 1,
//   color = "#000",
//   transition = null,
//   lineProps = null,
//   ...props
// }: Props) => {
//   const variant = isOpen ? "opened" : "closed";
//   const top = {
//     closed: {
//       rotate: 0,
//       translateY: 0,
//     },
//     opened: {
//       rotate: 45,
//       translateY: 2,
//     },
//   };
//   const center = {
//     closed: {
//       opacity: 1,
//     },
//     opened: {
//       opacity: 0,
//     },
//   };
//   const bottom = {
//     closed: {
//       rotate: 0,
//       translateY: 0,
//     },
//     opened: {
//       rotate: -45,
//       translateY: -2,
//     },
//   };
//   lineProps = {
//     stroke: color,
//     strokeWidth: strokeWidth as number,
//     vectorEffect: "non-scaling-stroke",
//     initial: "closed",
//     animate: variant,
//     transition,
//     ...lineProps,
//   };
//   const unitHeight = 4;
//   const unitWidth = (unitHeight * (width as number)) / (height as number);

//   return (
//     <motion.svg
//       viewBox={`0 0 ${unitWidth} ${unitHeight}`}
//       overflow="visible"
//       preserveAspectRatio="none"
//       width={width}
//       height={height}
//       {...props}
//     >
//       <motion.line
//         x1="0"
//         x2={unitWidth}
//         y1="0"
//         y2="0"
//         variants={top}
//         {...lineProps}
//       />
//       <motion.line
//         x1="0"
//         x2={unitWidth}
//         y1="2"
//         y2="2"
//         variants={center}
//         {...lineProps}
//       />
//       <motion.line
//         x1="0"
//         x2={unitWidth}
//         y1="4"
//         y2="4"
//         variants={bottom}
//         {...lineProps}
//       />
//     </motion.svg>
//   );
// };
