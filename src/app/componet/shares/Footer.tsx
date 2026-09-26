import Image from "next/image";
import FooterBaner from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0C0D10]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#24262D] py-3 sm:flex-row">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <Image
              src={FooterBaner}
              alt="FooterBaner"
              className="h-11 w-11 object-contain"/>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-gray-500 sm:text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
}
