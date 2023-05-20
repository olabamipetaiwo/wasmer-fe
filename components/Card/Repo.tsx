import React, { ReactElement } from "react";
import styles from "./card.module.scss";
import PublishIcon from "@/assets/svg/publish.svg";
import SlashIcon from "@/assets/svg/slash.svg";
import ArchiveIcon from "@/assets/svg/archive.svg";
import HeartIcon from "@/assets/svg/heart.svg";
import DownloadIcon from "@/assets/svg/download.svg";

const RepoCard = (): ReactElement => {
  return (
    <section className={`${styles.repo__container} `}>
      <div className={`flex ${styles.repo__header} `}>
        <PublishIcon className="mr-6" />
        <h2 className="flex items-center">
          sqlite &nbsp; <SlashIcon className={`${styles.repo__separator} `} />{" "}
          &nbsp; sqlite{" "}
        </h2>
      </div>
      <p className={` ${styles.repo__description} `}>
        SpiderMonkey is Mozilla’s JavaScript and WebAssembly Engine, used in
        Firefox, Servo and various other projects.
      </p>
      <div className={`${styles.repo__cta}`}>
        <ArchiveIcon className="mr-6" />
        <SlashIcon className="mr-6" />
        <div className={`${styles.repo__cta__item}`}>
          <HeartIcon />
          <p>55,674</p>
        </div>
        <div className={`${styles.repo__cta__item}`}>
          <DownloadIcon />
          <p>574</p>
        </div>
      </div>
    </section>
  );
};

export default RepoCard;
