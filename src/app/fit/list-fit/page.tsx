"use client";

import ListedFitCard from "@/app/componet/shares/ListedFitCard";
import ListedFitSaveCard from "@/app/componet/shares/planDetails/ListedFitSaveCard";
import { FitContext } from "@/context/FitContext";
import { IFit } from "@/type/fitType";
import Link from "next/link";
import React, { useContext } from "react";

const ListFit = () => {
const {
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
} = useContext(FitContext);

  return (
    <div>
      <h2>MY PLAN</h2>
      <p>Cap of five lifts for today. Finish them, then load more.</p>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab text-white"
          aria-label="Today's Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="flex justify-between items-center mx-auto rounded-lg border border-[#2A2D35] bg-[#15171D] px-6 py-3">
            <div>
              <h2 className="px-5 font-semibold text-white">Exercises</h2>
              <p className="px-10  text-[#C2F800] text-2xl">{plan.length}</p>
            </div>
            <div>
              <h2 className="px-5 font-semibold text-white">Minutes</h2>
              <p className="px-10  text-[#C2F800] text-2xl">{planDuration}</p>
            </div>
            <div>
              <h2 className="px-5 font-semibold text-white">Calories</h2>
              <p className="px-10  text-[#C2F800] text-2xl">{planCalories}</p>
            </div>
          </div>
          <div className="mt-14 rounded-lg border border-[#2A2D35] bg-[#15171D] px-6 py-3">
            {plan.length > 0 ? (
              plan.map((fit: IFit) => {
                return <ListedFitCard key={fit.id} fit={fit} />;
              })
            ) : (
              <div className="flex min-h-[200px] flex-col items-center justify-center text-center">
                <h2 className="text-lg font-semibold text-white">
                  NOTHING HERE YET
                </h2>

                <p className="text-white">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link href="/">
                  <button className="mt-2 rounded-[7px] bg-[#C2F800] p-1 text-[12px] font-semibold">
                    Go to workouts
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab text-white"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="flex justify-between items-center mx-auto rounded-lg border border-[#2A2D35] bg-[#15171D] px-6 py-3">
            <div>
              <h2 className="px-5 font-semibold text-white">Exercises</h2>
              <p className="px-10  text-[#C2F800] text-2xl">{saved.length}</p>
            </div>
            <div>
              <h2 className="px-5 font-semibold text-white">Minutes</h2>
              <p className="px-10  text-[#C2F800] text-2xl">{savedDuration}</p>
            </div>
            <div>
              <h2 className="px-5 font-semibold text-white">Calories</h2>
              <p className="px-10  text-[#C2F800] text-2xl">{savedCalories}</p>
            </div>
          </div>
          <div>
            <div className="mt-14 rounded-lg border border-[#2A2D35] bg-[#15171D] px-6 py-3">
              {saved.length > 0 ? (
                saved.map((fit: IFit) => {
                  return <ListedFitSaveCard key={fit.id} fit={fit} />;
                })
              ) : (
                <div className="flex min-h-[200px] flex-col items-center justify-center text-center">
                  <h2 className="text-lg font-semibold text-white">
                    NOTHING HERE YET
                  </h2>

                  <p className="text-white">
                    Browse the library and add a lift to get today moving.
                  </p>

                  <Link href="/">
                    <button className="mt-2 rounded-[7px] bg-[#C2F800] p-1 text-[12px] font-semibold">
                      Go to workouts
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFit;
