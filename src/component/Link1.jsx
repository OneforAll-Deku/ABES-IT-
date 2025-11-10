import React from 'react';
import { Link } from 'react-router-dom';

const Link1 = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

export default Link1;