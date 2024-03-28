import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactMeButton = () => {
  const navigate = useNavigate();

  const redirectToContactPage = () => {
    navigate('/contact');
  };

  return (
    <button
      className="bg-transparent border-white border-[2px] rounded-md text-white hover:shadow-sm hover:shadow-white py-1 px-[5px] mr-3  border-double hover:bg-head   "
      onClick={redirectToContactPage}
    >
      Contact Me
    </button>
  );
};

export default ContactMeButton;
