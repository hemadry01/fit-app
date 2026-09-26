"use client";
import React, { createContext, ReactNode, useState } from "react";

export const FitContext = createContext({});

const FitProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [calories, setCalories] = useState(0);
  const [duration, setDuration] = useState(0);

  const shareData = {
    plan,
    setPlan,
    saved,
    setSaved,
    calories,
    setCalories,
    duration,
    setDuration,
  };
  return <FitContext.Provider value={shareData}>{children}</FitContext.Provider>;
};

export default FitProvider;
