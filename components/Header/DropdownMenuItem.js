import React from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DropdownMenuItem = ({ children }) => (
  <Menu.Item>
    {({ active }) => (
      <button
        type="button"
        className={classNames(
          active ? 'bg-orange-200 dark:bg-zinc-700' : '',
          'block px-4 py-2 text-sm w-full',
        )}
      >
        {children}
      </button>
    )}
  </Menu.Item>
);

DropdownMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DropdownMenuItem;
