import Image from "next/image";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="font-poppins min-h-screen bg-[#000000] text-white min-w-[20rem] ">
      {/* {loading ? ( */}
      <div className="  w-full min-w-[20rem] max-w-[90rem] mx-auto flex flex-col justify-center   items-stretch min-h-screen overflow-hidden">
        <div className="flex flex-col justify-center items-center p-5 py-10 px-5  ">
          <Image src={logo} alt="logo" className="scale-[3] loading-animate " />

          <h1
            className={`text-3xl md:text-5xl px-5 text-center transition-all duration-1000 mt-16 ${
              loading ? "invisible" : "view-animate visible"
            } `}
          >
            Website Comming Soon...
          </h1>
        </div>
      </div>
      {/* // ) : (
      //   <div className="  w-full min-w-[20rem] max-w-[90rem] mx-auto flex flex-col justify-center   items-stretch min-h-screen">
      //     <div className="flex justify-center items-center p-5 py-10 px-5 ">
      //       <Image src={logo} alt="logo" />
      //     </div>
      //     <section className="mt-10 relative overflow-hidden pb-20 flex justify-center items-center">
      //       <h1 className="text-5xl px-5 text-center">Website Comming Soon</h1>
      //     </section>
      //   </div>
      // )} */}
    </div>
  );
}
