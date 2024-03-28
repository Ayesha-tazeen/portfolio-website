

import { Link } from 'react-router-dom';

import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from "@mui/icons-material/GitHub"
import MailIcon from '@mui/icons-material/Mail';


const Footer = () => {
  return (
    <footer className=" bg-wall  text-semihead py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold">Ayesha tazeen</h2>
            <p className="text-sm mt-2">creative innovative Dev Queen</p>
          </div>
          <div className="flex mt-4 lg:mt-0">
            <Link to="/" className=" hover:text-head mr-4 transition duration-300">
              Portfolio
            </Link>
            <Link to="/projects" className=" hover:text-head mr-4 transition duration-300">
              Projects
            </Link>
            <Link to="/contact" className=" hover:text-head transition duration-300">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-semihead pt-6">
          <div className="flex items-center">
            <a href="https://www.linkedin.com/in/ayesha-tazeen-a097152a3/" target="_blank" rel="noopener noreferrer" className=" hover:text-head mr-4 transition duration-300">
              <i><LinkedIn /></i>
            </a>
            <a href="https://github.com/Ayesha-tazeen" target="_blank" rel="noopener noreferrer" className=" hover:text-head mr-4 transition duration-300">
              <i><GitHub /></i>
            </a>
            <a href="mailto:ayesha.khann9864@gmail.com" target="_blank" rel="noopener noreferrer" className=" hover:text-head transition duration-300">
              <i><MailIcon /></i>
            </a>
          </div>
          <p className="text-sm ">
            &copy; {new Date().getFullYear()}  All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
