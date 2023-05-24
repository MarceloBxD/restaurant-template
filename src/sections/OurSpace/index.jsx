import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const OurSpace = () => {
  Aos.init();
  return (
    <div className="flex px-8 container m-auto py-32 flex-col">
      <div data-aos="fade-right" className="flex gap-4 flex-col">
        <h1 className="text-4xl font-bold">Nosso Cantinho</h1>
        <p>
          Precisando de lago? Conheça também nossa merceria no primeiro piso!
        </p>
      </div>
    </div>
  );
};

export default OurSpace;
