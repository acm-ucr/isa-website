import React from "react";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const ICONS = [
  {
    link: "https://www.instagram.com",
    logo: <FaInstagram className="text-2xl" />,
  },
  {
    link: "https://www.gmail.com",
    logo: <IoMail className="text-2xl" />,
  },
  {
    link: "https://www.facebook.com",
    logo: <FaFacebookSquare className="text-2xl" />,
  },
  {
    link: "https://www.linkedin.com",
    logo: <FaLinkedin className="text-2xl" />,
  },
];
