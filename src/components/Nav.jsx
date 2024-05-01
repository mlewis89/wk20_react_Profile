// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {

const currentPage = useLocation().pathname;
console.log(currentPage);

  return (
    <Navbar
      links={[
        <Link key={1} className={currentPage === '/' ? 'nav-link active' : 'nav-link'} to="/">
          Home
        </Link>,
        <Link key={2} className={currentPage === '/about-me' ? 'nav-link active' : 'nav-link'} to="/about-me">
          About Me
        </Link>,
        <Link key={3} className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'} to="/portfolio">
          Portfolio
        </Link>,
        <Link key={4} className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'} to="/contact">
          Contact
        </Link>,
        <Link key={5} className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'} to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
