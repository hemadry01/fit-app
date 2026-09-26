"use client";
import React, { createContext, ReactNode, useState } from "react";

export const FitContext = createContext({});

const FitProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [savedCalories, setSavedCalories] = useState(0);
  const [savedDuration, setSavedDuration] = useState(0);

  const [planCalories, setPlanCalories] = useState(0);
  const [planDuration, setPlanDuration] = useState(0);



  const shareData = {
    plan,
    setPlan,
    saved,
    setSaved,
    savedCalories,
    setSavedCalories,
    savedDuration,
    setSavedDuration,
    planCalories,
    setPlanCalories,
    planDuration,
    setPlanDuration,
  };
  return <FitContext.Provider value={shareData}>{children}</FitContext.Provider>;
};

export default FitProvider;
