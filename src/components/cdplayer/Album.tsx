/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

type alubmProps = {
  imgName: string;
  acitve: boolean;
};

export const Album = ({ imgName, acitve = false }: alubmProps) => {
  const albumSize =
    "lg:w-[600px] lg:h-[400px] lg:top-[47%] top-[40%] w-[300px] h-[200px]";
  const coverImgSize = "lg:w-[400px] lg:h-[400px] h-[250px] w-[250px]";
  const diskSize = "lg:w-[392px] lg:h-[392px] w-[244px] h-[244px]";
  const diskInnerSize = "lg:w-[160px] lg:h-[160px] w-[100px] h-[100px]";

  return (
    <div
      className={`${albumSize} absolute left-[50%] -translate-x-1/2 -translate-y-1/2  transition-all duration-1000 ease-in-out`}
      style={!acitve ? { display: "none" } : {}}
    >
      <div
        className={`${diskSize} absolute top-1 left-[30%]  rounded-full shadow-2xl bg-gradient-to-br from-black via-[#333333] to-black   animate-spin-slow hover:left-[40%] `}
      >
        <div
          className={`${diskInnerSize} absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  bg-[#0473a4] rounded-full border-2 border-dashed border-[#fff] border-opacity-40`}
        ></div>
      </div>
      <a href="/" className={`${coverImgSize} absolute shadow-lg`}>
        <img src={`../../img/cdplayer/${imgName}`} alt="albumImg" />
      </a>
    </div>
  );
};

export default React.memo(Album);
