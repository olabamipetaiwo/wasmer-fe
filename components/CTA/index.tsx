import React, { ReactElement } from "react";
import styles from "./cta.module.scss";
// import YTIcon from "@/assets/svg/youtube.svg";
import { useRouter } from "next/router";
import ArrowIcon from "@/assets/svg/arrow.svg";

interface IData {
  title: string;
  description: string;
  link: string;
  info?: string;
}

interface CtaProps {
  data: IData;
  variant: "small" | "large";
}

const CTA = ({ data, variant }: CtaProps): ReactElement => {
  const router = useRouter();

  return (
    <section
      className={`flex flex-col items-start ${styles.cta__container} ${styles[variant]}`}
    >
      {variant === "large" && (
        <>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className="flex items-center justify-end w-full">
            <button
              className={`${styles.cta__button}  `}
              onClick={() => router.push(data.link)}
            >
              <ArrowIcon className="fill-grey-200" />
            </button>
          </div>
        </>
      )}
      {variant === "small" && (
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <p>{data.description}</p>
            <p className={`${styles.cta__info}`}>{data?.info}</p>
          </div>
          <button
            className={`${styles.cta__button}`}
            onClick={() => router.push(data.link)}
          >
            <ArrowIcon className="fill-grey-200" />
          </button>
        </div>
      )}
    </section>
  );
};

export default CTA;
