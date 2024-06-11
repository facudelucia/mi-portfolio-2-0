import Image from "next/image";
import React from "react";
import FotoFacu from "../public/assets/facu-foto.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const Main = () => {
  const [text, count] = useTypewriter({
    words: [
      "Web Development",
      "Frontend and Backend Solutions",
      "Custom Software Development",
      "Technical Consultation",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
          <BackgroundCircles />
          <div className="h-32 w-32 mx-auto">
            <Image
              style={{
                height: '100%',
                width: '100%'
              }}
              className="relative rounded-full object-cover"
              src={FotoFacu}
              alt=""
            />
          </div>

          <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
              Facundo De Lucia
            </h2>
            <h1 className="text-3xl lg:text-6xl font-semibold scroll-px-10">
              <span className="mr-3">{text}</span>
              <Cursor cursorColor="F7AB0A" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
