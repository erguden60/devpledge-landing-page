import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
  return (
    <header className="w-full bg-gray-900/70 backdrop-blur-sm fixed top-0 left-0 z-50 border-b border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <FaGraduationCap className="h-8 w-8 text-cyan-400" />{" "}
            <span className="text-2xl font-bold text-white">DevPledge</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#mission"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Misyonumuz
            </Link>
            <Link
              href="#programs"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Programlarımız
            </Link>
            <Link
              href="#stories"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Başarı Hikayeleri
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button variant="primary">Destek Ol</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
