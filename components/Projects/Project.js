import React from 'react';
import Image from 'next/image';

const Project = () => (
  <div className="relative h-project">
    <div className="absolute inset-0 bg-blue-600 opacity-50 z-10" />
    <Image
      src="https://framerusercontent.com/images/0u1KOKQqa7zWlOeQzGyjGsYTIEU.png"
      alt="Framer X"
      layout="fill"
      objectFit="cover"
    />
  </div>

);

export default Project;
