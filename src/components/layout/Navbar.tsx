'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGraduationCap, FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Menü açıldığında arkadaki sayfanın kaymasını engellemek için bir useEffect
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Component unmount olduğunda stilin sıfırlandığından emin ol
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#mission', label: 'Misyonumuz' },
    { href: '#programs', label: 'Programlarımız' },
    { href: '#faq', label: 'S.S.S.' },
  ];

  return (
    // Navbar'ı ve menüyü kapsayan bir fragment
    <>
      <header className="w-full bg-gray-900/70 backdrop-blur-sm fixed top-0 left-0 z-50 border-b border-gray-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <FaGraduationCap className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">DevPledge</span>
            </Link>

            {/* Masaüstü Navigasyon */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:block">
              <Button variant="primary">Destek Ol</Button>
            </div>
            
            {/* Mobil Menü Butonu (Hamburger) */}
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Menüyü aç">
                <FaBars size={28} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menü Açıkken Arkadaki İçeriği Karartan Katman (Overlay) */}
      <div
        onClick={toggleMenu}
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Sağdan Kayan Mobil Menü Paneli */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-full w-4/5 max-w-sm bg-gray-900 shadow-xl
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Menü Başlığı ve Kapatma Butonu */}
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <span className="text-xl font-bold text-white">Menü</span>
            <button onClick={toggleMenu} aria-label="Menüyü kapat">
              <FaTimes size={28} className="text-white" />
            </button>
          </div>

          {/* Menü Linkleri */}
          <nav className="flex flex-col items-start space-y-6 p-6 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-cyan-400 text-xl transition-colors w-full"
                onClick={toggleMenu} // Linke tıklayınca menüyü kapat
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Menü Altındaki Buton */}
          <div className="p-6 border-t border-gray-700">
            <Button variant="primary" className="w-full">Destek Ol</Button>
          </div>
        </div>
      </div>
    </>
  );
};
