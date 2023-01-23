import React from 'react';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5/index';
import DropdownMenu from './DropdownMenu';
import ThemeToggle from './ThemeToggleButton';

const Header = () => (
  <header className="fixed w-full p-2 z-20 md:p-4 backdrop-blur-md">
    <div className="mx-auto max-w-4xl">
      <nav className="flex items-center gap-3 text-base">
        <Link href="/" className="group">
          <h2 className="font-bold">
            Sidney Kaguli
          </h2>
        </Link>
        <div className="items-center gap-6 hidden md:flex">
          <Link href="/"> Works </Link>
          <Link
            href="https://github.com/XsidX/sid-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <IoLogoGithub />
            Source
          </Link>
        </div>
        <div className="flex-1" />
        <ThemeToggle />
        <DropdownMenu
          tags={[
            'About',
            'Contact',
            'Projects',
            'Resume',
            'View Source',
          ]}
        />
      </nav>
    </div>
  </header>
);

export default Header;
