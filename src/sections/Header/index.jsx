import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Header = () => {
  Aos.init();

  const itemsnav = ["Início", "Nossos pratos", "Quem somos", "Cardápio"];

  return (
    <div className="w-screen hidden md:flex h-20 items-center justify-center flex ">
      <div></div>
      <div className="">
        <ul className="list-none flex gap-8">
          {itemsnav.map((item, index) => (
            <li
              key={index}
              className="no-underline text-sm cursor-pointer font-normal uppercase"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
