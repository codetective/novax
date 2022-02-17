import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export const ScrollToTop = () => {
  scroll.scrollToTop();
};

export default function ScrollLink({ children }) {
  return (
    <Link
      activeClass="active"
      to="section1"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {children}
    </Link>
  );
}
