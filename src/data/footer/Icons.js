import React from "react";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const className = "text-4xl";
export const ICONS = [
  {
    link: "https://www.instagram.com",
    logo: <FaInstagram className={className} />,
  },
  {
    link: "https://www.gmail.com",
    logo: <IoMail className={className} />,
  },
  {
    link: "https://www.facebook.com",
    logo: <FaFacebookSquare className={className} />,
  },
  {
    link: "https://www.linkedin.com",
    logo: <FaLinkedin className={className} />,
  },
];
