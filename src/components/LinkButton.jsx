import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ text, to, className = '' }) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md text-white font-medium ${className}`}
    >
      {text}
    </Link>
  );
};

export default LinkButton;