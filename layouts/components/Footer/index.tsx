import React, { ReactElement } from "react";
import { footerLinks } from "@/mock/footer";
import styles from "./footer.module.scss";
import Link from "next/link";
import LogoIcon from "@/assets/svg/logo.svg";
import LinkedinIcon from "@/assets/svg/linkedin.svg";
import TwitterIcon from "@/assets/svg/twitter.svg";
import FBIcon from "@/assets/svg/facebook.svg";
import YTIcon from "@/assets/svg/youtube.svg";
import CTA from "@/components/CTA";
import Vercel from "@/components/Vercel";

interface ILink {
  title: string;
  link: string;
}

const Footer = (): ReactElement => {
  const get_started = {
    title: "Get Started",
    description:
      "Join the vibrant Wasmer community. Create your fist package, run it from the shell and deploy it to the Edge",
    link: "/get-started",
  };

  return (
    <section
      className={`flex flex-col justify-between ${styles.footer__container}`}
    >
      <section className="flex flex-col justify-center items-center mb-20">
        <p className={`${styles.footer__title}`}>We are trusted by the best</p>
        <Vercel />
      </section>
      <CTA data={get_started} variant="large" />
      <footer className={`flex flex-col justify-between ${styles.footer} `}>
        <section className="grid grid-cols-1 md:grid-cols-2 py-10 gap-y-16 ">
          <div className="flex flex-col items-start  ">
            <LogoIcon className="mb-10" />
            <p className="w-full md:w-80 text-left mb-6 opacity-70">
              Making software universally accessible
            </p>
            <ul
              className={`flex items-center opacity-20 ${styles.footer__social__links}`}
            >
              <li>
                <Link href="#">
                  <LinkedinIcon />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <TwitterIcon />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FBIcon />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <YTIcon />
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8">
            <div
              className={`flex flex-col items-start ${styles.footer__links}`}
            >
              <h4>Explore</h4>
              {footerLinks.explore.map((_link: ILink) => {
                return (
                  <Link
                    href={_link.link}
                    key={_link.title}
                    className={`font-normal text-[#0F0518]`}
                  >
                    {_link.title}
                  </Link>
                );
              })}
            </div>
            <div
              className={`flex flex-col items-start ${styles.footer__links}`}
            >
              <h4>Products</h4>
              {footerLinks.explore.map((_link: ILink) => {
                return (
                  <Link
                    href={_link.link}
                    key={_link.title}
                    className={`font-semibold`}
                  >
                    {_link.title}
                  </Link>
                );
              })}
            </div>
            <div
              className={`flex flex-col items-start ${styles.footer__links}`}
            >
              <h4>Developers</h4>
              {footerLinks.explore.map((_link: ILink) => {
                return (
                  <Link
                    href={_link.link}
                    key={_link.title}
                    className={`font-semibold`}
                  >
                    {_link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <ul className={`flex items-center ${styles.footer__base}`}>
          {footerLinks.footer.map((_link: ILink) => {
            return <li key={_link.title}>{_link.title}</li>;
          })}
        </ul>
      </footer>
    </section>
  );
};

export default Footer;

{
  /* <img src="/images/logo.svg" alt="logo" /> */
}
