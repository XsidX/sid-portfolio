import React from 'react';
import Image from 'next/image';
import placeholderImg from '../../public/images/works/mySpotify1.png';

const Project = () => (
  <div className="relative grid grid-cols-6 grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:h-project rounded-md overflow-hidden">
    <div className="absolute inset-0 bg-orange-600 opacity-75 z-10" />
    <Image
      src="https://framerusercontent.com/images/0u1KOKQqa7zWlOeQzGyjGsYTIEU.png"
      alt="Framer X"
      fill
      objectFit="cover"
    />
    <div className="row-span-1 col-span-6 md:col-span-1 z-40 px-6 flex flex-col justify-between my-5 md:my-10 text-zinc-50 font-mplus">
      <h2 className="font-semibold md:text-lg">My Spotify</h2>
      <div className="flex flex-col">
        <button type="button" className="text-right text-xs p-2 font-semibold text-zinc-50 hover:text-zinc-200 transition ease-in duration-100">
          View Live Project
          <span className="font-bold ml-1">
            ↗
          </span>
        </button>
        <p className="font-mplus md:text-xl mb-4 md:mb-8">My Spotify is a web application that allows you to search for your favorite songs and artists.</p>
        <button className="relative self-start bg-zinc-50 text-orange-600 font-semibold p-3 text-xs rounded-lg text-center shadow-md hover:shadow-zinc-200/20 hover:shadow-lg transition ease-in duration-100" type="button">
          View Source Code
        </button>
      </div>
    </div>
    <div className="relative row-span-1 col-start-2 col-span-5 md:col-span-1 z-20 rounded-tl-md overflow-hidden mt-3 md:mt-14">
      <Image
        src={placeholderImg}
        alt="placeholder"
        fill
        objectFit="cover"
      />
    </div>
  </div>

);

export default Project;
