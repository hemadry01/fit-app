"use client";
import { FitContext } from "@/context/FitContext";
import { IFit } from "@/type/fitType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveButton = ({ fit }: { fit: IFit }) => {
  const { saved, setSaved } = useContext(FitContext);

  const handleSavePlane = () => {
    setSaved([...saved, fit]);
    toast.success(`You plan"${fit.name}" saved`);
  };

  return (
    <button
      className=" px-4 py-2 rounded-lg border border-[#C2F800] bg-transparenttext-[#C2F800] text-xs font-semibold transition-all duration-200 hover:bg-[#C2F800] hover:text-[#15171D] active:scale-95"
      onClick={() => handleSavePlane()}
    >
      Save for later
    </button>
  );
};

export default SaveButton;
