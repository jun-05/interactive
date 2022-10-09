import React, { useEffect, useState } from "react";
import cls from "classnames";
import Section from "../components/scrollFixed/Section";

export const ScrollFixed = () => {
  const [activePage, setActivePage] = useState<number>(0);

  const liStyle = (active: boolean) =>
    cls(
      "list-none w-3 h-3 mt-4 cursor-pointer bg-[#666] rounded-[50%] transition ease-out duration-300",
      { "bg-[#000]": active }
    );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let page = Math.round(
        document.documentElement.scrollTop / window.innerHeight
      );
      setActivePage(page);
      console.log(page);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [activePage]);

  return (
    <div className="overflow-x-hidden bg-[#e8e19b]">
      <ul className="fixed right-[3vw] top-[40%] z-[100]">
        {Array.from({ length: 7 }, (v, i) => (
          <li
            className={liStyle(i === activePage)}
            onClick={() => {
              setActivePage((prev) => (prev = i));
              window.scrollTo({
                top: window.innerHeight * i,
                behavior: "smooth",
              });
            }}
            key={`list_${i}`}
          ></li>
        ))}
      </ul>
      <div className="relative h-screen w-screen">
        <h1
          className={cls(
            "fixed text[#111]  text-6xl top-1/2  left-1/2 transform translate-x-[-50%]  translate-y-[-50%] transition duration-200 ease-in-out",
            {
              hidden: activePage > 0,
            }
          )}
        >
          page Title
        </h1>
      </div>
      <Section
        pageName={"page 1"}
        content={"스케치를 한다"}
        imgName={"pic_1.jpg"}
        active={activePage > 0}
      />
      <Section
        pageName={"page 2"}
        content={"선을 정리한다 한다"}
        imgName={"pic_2.jpg"}
        active={activePage > 1}
      />
      <Section
        pageName={"page 3"}
        content={"블랙 컬러를 넣는다"}
        imgName={"pic_3.jpg"}
        active={activePage > 2}
      />
      <Section
        pageName={"page 4"}
        content={"포인트 컬러를 칠해줍니다."}
        imgName={"pic_5.jpg"}
        active={activePage > 3}
      />
      <Section
        pageName={"page 5"}
        content={"그리고 마무리"}
        imgName={"pic_6.jpg"}
        active={activePage > 4}
      />
      <Section
        pageName={"page 4"}
        content={"스티치를 넣으면 끝"}
        imgName={"pic_7.jpg"}
        active={activePage > 5}
      />
    </div>
  );
};

export default ScrollFixed;
