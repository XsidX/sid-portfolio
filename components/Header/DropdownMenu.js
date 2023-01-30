import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import React, { Fragment } from 'react';
import { IoMenu } from 'react-icons/io5/index';
import PropTypes from 'prop-types';
import DropdownMenuItem from './DropdownMenuItem';

const scrollTarget = {
  About: 'top',
  Contact: 'contact',
  Projects: 'works',
};

const DropdownMenu = ({ tags }) => (
  <Menu as="div" className="relative inline-block md:hidden text-left">
    <div>
      <Menu.Button
        className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-orange-200 dark:hover:bg-zinc-800 focus:outline-none transition-all"
        aria-label="menu"
      >
        <IoMenu className="h-5 w-5" />
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-400 dark:border-zinc-700 bg-orange-50 dark:bg-zinc-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700">
        <div className="py-1">
          {tags.map((tag) => (
            <DropdownMenuItem
              key={tag}
            >
              {
                tag !== 'Resume' && tag !== 'View Source' && (
                  <ScrollLink
                    to={scrollTarget[tag] || 'top'}
                    spy
                    smooth
                    className="block text-left"
                  >
                    {tag}
                  </ScrollLink>
                )
              }

              {
                tag === 'Resume' && (
                  <Link
                    href="https://docs.google.com/document/d/1btaz3XeCDcBAyHtDCu0hQO2_E5L65bBoTJrepi6fip8/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-left"
                  >
                    {tag}
                  </Link>
                )
              }

              {
                tag === 'View Source' && (
                  <Link
                    href="https://github.com/XsidX/sid-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-left"
                  >
                    {tag}
                  </Link>
                )
              }
            </DropdownMenuItem>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

DropdownMenu.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default DropdownMenu;
