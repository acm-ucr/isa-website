import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaDiscord,
  FaYoutube,
  FaLink,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const className = "text-7xl isa-yellow-200";

export const SOCIALS = [
  {
    name: "Discord",
    icon: <FaDiscord className={className} />,
    link: "https://discord.gg/bmE32HzaKc",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className={className} />,
    link: "https://www.instagram.com/isa.ucr/",
  },
  {
    name: "Facebook",
    icon: <FaFacebookSquare className={className} />,
    link: "https://www.facebook.com/groups/isaucr/",
  },
  {
    name: "Email",
    icon: <IoMail className={className} />,
    link: "mailto:isa.highlanders@gmail.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube className={className} />,
    link: "https://www.youtube.com/@ucrisa9723",
  },
  {
    name: "Highlander",
    icon: <FaLink className={className} />,
    link: "https://highlanderlink.ucr.edu/organization/indianstudentsassociation/",
  },
];
