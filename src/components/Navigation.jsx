"use client";
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/navlogo.webp";
import { items } from "@/data/nav";

const Navigation = () => {
  const [isSpanVisible, setIsSpanVisible] = useState(false);

  const handleClick = () => {
    setIsSpanVisible(!isSpanVisible);
  };

  return (
    <Navbar className="w-full p-4 bg-gradient-to-r from-isa-blue-200 to-isa-blue-100">
      <Navbar.Brand>
        <Link href="/">
          <div className="flex items-center font-bold text-3xl space-x-3">
            <Image src={Logo} alt="ISA icon" className="h-[45px] w-[45px]" />
            <div className="text-white">UCR ISA</div>
          </div>
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto space-x-24">
        {items.map((item, index) => (
          <Nav.Link
            as={Link}
            key={index}
            href={item.link}
            pathname={item.name}
            className="hover:text-isa-yellow-100 text-3xl text-white"
            onClick={handleClick}
          >
            {item.name}
            {isSpanVisible && (
              <span className="bg-gradient-to-r from-isa-yellow-200 to-isa-yellow-100"></span>
            )}
          </Nav.Link>
        ))}

        <Nav.Link className="flex justify-center items-center text-white text-3xl text-bold w-44 h-11 rounded-full bg-gradient-to-r from-isa-yellow-200 to-isa-yellow-100">
          <Link href="\" className="drop-shadow-2xl">
            JOIN
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
