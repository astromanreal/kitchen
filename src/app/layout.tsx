'use client';

import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from "react";
import {Menu as MenuIcon, X as CloseIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when the screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navigation Bar */}
        <nav className="bg-background sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo and Title */}
              <Link href="/" className="flex items-center">
                <Image
                  src="https://picsum.photos/100/80"
                  alt="Campus Cuisine Logo"
                  width={50}
                  height={40}
                  className="mr-2 rounded-md"
                />
                <h1 className="text-xl font-bold">Campus Cuisine</h1>
              </Link>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                  aria-label="Open menu"
                >
                  {isMobileMenuOpen ? (
                    <CloseIcon className="h-6 w-6 transition-transform duration-300 transform rotate-90" />
                  ) : (
                    <MenuIcon className="h-6 w-6 transition-transform duration-300" />
                  )}
                </button>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-4">
               
                <ul className="flex space-x-4 items-center">
                <li>
                  <Button variant="outline" size="sm">
                    <Link href="tel:+918102116569">
                        Order Now
                    </Link>
                  </Button>
                  </li>
                  <li><Link href="/" className="hover:text-primary">Home</Link></li>
                  <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
                  <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                  <li><Link href="/meal-plan" className="hover:text-primary">Meal Plan</Link></li>
                </ul>
              </div>

              {/* Mobile Order Now Button */}
              <div className="md:hidden">
                <Button variant="outline" size="sm">
                  <Link href="tel:+918102116569">
                    Order Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu (Hidden by default) */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="bg-background py-2 px-4">
              <ul className="flex flex-col space-y-2">
                <li><Link href="/" className="hover:text-primary block py-2">Home</Link></li>
                <li><Link href="/pricing" className="hover:text-primary block py-2">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-primary block py-2">Contact</Link></li>
                <li><Link href="/meal-plan" className="hover:text-primary block py-2">Meal Plan</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
