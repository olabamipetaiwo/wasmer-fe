/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import styles from "./header.module.scss";
// import LineIcon from "@/assets/svg/line.svg";
import ArrowIcon from "@/assets/svg/arrow.svg";
import StarIcon from "@/assets/svg/star.svg";
import SlashIcon from "@/assets/svg/slash.svg";
import GithubIcon from "@/assets/svg/github.svg";

const Header = (): ReactElement => {
  return (
    <section
      className={`flex flex-col items-center justify-center ${styles.header}`}
    >
      <h1>Run, Publish & Deploy any code – anywhere</h1>
      <section className={`${styles.hero}`}></section>
      <p className="content mb-12 w-1/2">
        Serve sandboxed WebAssembly apps anywhere through a single runtime and
        do in days what others do in months.
      </p>
      <p className="bold-content text-grey-200 mb-6">
        Reach for the stars, we do too.
      </p>
      <div className={`${styles.header__stars}`}>
        <p className="bold-content text-grey-200 mr-3">15,000</p>
        <StarIcon />
        <SlashIcon className="mx-5" />
        <button className="flex items-center">
          <GithubIcon className="mr-2" />
          <ArrowIcon className="fill-black" />
        </button>
      </div>
    </section>
  );
};

export default Header;
