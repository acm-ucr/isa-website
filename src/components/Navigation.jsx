"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/navlogo.webp";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { items } from "@/data/Nav";

const Navigation = () => {
  const pathname = usePathname().slice(1);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="w-full p-2 bg-gradient-to-r from-isa-blue-200 to-isa-blue-100 sticky top-0 z-50 "
    >
      <Navbar.Brand>
        <Link href="/">
          <div className="flex items-center font-bold text-3xl space-x-3 ">
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
        <Nav className="ml-auto flex items-center justify-center">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              className="flex flex-col items-center hover:!text-isa-yellow-100 text-3xl font-bold text-white ml-7 mr-7 "
            >
              {item.name}
              <div className="flex justify-center md:absolute md:mt-9">
                <div
                  className={
                    pathname === item.name
                      ? "bg-gradient-to-r from-isa-yellow-200 to-isa-yellow-100 px-4 py-1 rounded-full "
                      : "hidden"
                  }
                ></div>
              </div>
            </Nav.Link>
          ))}

          <Nav.Link
            href="https://discord.gg/bmE32HzaKc"
            className="flex justify-center items-center text-white text-3xl font-bold w-44 h-11 rounded-full bg-gradient-to-r from-isa-yellow-200 to-isa-yellow-100 mt-2 mb-2 hover:shadow-inner"
          >
            JOIN
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
