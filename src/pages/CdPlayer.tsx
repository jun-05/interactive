import React, { useEffect, useState } from "react";
import Album from "../components/cdplayer/Album";
import cls from "classnames";
import { useColorState } from "../context/color";

export const CdPlayer = () => {
  const [page, setPage] = useState<number>(0);

  const bgGredientColor = [
    ["#0272a4", "#f6a564"],
    ["#b6bfc8", "#36595b"],
    ["#e58e82", "#6f569f"],
    ["#0272a4", "#f6a564"],
    ["#b6bfc8", "#36595b"],
  ];

  const buttonStyle =
    "py-[6px] px-5 mx-1 my-0 bg-black text-white transition-all ease-out duration-300 hover:bg-white hover:text-black";

  const onClickPrevButton = () => {
    if (page === 0) {
      setPage(4);
    } else {
      setPage((prev) => prev! - 1);
    }
  };

  const onClickNextButton = () => {
    if (page === 4) {
      setPage(0);
    } else {
      setPage((prev) => prev! + 1);
    }
  };

  const colorState = useColorState();
  const { bg, action } = colorState;

  useEffect(() => {
    action(page);
  }, [action, page]);

  return (
    <div className="overflow-hidden text-base min-w-[480px]">
      <div
        className={`w-screen h-screen`}
        style={{ background: `linear-gradient(120deg, ${bg[0]} ,${bg[1]})` }}
      >
        {Array.from({ length: 5 }, (v, i) => i).map((albumIdx) => {
          return (
            <div key={`album_${albumIdx}`}>
              <Album
                imgName={`iu_${albumIdx}.jpg`}
                acitve={albumIdx === page}
              />
            </div>
          );
        })}
      </div>
      <div className="fixed bottom-[5%] text-center w-screen flex justify-center items-center">
        <button
          type="button"
          className={buttonStyle}
          onClick={onClickPrevButton}
        >
          PREV
        </button>
        <div className="flex px-3">
          {Array.from({ length: 5 }, (v, i) => i).map((buttonIdx) => {
            return (
              <div
                className={cls(
                  "w-3 h-3 mx-1 text-center cursor-pointer bg-gray-600 rounded-full transition-all ease-out duration-300",
                  { " bg-white": buttonIdx === page }
                )}
                onClick={() => setPage(buttonIdx)}
                key={`${buttonIdx}`}
              ></div>
            );
          })}
        </div>
        <button
          type="button"
          className={buttonStyle}
          onClick={onClickNextButton}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default CdPlayer;
