import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const DetailsFood = () => {
  Aos.init();
  return (
    <div className="container px-28 mb-10 m-auto">
      <div className="flex flex-col items-center justify-center ">
        <div
          data-aos="fade-right"
          className="flex flex-col gap-4 justify-normal"
        >
          <h1 className=" text-2xl w-full font-bold">
            Comidinha brasileira no coração de Friburgo
          </h1>
          <p className="text-md w-full ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div data-aos="fade-left">
          <img
            className="bg-black mt-12 p-3 object-cover bg-no-repeat bg-center bg-cover"
            src="../../../public/assets/images/Image.png"
            alt="food_img"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsFood;
