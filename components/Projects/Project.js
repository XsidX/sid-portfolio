import React from 'react';
import Image from 'next/image';
import placeholderImg from '../../public/images/works/mySpotify1.png';

const Project = () => (
  <div className="relative h-project rounded-md overflow-hidden">
    <div className="absolute inset-0 bg-orange-600 opacity-75 z-10" />
    <Image
      src="https://framerusercontent.com/images/0u1KOKQqa7zWlOeQzGyjGsYTIEU.png"
      alt="Framer X"
      fill
      objectFit="cover"
    />
    <div className="absolute right-0 top-16 bottom-0 left-1/2 z-20 rounded-tl-md overflow-hidden">
      <Image
        src={placeholderImg}
        alt="Framer X"
        fill
        objectFit="cover"
      />
    </div>
    <div className="z-40 absolute top-0 bottom-0 right-1/2 px-6 flex flex-col justify-between my-10 text-zinc-50">
      <h2 className="font-semibold font-mplus text-lg">My Spotify</h2>
      <div className="flex flex-col gap-8">
        <p className="font-mplus text-xl">My Spotify is a web application that allows you to search for your favorite songs and artists.</p>
        <button className="relative self-start bg-zinc-50 text-orange-600 font-semibold font-mplus p-3 text-xs rounded-lg text-center shadow-md hover:shadow-zinc-200/20 hover:shadow-lg transition ease-in duration-100" type="button">
          View Live Project
        </button>
      </div>
    </div>
  </div>

);

export default Project;
