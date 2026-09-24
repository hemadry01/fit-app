import Banner from "@/homepage/Banner";
import Library from "@/homepage/Library";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#000000]">
      <Banner />
      <Library/>
    </div>
  );
}
