import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaDiscord,
  FaYoutube,
  FaLink,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const SOCIALS = [
  {
    name: "Discord",
    icon: <FaDiscord className="text-3xl isa-yellow-200" />,
    link: "https://www.discord.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-3xl" />,
    link: "https://www.instagram.com/isa.ucr/",
  },
  {
    name: "Facebook",
    icon: <FaFacebookSquare className="text-3xl" />,
    link: "https://www.facebook.com",
  },
  {
    name: "Email",
    icon: <IoMail className="text-3xl" />,
    link: "https://www.gmail.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube className="text-3xl" />,
    link: "https://www.youtube.com",
  },
  {
    name: "Highlander",
    icon: <FaLink className="text-3xl" />,
    link: "https://www.highlanderlink.ucr.edu/organization/indianstudentsassociation",
  },
];
