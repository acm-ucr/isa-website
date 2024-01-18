"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/navlogo.webp";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { items } from "@/data/nav";
import { FaMinus } from "react-icons/fa6";

const Navigation = () => {
  const pathname = usePathname().slice(1);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="w-full p-2 bg-gradient-to-r from-isa-blue-200 to-isa-blue-100"
    >
      <Navbar.Brand>
        <Link href="/">
          <div className="flex items-center font-bold text-3xl space-x-3">
            <Image src={Logo} alt="ISA icon" className="h-[45px] w-[45px]" />
            <div className="text-white">UCR ISA</div>
          </div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className="list-unstyled !text-transparent border-1 mr-0"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className="text-white text-2xl" />
      </Navbar.Toggle>
      <Navbar.Collapse className="justify-center items-end">
        <Nav className="ml-auto flex items-center">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              className="flex flex-col items-center hover:!text-isa-yellow-100 text-3xl font-bold text-white ml-7 mr-7"
            >
              {item.name}
              <div className="flex justify-center md:absolute bottom-1 h-1">
                {pathname === item.name && (
                  <FaMinus className="text-isa-yellow-200" />
                )}
              </div>
            </Nav.Link>
          ))}

          <Nav.Link
            href="\"
            className="flex justify-center items-center text-white text-3xl font-bold w-44 h-11 rounded-full bg-gradient-to-r from-isa-yellow-200 to-isa-yellow-100"
          >
            JOIN
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
