/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import styles from "./features.module.scss";
import Badge from "@/components/Badge";
import RunIcon from "@/assets/svg/runtime.svg";
import PublishIcon from "@/assets/svg/publish.svg";
import DeployIcon from "@/assets/svg/deploy.svg";

const AppFeatures = (): ReactElement => {
  return (
    <section
      className={`flex flex-col items-center justify-center  w-full ${styles.features__container}`}
    >
      <p className={`${styles.feature__item}`}>
        Create apps that &nbsp;
        <Badge title="Run" Icon={<RunIcon />} link="/run" /> &nbsp;
        everywhere.
      </p>

      <p className={`${styles.feature__item}`}>
        <Badge title="Publish" Icon={<PublishIcon />} /> &nbsp; everywhere and share
        with the community
      </p>

      <p className={`${styles.feature__item}`}>
        and &nbsp;
        <Badge title="Deploy" Icon={<DeployIcon />} /> &nbsp; to the
        edge, globally.
      </p>
    </section>
  );
};

export default AppFeatures;
