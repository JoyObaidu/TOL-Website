// src/components/ui/Footer.js
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

// Place your social icons in /public/icons/
const socialLinks = [
  { src: "/icons/facebook.png", alt: "Facebook", href: "https://facebook.com" },
  { src: "/icons/twitter.png", alt: "Twitter", href: "https://twitter.com" },
  { src: "/icons/linkedin.png", alt: "LinkedIn", href: "https://linkedin.com" },
  { src: "/icons/instagram.png", alt: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
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
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className="p-2 bg-gray-700 rounded-full hover:bg-blue-600 transition flex items-center justify-center"
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

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Techies. All rights reserved.
      </div>
    </footer>
  );
}
