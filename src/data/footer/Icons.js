import React from "react";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const className = "md:text-4xl text-2xl";
export const ICONS = [
  {
    link: "https://www.instagram.com/isa.ucr/",
    logo: <FaInstagram className={className} />,
  },
  {
    link: "mailto:isa.highlanders@gmail.com",
    logo: <IoMail className={className} />,
  },
  {
    link: "https://www.facebook.com/groups/isaucr/",
    logo: <FaFacebookSquare className={className} />,
  },
  {
    link: "https://www.linkedin.com/company/indian-student-association-ucr/about/",
    logo: <FaLinkedin className={className} />,
  },
];
