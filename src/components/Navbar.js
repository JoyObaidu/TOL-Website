"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 z-20 w-full flex justify-center">
      <div className="w-full mx-auto bg-white py-2 md:max-w-max md:rounded-4xl md:shadow-md px-6 flex justify-between items-center md:py-6">
        {/* Logo */}
        <Image
          src="/logos/tol-logo.png"
          alt="TechiesHub Logo"
          width={120}
          height={24}
          className="object-contain px-2"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center text-gray-700 text-sm">
          <Link href="/">Resources</Link>
          <Link href="#jobs">Jobs</Link>
          <Link href="#internships">Internships</Link>
          <Link href="#bootcamps">Bootcamps</Link>
          <Link href="#events">Events</Link>
          <Link href="#about">About</Link>
          <Button variant="primary" size="sm">
            Join Our Community
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src="/icons/hamburger-menu.png"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
{isOpen && (
  <div className="md:hidden fixed top-20 left-0 right-0 z-10 bg-white shadow-md rounded-2xl mx-4 p-6 flex flex-col gap-4 text-gray-700 text-sm">
    <Link href="/">Resources</Link>
    <Link href="#jobs">Jobs</Link>
    <Link href="#internships">Internships</Link>
    <Link href="#bootcamps">Bootcamps</Link>
    <Link href="#events">Events</Link>
    <Link href="#about">About</Link>
    <Button variant="primary" size="sm" className="w-full">
      Join Our Community
    </Button>
  </div>
)}

    </nav>
  );
}
