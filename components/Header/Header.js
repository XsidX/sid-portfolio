import React from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { IoLogoGithub } from 'react-icons/io5/index';
import DropdownMenu from './DropdownMenu';
import ThemeToggle from './ThemeToggleButton';

const Header = () => (
  <header className="fixed w-full py-2 px-5 z-20 md:p-4 backdrop-blur-md dark:text-zinc-50">
    <div className="mx-auto max-w-5xl">
      <nav className="flex items-center gap-5 text-base">
        <ScrollLink to="top" spy smooth className="group">
          <button type="button" className="font-semibold">
            Sidney Kaguli
          </button>
        </ScrollLink>
        <div className="items-center gap-6 hidden md:flex">
          <ScrollLink to="works" spy smooth>
            <button type="button" className="hover:underline underline-offset-4">
              Works
            </button>
          </ScrollLink>
          <ScrollLink to="contact" spy smooth>
            <button type="button" className="hover:underline underline-offset-4">
              Contact
            </button>
          </ScrollLink>
          <Link
            href="https://docs.google.com/document/d/1Fg2qQOS2DUQ9nt2wWuEzuwG4JHrVEiY85zPv2G2S0nA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            Resume
          </Link>
          <Link
            href="https://github.com/XsidX/sid-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <IoLogoGithub />
            <span className="hover:underline underline-offset-4">Source</span>
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
