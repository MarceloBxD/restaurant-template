import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const DetailsFood = () => {
  Aos.init();
  return (
    <div className="container mb-10 m-auto">
      <div className="flex flex-col md:flex md:flex-row px-16  items-center justify-center ">
        <div
          data-aos="fade-right"
          className="flex flex-col gap-4 justify-center"
        >
          <h1 className=" text-4xl w-full font-bold">
            Comidinha brasileira no coração de Friburgo
          </h1>
          <p className="text-md w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div data-aos="fade-left">
          <img
            className=" mt-8 md:mt-0 w-screen bg-black p-3 h-72 object-cover bg-no-repeat bg-center bg-cover"
            src="../../../public/assets/images/Image.png"
            alt="food_img"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsFood;
