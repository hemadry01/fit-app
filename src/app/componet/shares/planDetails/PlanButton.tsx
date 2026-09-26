"use client";
import { FitContext } from "@/context/FitContext";
import { IFit } from "@/type/fitType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const PlanButton = ({ fit }: { fit: IFit }) => {
  const {
    plan,
    setPlan,
    planCalories,
    setPlanCalories,
    planDuration,
    setPlanDuration,
  } = useContext(FitContext);
  const handlePlanSet = () => {
    setPlan([...plan, fit]);
    setPlanDuration(planDuration + fit.duration);
    setPlanCalories(planCalories + fit.caloriesBurned);
    toast.success(`You plan"${fit.name}" saved`);
  };

  console.log(handlePlanSet);

  return (
    <button
      className=" px-4 py-2 rounded-lg bg-[#C2F800] text-[#15171D] text-xs font-semibold shadow-sm transition-all duration-200 hover:bg-[#b5e900] hover:shadow-md active:scale-95"
      onClick={() => handlePlanSet()}
    >
      Add to today's plan
    </button>
  );
};

export default PlanButton;
