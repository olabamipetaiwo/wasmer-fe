import React, { ReactElement } from "react";
import VercelIcon from "@/assets/svg/vercel.svg";

const Vercel = (): ReactElement => {
  return (
    <section className={`flex flex-col items-center`}>
      <p className="content mb-8 w-3/4 text-center">
        &ldquo;This programming tool makes it easier for apps to work
        anywhere&ldquo;
      </p>
      <VercelIcon />
    </section>
  );
};

export default Vercel;
