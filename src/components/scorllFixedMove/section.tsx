import React from "react";

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
  const imgBaseStyle =
    "absolute w-[400px] transition ease-in-out duration-1000 opacity-0 hidden";

  return (
    <div className="relative h-screen w-screen">
      <div className="relative z-50 p-14 w-80 mt-12">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="text-base leading-6 pt-4">{content}</p>
        <div className="fixed w-[70%] right-[5%] top-[35%]">
          <img
            src={`../../img/scrollMoveImg/${img_name_1}`}
            alt={img_alt}
            className={`${imgBaseStyle} transform -rotate-12 translate-x-24 -translate-y-36`}
          />
          <img
            src={`../../img/scrollMoveImg/${img_name_2}`}
            alt={img_alt}
            className={`${imgBaseStyle} left-[400px] top-[100px] delay-500 transform -rotate-12 translate-x-24 translate-y-36`}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
