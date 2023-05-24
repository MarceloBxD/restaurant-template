import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Summary = () => {
  Aos.init();
  return (
    <div
      data-aos={"fade-right"}
      className="py-16 px-16 flex flex-col m-auto items-center md:flex "
    >
      <div className="">
        <h1 className="text-6xl font-bold">Majors Studio</h1>
      </div>
      <div className="mt-8 flex md:text-center md:justify-center">
        <p className="line-clamp-3 w-10/12 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
    </div>
  );
};

export default Summary;
