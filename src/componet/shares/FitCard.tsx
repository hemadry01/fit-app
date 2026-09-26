import { IFit } from '@/type/fitType';
import Image from 'next/image';
import React from 'react';
import TimeImage from "@/assets/time.png";
import CaloryImage from "@/assets/calorey.png";
import StarImage from "@/assets/star.png";
import Link from 'next/link';


interface IFitCardProps{
    fit:IFit
}

const FitCard = ({fit}:IFitCardProps) => {
    return (
      <Link href={`/fit/${fit.id}`}>
        <div className="w-[500px]  bg-[#15171D] rounded-2xl mb-4">
          <Image
            src={fit.image}
            alt={fit.name}
            width={300}
            height={150}
            className="h-full w-full object-contain rounded-2xl"
          />
          <div className="flex gap-2 py-2 text-[14px] font-semibold pl-2">
            {fit.muscleGroups?.map((muscle, index) => (
              <div key={index} className="rounded-2xl bg-[#C2F800] px-2 ">
                {muscle}
              </div>
            ))}
          </div>
          <h2 className="text-amber-50 text-xl font-semibold pl-2">
            {fit.name}
          </h2>
          <p className="text-[#9CA3AF] pl-2">{fit.equipment}</p>
          <div className="mx-auto my-2 ml-2 mr-2  border-t border-gray-800"></div>
          <div className="flex  text-[#9CA3AF] mb-4 pb-3 pl-2">
            <div className="flex items-center  text-[#9CA3AF] ml-2">
              <Image src={TimeImage} alt="time" width={15} height={15} />
              <span>{fit.duration} min</span>
            </div>
            <div className="flex items-center  text-[#9CA3AF] ml-2">
              <Image src={CaloryImage} alt="time" width={15} height={15} />
              <span>{fit.caloriesBurned} kcal</span>
            </div>
            <div className="flex items-center  text-[#9CA3AF] ml-2">
              <Image src={StarImage} alt="time" width={15} height={15} />
              <span>{fit.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default FitCard;