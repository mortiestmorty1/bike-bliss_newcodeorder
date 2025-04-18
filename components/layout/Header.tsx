"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { status } = useSession();

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/login" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1B23] py-4">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-medium text-white">
            Bike Bliss
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-gray-200 transition-colors text-base"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-gray-200 transition-colors text-base"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="text-white hover:text-gray-200 transition-colors text-base"
            >
              Faqs
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/shoaib-ahmed-94ba3225b"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6366F1] text-white px-6 py-2 rounded-lg hover:bg-[#5558DA] transition-colors text-base"
            >
              Contact
            </a>
            {status === "authenticated" && (
              <button
                onClick={handleLogout}
                className="bg-white/10 text-white px-6 py-2 rounded-lg hover:bg-white/20 transition-colors text-base"
              >
                Logout
              </button>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-white hover:text-gray-200 transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-gray-200 transition-colors text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('faqs')}
                className="text-white hover:text-gray-200 transition-colors text-left"
              >
                Faqs
              </button>
              <a
                href="https://www.linkedin.com/in/shoaib-ahmed-94ba3225b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6366F1] text-white px-4 py-2 rounded-lg hover:bg-[#5558DA] transition-colors inline-block text-center"
              >
                Contact
              </a>
              {status === "authenticated" && (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors text-center"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
