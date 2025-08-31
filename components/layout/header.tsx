'use client';

import { useEffect, useState } from 'react';
import { Menu, X,} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/hackathons' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hydrated, setHydrated] = useState(false); // for hydration safety

  useEffect(() => {
    setHydrated(true); // ensures no SSR mismatch
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const scrollToSection = (href: string) => {
  //   if (!hydrated) return;

  //   if (href.startsWith('#')) {
  //     const element = document.querySelector(href);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //       setIsOpen(false);
  //     }
  //   } else {
  //     router.push(href);
  //     setIsOpen(false);
  //   }
  // };
  ////////////////////////////////////
  //   const scrollToSection = (href: string) => {
  //   if (!hydrated) return;

  //   const isAnchor = href.startsWith('#');
  //   if (isAnchor) {
  //     const element = document.querySelector(href);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //       setIsOpen(false);
  //     }
  //   } else {
  //     // Navigate to another page
  //     router.push(href);
  //     setIsOpen(false);
  //   }
  // };

  const navigateToPage = (href: string) => {
    // console.log("Navigating to", href); // DEBUG
    if (!hydrated) return;
    router.push(href);
    setIsOpen(false);
  };



  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/95 backdrop-blur-md border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <Code className="h-8 w-8 text-primary" /> */}
            <Image src="/Tech4Hack.png" alt="Tech4Hack Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl text-foreground">Tech4Hack</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToPage(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigateToPage(item.href)}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
