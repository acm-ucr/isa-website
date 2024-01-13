"use client"
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Logo from "./assets/blue-yellow-logo.png";
import { items } from "@/data/nav"

const Navigation = () => {
  return (
    <Navbar className="w-full bg-gradient-to-r from-isa-blue-200 to-isa-blue-100">
      <Navbar.Brand>
        <Link href="/">
            <div className="flex">
                <img src={Logo} />
                <div className="text-white">UCR ISA</div>
            </div>
        </Link>
      </Navbar.Brand>
      <Nav
        className="ml-auto"
      >
        {items.map((item, index) => (
            <Nav.Link
                as={Link}
                key={index}
                href={item.link}
                pathname={item.name}
                
            >
                <div className="text-white hover:text-isa-yellow-100">
                    {item.name}
                </div>


            </Nav.Link>
        ))}

      
            <Nav.Link>
                <div className="flex justify-center items-center text-white w-20 rounded-full w-full h-7 bg-gradient-to-r from-isa-yellow-200 to-isa-yellow-100">
                    JOIN
                </div>
            </Nav.Link>
        </Nav>
    </Navbar>
  );
};

export default Navigation;
