/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import styles from "./registry.module.scss";
import CTA from "@/components/CTA";
import Vercel from "@/components/Vercel";
import Badge from "@/components/Badge";
import LineIcon from "@/assets/svg/line.svg";
import PublishIcon from "@/assets/svg/publish.svg";
import RepoCard from "@/components/Card/Repo";

const Registry = (): ReactElement => {
  const benefit = {
    title: "",
    description: "All languages, fully containerized & collaborative",
    link: "/benefit",
    info: "See more info about Registry",
  };
  return (
    <section className={`{ ${styles.registry} `}>
      <section
        className={`flex flex-col items-center justify-center ${styles.registry__container}`}
      >
        <LineIcon className="mb-2" />
        <Badge title="Registry" Icon={<PublishIcon />} />
        <h2 className="headline my-6">Better together</h2>
        <p className="content">
          Packages are limited by their languages no more. Collaborate across
          stacks, leverage all and contribute your own.{" "}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 my-10">
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </section>
      <section
        className={`flex flex-col items-center justify-center ${styles.registry__container}`}
      >
        <section className={`flex flex-col`}>
          <section className="py-20 w-full mb-4">
            <CTA data={benefit} variant="small" />
          </section>
          <Vercel />
        </section>
      </section>
    </section>
  );
};

export default Registry;
