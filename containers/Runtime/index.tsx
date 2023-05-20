/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import styles from "./runtime.module.scss";
import CTA from "@/components/CTA";
import Vercel from "@/components/Vercel";
import Badge from "@/components/Badge";
import LineIcon from "@/assets/svg/line.svg";
import RunIcon from "@/assets/svg/runtime.svg";
import DockerIcon from "@/assets/svg/docker.svg";
import RustIcon from "@/assets/svg/rust.svg";
import CIcon from "@/assets/svg/c.svg";
import JSIcon from "@/assets/svg/js.svg";
import PythonIcon from "@/assets/svg/python.svg";
import GoIcon from "@/assets/svg/go.svg";

const Runtime = (): ReactElement => {
  const benefit = {
    title: "",
    description: "Truly universal, runs everywhere & fast as native",
    link: "/benefit",
    info: "See more info about Runtime",
  };
  return (
    <section className={`{ ${styles.runtime} `}>
      <section
        className={`flex flex-col items-center justify-center ${styles.runtime__container}`}
      >
        <LineIcon className="mb-2" />
        <Badge title="Runtime" Icon={<RunIcon />} />
        <h2 className="headline my-6">Run the world </h2>
        <p className="content">
          Using a binary for each platform and chip is the past. Rise above with
          lightweight containerized apps that simply run everywhere.
        </p>

        <section className={`flex flex-col`}>
          <section className={`flex flex-col mt-16 mb-8`}>
            <div
              className={`flex items-center justify-center mb-4 ${styles.runtime__languages}`}
            >
              <DockerIcon />
              <RustIcon />
              <CIcon />
              <JSIcon />
              <PythonIcon />
              <GoIcon />
            </div>
            <p className="bold-content text-grey-500">
              Supports almost every programming language
            </p>
          </section>

          <section className="py-20 w-full mb-4">
            <CTA data={benefit} variant="small" />
          </section>
          <Vercel />
        </section>
      </section>
    </section>
  );
};

export default Runtime;
