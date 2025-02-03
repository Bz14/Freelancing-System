import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-primary text-gray-300 py-10">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="mr-4">
        <h3 className="text-xl font-semibold text-white">About Us</h3>
        <p className="mt-2 text-sm">
          We connect top freelancers with businesses worldwide. Safe, secure,
          and efficient.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">Quick Links</h3>
        <ul className="mt-2 space-y-2 text-sm">
          <li className="hover:text-secondary">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-secondary">
            <Link href="/terms">Terms & Conditions</Link>
          </li>
          <li className="hover:text-secondary">
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li className="hover:text-secondary">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white">Follow Us</h3>
        <div className="flex space-x-4 mt-3">
          <Link href="https://facebook.com" target="_blank">
            <FaFacebook className="w-6 h-6 hover:text-blue-500" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter className="w-6 h-6 hover:text-blue-400" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin className="w-6 h-6 hover:text-blue-600" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram className="w-6 h-6 hover:text-pink-500" />
          </Link>
        </div>
      </div>
    </div>
    <div className="text-center mt-6 text-sm border-t border-gray-700 pt-4">
      © {new Date().getFullYear()} FreelanceHub. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
