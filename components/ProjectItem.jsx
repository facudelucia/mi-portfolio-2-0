import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, repoUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-40 md:h-64  w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true}
      />
      <div className="hidden group-hover:block absolute">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <div className="flex items-center justify-center w-full">
          <Link href={projectUrl}>
            <p className="text-center mr-2 py-1 px-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
          <Link href={repoUrl}>
            <p className="text-center py-1 px-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              See repo
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
