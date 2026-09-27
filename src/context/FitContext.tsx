"use client";
import { IFit } from "@/type/fitType";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


interface FitContextType {
  plan: IFit[];
  setPlan: Dispatch<SetStateAction<IFit[]>>;

  saved: IFit[];
  setSaved: Dispatch<SetStateAction<IFit[]>>;

  savedCalories: number;
  setSavedCalories: Dispatch<SetStateAction<number>>;

  savedDuration: number;
  setSavedDuration: Dispatch<SetStateAction<number>>;

  planCalories: number;
  setPlanCalories: Dispatch<SetStateAction<number>>;

  planDuration: number;
  setPlanDuration: Dispatch<SetStateAction<number>>;
}
export const FitContext = createContext<FitContextType | undefined>(undefined);

const FitProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IFit[]>([]);
  const [saved, setSaved] = useState<IFit[]>([]);
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
