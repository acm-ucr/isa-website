import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaDiscord,
  FaYoutube,
  FaLink,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const className = "text-5xl isa-yellow-200";

export const SOCIALS = [
  {
    name: "Discord",
    icon: <FaDiscord className={className} />,
    link: "https://www.discord.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className={className} />,
    link: "https://www.instagram.com/isa.ucr/",
  },
  {
    name: "Facebook",
    icon: <FaFacebookSquare className={className} />,
    link: "https://www.facebook.com",
  },
  {
    name: "Email",
    icon: <IoMail className={className} />,
    link: "https://www.gmail.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube className={className} />,
    link: "https://www.youtube.com",
  },
  {
    name: "Highlander",
    icon: <FaLink className={className} />,
    link: "https://www.highlanderlink.ucr.edu/organization/indianstudentsassociation",
  },
];
