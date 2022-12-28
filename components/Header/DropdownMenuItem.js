import React from 'react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DropdownMenuItem = ({ children, href }) => (
  <Menu.Item>
    {({ active }) => (
      <Link
        href={href}
        className={classNames(
          active ? 'bg-orange-200 dark:bg-zinc-700' : '',
          'block px-4 py-2 text-sm',
        )}
      >
        {children}
      </Link>
    )}
  </Menu.Item>
);

DropdownMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default DropdownMenuItem;
