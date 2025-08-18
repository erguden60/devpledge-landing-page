import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DevPledge. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
