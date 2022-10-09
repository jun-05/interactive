import React from "react";
import cls from "classnames";

interface sectionProps {
  title: string;
  content: string;
  img_name_1: string;
  img_name_2: string;
  img_alt: string;
  active: boolean;
}

export const Section = ({
  title,
  content,
  img_name_1,
  img_name_2,
  img_alt,
  active,
}: sectionProps) => {
  const imgBaseStyle = cls(
    "absolute w-[400px] transition ease-in-out duration-1000 pl-10",
    {
      "opacity-0": !active,
    }
  );

  return (
    <div className="relative h-screen w-screen mt-12">
      <div className="relative z-50 p-14 w-80 ">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="text-base leading-6 mt-4 z-100 bg-slate-50 opacity-70">
          {content}
        </p>
      </div>
      <div className="fixed w-[70%] right-[5%] top-[35%]">
        <img
          src={`../../img/scrollMoveImg/${img_name_1}`}
          alt={img_alt}
          className={cls(`${imgBaseStyle}`, {
            "-rotate-12 translate-x-24 -translate-y-36": !active,
          })}
        />
        <img
          src={`../../img/scrollMoveImg/${img_name_2}`}
          alt={img_alt}
          className={cls(`${imgBaseStyle} left-[400px] top-[100px]`, {
            "-rotate-12 translate-x-24 translate-y-36": !active,
          })}
        />
      </div>
    </div>
  );
};

export default Section;
