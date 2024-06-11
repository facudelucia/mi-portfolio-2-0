import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">About Me</h2>
          <p className="py-2 text-gray-600">
            Hi, I&apos;m Facu and I&apos;m a self-taught developer, I have held roles in
            both frontend and fullstack development. I have had the opportunity
            to work in various markets across South America, including
            Argentina, Chile, and Brazil, as well as in the USA and Germany. My
            professional journey has been diverse, with experience in fields
            such as agriculture, human resources, judicial processes, and
            fueling.
          </p>
          <div>
            <p className="uppercase pt-8">Connect With Me</p>
            <div className="flex items-start py-4">
              <a
                href="https://www.linkedin.com/in/facudelucia/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-2">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://www.github.com/facudelucia/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
