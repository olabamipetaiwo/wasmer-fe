/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import styles from "./edge.module.scss";
import CTA from "@/components/CTA";
import Vercel from "@/components/Vercel";
import Badge from "@/components/Badge";
import EdgeIcon from "@/assets/svg/edge.svg";
import LineIcon from "@/assets/svg/line.svg";

import InfinieIcon from "@/assets/svg/infinite.svg";
import InstantIcon from "@/assets/svg/instant.svg";

const EdgeCloud = (): ReactElement => {
  const feataures = [
    { title: "Infinite scalability", icon: <InfinieIcon /> },
    {
      title: "Instant cold starts",
      icon: <InstantIcon />,
    },
  ];

  const benefit = {
    title: "",
    description: "Faster, cheaper & indefinitely scalable",
    link: "/benefit",
  };
  return (
    <section className={`{ ${styles.edge} `}>
      <section
        className={`flex flex-col items-center justify-center ${styles.edge__container}`}
      >
        <LineIcon className="mb-2" />
        <Badge title="Edge" Icon={<EdgeIcon />} />
        <h2 className="headline my-6">Above The clouds</h2>
        <p className="content">
          Get the scalability of serverless and the reusability of cloud. Deploy
          to the edge, save your users time and yourself money.{" "}
        </p>

        <figure>
          <img src="/images/cloud.png" alt="logo" />
        </figure>

        <section className={`flex flex-col`}>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between m-10 ">
            {feataures.map((_feature: any) => {
              return (
                <p
                  className={`flex items-center justify-center w-full md:w-auto  ${styles.benefit__item}`}
                  key={_feature.ttle}
                >
                  {_feature.icon}
                  {_feature.title}
                </p>
              );
            })}
          </div>

          <section className="py-20 w-full mb-4">
            <CTA data={benefit} variant="small" />
          </section>
          <Vercel />
        </section>
      </section>
    </section>
  );
};

export default EdgeCloud;
