import gsap, { Power3, Power4 } from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import cls from "classnames";

const Particle = () => {
  const titleBoxRef = useRef<HTMLDivElement>(null);
  const NumberBoxRef = useRef<HTMLDivElement>(null);
  const ButtonBoxRef = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setwindowHeight] = useState<number>(0);
  const bgColor = ["#2eccc4", "#ea204f", "#20a9ea"];

  useEffect(() => {
    let ctx = gsap.context(() => {
      titleBoxRef.current?.childNodes.forEach((v, i) => {
        const box = `.titleBox :nth-child(${i + 1})`;
        gsap.from(box, {
          autoAlpha: 0,
          //delay: Math.random(),
          delay: i * 0.2,
          duration: 1,
        });
      });
    }, titleBoxRef);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ButtonBoxRef.current?.childNodes.forEach((v, i) => {
        const buttonBox = `.buttonBox :nth-child(${i + 1})`;
        gsap.from(buttonBox, {
          y: 20,
          autoAlpha: 0,
          ease: Power3.easeInOut,
          delay: i * 0.1 + 1,
        });
      });
    }, ButtonBoxRef);
    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setWindowWidth(window.innerWidth);
    setwindowHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      setwindowHeight(window.innerHeight);
    });
    const chnagePage = setTimeout(() => {
      setPage(1);
    }, 1000);
    return () => {
      clearTimeout(chnagePage);
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerHeight);
        setwindowHeight(window.innerHeight);
      });
    };
  }, []);

  useLayoutEffect(() => {
    const numberBoxTarget = NumberBoxRef.current?.childNodes!;
    let ctx = gsap.context(() => {
      if (page === 1) {
        numberBoxTarget.forEach((v, i) => {
          const numberBox = `.numberBox :nth-child(${i + 1})`;
          gsap.to(numberBox, {
            top: Math.random() * (windowHeight - 150) + 60,
            left: Math.random() * (windowWidth - 80) + 20,
            autoAlpha: "random(.1,1)",
            scale: "random(0.5,1.5)",
            ease: Power4.easeOut,
            delay: "random(0,.5)",
            duration: 2,
          });
        });
      } else if (page === 2) {
        numberBoxTarget.forEach((v, i) => {
          const numberBox = `.numberBox :nth-child(${i + 1})`;
          var scaleNum = Math.random() * 3;
          gsap.to(numberBox, {
            top: Math.random() * (windowHeight - 250) + 100,
            left: Math.random() * (windowWidth - 200) + 80,
            rotationX: "random(-60,60)",
            rotationY: "random(-60,60)",
            rotationZ: "random(-90,90)",
            autoAlpha: scaleNum / 3,
            scale: scaleNum,
            ease: Power4.easeInOut,
            delay: "random(0,1)",
            duration: 1,
          });
        });
      } else if (page === 3) {
        numberBoxTarget.forEach((v, i) => {
          const numberBox = `.numberBox :nth-child(${i + 1})`;
          gsap.to(numberBox, {
            top: windowHeight / 2 + Math.sin(i / 3) * 80,
            left: (i * windowWidth) / 105,
            autoAlpha: "random(0,1)",
            scale: 0.5,
            ease: Power4.easeInOut,
            duration: 0.5,
          });
        });
      }
    }, NumberBoxRef);
    return () => {
      ctx.revert();
    };
  }, [page, windowWidth, windowHeight]);

  const buttonStyle = "relatvie z-10 mx-1 bg-white text-black px-5 py-2 ";
  const buttonActive = `hover:bg-black hover:text-white `;

  const RandomtranslateNumber = () => {
    setPage(1);
  };

  const RandomTranslateWithPerspective = () => {
    setPage(2);
  };

  const sortNumber = () => {
    setPage(3);
  };

  return (
    <div
      className="overflow-hidden font-serif bg-cyan-400 transition-colors duration-500 "
      style={{ backgroundColor: bgColor[page - 1] }}
    >
      <div
        className="titleBox fixed flex w-full text-3xl font-thin justify-center top-[10%] [&>div]:ml-4"
        ref={titleBoxRef}
        id="titleBox"
      >
        <div>Random</div>
        <div>Number</div>
        <div>Particle</div>
        <div>With</div>
        <div>GSAP</div>
      </div>
      <div className="w-screen h-screen numberBox" ref={NumberBoxRef}>
        {Array.from({ length: 100 }, (v, i) => i + 1).map((item) => {
          return (
            <div
              className="absolute opacity-0 text-3xl text-white top-1/2 left-1/2"
              key={"number_" + item}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div
        className="buttonBox absolute bottom-5 left-1/2 -translate-x-1/2"
        ref={ButtonBoxRef}
      >
        <button
          className={cls(buttonStyle, buttonActive, {
            " bg-[#000] text-[#fff]": page === 1,
          })}
          onClick={RandomtranslateNumber}
        >
          NO 1
        </button>
        <button
          className={cls(buttonStyle, buttonActive, {
            " bg-[#000] text-[#fff]": page === 2,
          })}
          onClick={RandomTranslateWithPerspective}
        >
          NO 2
        </button>
        <button
          className={cls(buttonStyle, buttonActive, {
            " bg-[#000] text-[#fff]": page === 3,
          })}
          onClick={sortNumber}
        >
          NO 3
        </button>
      </div>
    </div>
  );
};

export default Particle;
