import React from "react";
import CommunityIcon from "@/public/assets/community.svg";
import GradCap from "@/public/assets/gradcap.svg";
import Temple from "@/public/assets/temple.svg";
import Image from "next/image";

export const VALUES = [
  {
    title: "Cultural",
    icon: <Image src={Temple} alt="Temple" height={50} />,
    description:
      "Embrace and celebrate the rich diversity of Indian culture, fostering an inclusive environment for all.",
  },
  {
    title: "Community",
    icon: <Image src={CommunityIcon} alt="Community Icon" height={50} />,
    description:
      "Actively contribute to local and global communities through service initiatives and partnerships.",
  },
  {
    title: "Academic",
    icon: <Image src={GradCap} alt="Graduation Cap" height={50} />,
    description:
      "Dedication to supporting academic growth and success among our members.",
  },
];
