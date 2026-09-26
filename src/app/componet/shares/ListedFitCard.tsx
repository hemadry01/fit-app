import { IFit } from '@/type/fitType';
import Image from 'next/image';
import React, { useContext } from 'react';
import TimeImage from "@/assets/time.png";
import CaloryImage from "@/assets/calorey.png";
import StarImage from "@/assets/star.png";
import Remove from "@/assets/remove.png";
import Link from 'next/link';
import { FitContext } from '@/context/FitContext';
import { toast } from 'react-toastify';

interface IListFitCardProps{
    fit:IFit
}

const ListedFitCard = ({fit}:IListFitCardProps) => {
  const {
    plan,
    setPlan,
    planCalories,
    setPlanCalories,
    planDuration,
    setPlanDuration,
  } = useContext(FitContext);

  const removeListFitData = (fit:IFit)=>{

    const resetPlan = plan.filter((item) => item.id !== fit.id);
    setPlan(resetPlan);
    setPlanDuration(planDuration - fit.duration);
    setPlanCalories(planCalories - fit.caloriesBurned);
     toast.warn(`You plan"${fit.name}" has delete`);
  }

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
            <button className="btn btn-outline btn-primary">
              View Details
            </button>
          </Link>
          <button className="btn btn-success">Mark as Done</button>
          <button className="text-white" onClick={() => removeListFitData(fit)}>
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

export default ListedFitCard;