import { FitContext } from '@/context/FitContext';
import { IFit } from '@/type/fitType';
import Image from 'next/image';
import React, { useContext } from 'react';
import Remove from "@/assets/remove.png";
import TimeImage from "@/assets/time.png";
import CaloryImage from "@/assets/calorey.png";
import StarImage from "@/assets/star.png";
import Link from 'next/link';
import { toast } from 'react-toastify';

interface IListFitCardProps {
  fit: IFit;
}

const ListedFitSaveCard = ({ fit }: IListFitCardProps) => {
     const {
       saved,
       setSaved,
       savedCalories,
       setSavedCalories,
       savedDuration,
       setSavedDuration,
     } = useContext(FitContext);

     const removeListFitSaveData = (fit: IFit) => {
       const resetSave = saved.filter((item) => item.id !== fit.id);
       setSaved(resetSave);
       setSavedDuration(savedDuration - fit.duration);
       setSavedCalories(savedCalories - fit.caloriesBurned);
       toast.warn(`You save plan"${fit.name}" has delete`);
     };

  return (
    <div className="border border-gray-300 rounded-2xl p-2 mb-2 mr-3 ml-3 flex justify-between items-center mx-auto">
      <div className="flex gap-2 ">
        <div>
          <Image
            src={fit.image}
            alt={fit.name}
            width={70}
            height={70}
            priority
            className="h-auto w-full object-cover rounded-2xl"
          />
        </div>
        <div className="items-center justify-center mx-auto">
          <h2 className="font-semibold text-white">{fit.name}</h2>
          <p className="text-white">{fit.equipment}</p>
          <div className="flex  text-[#9CA3AF] mb-4 pb-3">
            <div className="flex items-center  text-[#9CA3AF]">
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
      </div>
      <div className="flex gap-4 pr-4">
        <Link href={`/fit/${fit.id}`}>
          <button className="btn btn-outline btn-primary">View Details</button>
        </Link>
        <button className="btn btn-success">Mark as Done</button>
        <button className="text-white" onClick={() => removeListFitSaveData(fit)}>
          <Image
            src={Remove}
            alt="Remove"
            width={25}
            height={25}
            priority
            className="h-auto w-full object-cover rounded-2xl"
          />
        </button>
      </div>
    </div>
  );
};

export default ListedFitSaveCard;