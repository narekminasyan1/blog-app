'use client'
import React from 'react';
import Link from 'next/link';

const VARIANT_DEFAULT = {
  primary: 'bg-blue-600 text-white',
  secondary: 'bg-gray-500 text-white',
  default:'text-black'
};

const Button = ({
  variant = 'primary',
  component = 'button',
  children,
  className = '',
  ...rest
}) => {
  const classes = `${VARIANT_DEFAULT[variant]}  px-4 py-2 rounded ${className}`;

  if (component === 'link') {
    return (
      <Link  className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
