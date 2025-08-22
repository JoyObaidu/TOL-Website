// src/components/ui/Footer.js
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

// Place your social icons in /public/icons/
const socialLinks = [
  { src: "/logos/twitter.png", alt: "Facebook", href: "https://facebook.com" },
  { src: "/logos/logo-instagram 1.png", alt: "Twitter", href: "https://twitter.com" },
  { src: "/logos/linkedin-logo.png", alt: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Techies</h2>
          <p className="text-gray-400">
            Building the future with innovation, collaboration, and technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-white transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className="p-2 rounded-full hover:bg-blue-600 transition flex items-center justify-center"
              >
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={20}
                  height={20}
                  className="invert"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-700" />

      {/* Bottom Row: Privacy + Terms + Copyright */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm space-y-4 md:space-y-0">
        <div className="flex space-x-4">
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-white transition">
            Terms & Conditions
          </Link>
        </div>
        <div>
          © {new Date().getFullYear()} Techies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
