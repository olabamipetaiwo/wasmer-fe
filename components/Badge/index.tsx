import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import styles from "./badge.module.scss";
import ArrowIcon from "@/assets/svg/arrow.svg";

interface BadgeProps {
  title: string;
  link?: string | null;
  Icon: ReactElement;
}

const Badge = ({ title, link, Icon }: BadgeProps): ReactElement => {
  const router = useRouter();

  return (
    <div
      className={`flex items-center justify-center ${styles.badge__container}`}
    >
      {Icon}
      <p>{title}</p>
      {link && (
        <button onClick={() => router.push(link)}>
          <ArrowIcon className="fill-grey-100" />
        </button>
      )}
    </div>
  );
};

export default Badge;
