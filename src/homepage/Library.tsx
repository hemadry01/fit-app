import FitCard from '@/app/componet/shares/FitCard';
import { IFit } from '@/type/fitType';
import React from 'react';

const getFit = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_BASE_URL!);
    if (!res.ok) {
      throw new Error("Failed to fetch fit data");
    }
    return res.json();
  } catch (error) {
    console.error("Error featching fit data", error);
  }
};

const Library = async() => {
    const fitData = await getFit();
    console.log(fitData);
    
    return (
      <div className="mt-20">
        <div className="items-center container mx-auto mb-2">
          <h2 className="text-white text-2xl">THE LIBRARY</h2>
          <p className="text-[#9CA3AF]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 container items-center mx-auto rounded-2xl">
          {fitData.map((fit: IFit) => {
            return <FitCard key={fit.id} fit={fit} />;
          })}
        </div>
      </div>
    );
};

export default Library;