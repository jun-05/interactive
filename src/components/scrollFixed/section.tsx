/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import cls from "classnames";

interface sectionProps {
  pageName: string;
  content: string;
  imgName: string;
  active?: boolean;
}

export const Section = ({
  pageName,
  content,
  imgName,
  active = false,
}: sectionProps) => {
  return (
    <div className="relative h-screen w-screen">
      <div className="pl-32 pt-[50%] w-80  z-50 ">
        <h2 className="text-lg text-[#111]">{pageName}</h2>
        <p className="mt-4 text-[#333] text-sm leading-4">{content}</p>
        <img
          src={`../../img/ScrollFixed/${imgName}`}
          className={cls(
            "fixed right-[5%] top-[25%] block w-[600px] transition",
            {
              "hidden ": !active,
            }
          )}
        />
      </div>
    </div>
  );
};

export default Section;
