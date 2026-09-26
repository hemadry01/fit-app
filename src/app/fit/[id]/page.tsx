import { IFit } from "@/type/fitType";
import Image from "next/image";
import React from "react";

interface IFitDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getFit = async (): Promise<IFit[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch fit data");
  }

  return res.json();
};

const FitDetailsPage = async ({ params }: IFitDetailsPageProps) => {
  const { id } = await params;

  const fitData = await getFit();

  const fit = fitData.find((item: IFit) => String(item.id) === String(id));

  if (!fit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F1115] text-white">
        <h1 className="text-2xl font-semibold">Fit not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F1115] text-white">
      <div className="container mx-auto px-4 py-10 lg:py-16">
        {/* Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-[#15171D] shadow-2xl">
          {/* Image Section */}
          <div className="relative min-h-[400px] lg:min-h-[750px] ml-4 mt-4 ">
            <Image
              src={fit.image}
              alt={fit.name}
              width={800}
              height={750}
              priority
              className="h-auto w-full object-cover rounded-2xl"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            {/* Title */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {fit.name}
            </h1>

            {/* Equipment */}
            <p className="mt-4 text-lg text-gray-400">
              <span className=" text-[#9CA3AF]">{fit.description}</span>
            </p>
            <div className="flex gap-2 py-4 text-[14px] text-[#15171D]">
              {fit.muscleGroups?.map((muscle, index) => (
                <div key={index} className="rounded-2xl bg-[#C2F800] px-4 ">
                  {muscle}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-white/10" />

            {/* Details Table */}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="w-1/2 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-gray-400">
                      DIFFICULTY
                    </td>
                    <td className="px-5 py-4 font-semibold text-white">
                      {fit.difficulty}
                    </td>
                  </tr>

                  <tr className="border-b border-white/10">
                    <td className="bg-white/[0.03] px-5 py-4 text-sm font-semibold text-gray-400">
                      SETS
                    </td>
                    <td className="px-5 py-4 font-semibold text-white">
                      {fit.sets}
                    </td>
                  </tr>

                  <tr className="border-b border-white/10">
                    <td className="bg-white/[0.03] px-5 py-4 text-sm font-semibold text-gray-400">
                      REPS
                    </td>
                    <td className="px-5 py-4 font-semibold text-white">
                      {fit.reps}
                    </td>
                  </tr>

                  <tr className="border-b border-white/10">
                    <td className="bg-white/[0.03] px-5 py-4 text-sm font-semibold text-gray-400">
                      DURATION
                    </td>
                    <td className="px-5 py-4 font-semibold text-white">
                      {fit.duration} min
                    </td>
                  </tr>

                  <tr className="border-b border-white/10">
                    <td className="bg-white/[0.03] px-5 py-4 text-sm font-semibold text-gray-400">
                      CALORIES
                    </td>
                    <td className="px-5 py-4 font-semibold text-white">
                      {fit.caloriesBurned} kcal
                    </td>
                  </tr>

                  <tr>
                    <td className="bg-white/[0.03] px-5 py-4 text-sm font-semibold text-gray-400">
                      RATING
                    </td>
                    <td className="px-5 py-4 font-semibold ">{fit.rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h2 className="mb-5 text-2xl font-bold text-white">
                INSTRUCTIONS
              </h2>

              <div className="space-y-2">
                {fit.instructions?.map((instruction, index) => (
                  <div key={index} className="flex bg-[#15171D] p-4">
                    <div className="flex h-8 w-8 shrink-0  text-sm text-white">
                      {index + 1}
                    </div>

                    <p className="leading-6 text-gray-300">{instruction}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-3">
                <button
                  className="
                    px-4 py-2
                    rounded-lg
                    bg-[#C2F800]
                    text-[#15171D]
                    text-xs font-semibold
                    shadow-sm
                    transition-all duration-200
                    hover:bg-[#b5e900]
                    hover:shadow-md
                    active:scale-95
                  "
                >
                  Add to today's plan
                </button>

                <button
                  className="
                      px-4 py-2
                      rounded-lg
                      border border-[#C2F800]
                      bg-transparent
                      text-[#C2F800]
                      text-xs font-semibold
                      transition-all duration-200
                      hover:bg-[#C2F800]
                      hover:text-[#15171D]
                      active:scale-95
                    "
                >
                  Save for later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FitDetailsPage;
