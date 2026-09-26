import Link from 'next/link';
import React from 'react';

const NotFound = () => {
   return (
     <div className="flex min-h-screen flex-col items-center justify-center bg-[#15171D] text-center">
       <h1 className="text-7xl font-bold text-[#C2F800]">404</h1>

       <h2 className="mt-4 text-2xl font-semibold text-white">
         Page Not Found
       </h2>

       <p className="mt-2 text-gray-400">
         Sorry, the page you are looking for does not exist.
       </p>

       <Link
         href="/"
         className="mt-6 rounded-lg bg-[#C2F800] px-5 py-2 font-semibold text-black"
       >
         Go Home
       </Link>
     </div>
   );
};

export default NotFound;