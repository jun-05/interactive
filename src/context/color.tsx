import React, { createContext, useState, useContext } from "react";

const ColorContext = createContext<any | null>(null);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const bgGredientColor = [
    ["#0272a4", "#f6a564"],
    ["#b6bfc8", "#36595b"],
    ["#e58e82", "#6f569f"],
    ["#0272a4", "#f6a564"],
    ["#b6bfc8", "#36595b"],
  ];
  const [colorIdx, setColorIdx] = useState(0);

  const value = {
    bg: bgGredientColor[colorIdx],
    action: (idx: number) => setColorIdx(idx),
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
}
export function useColorState() {
  return useContext(ColorContext);
}
