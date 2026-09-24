"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Story', path: '/story' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="header">
        <div className="logo-text">
          <span>*</span> Lachen Essentials
        </div>
        
        <nav className="nav-links">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={pathname === link.path ? 'active' : ''}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? (
            /* Close X */
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          ) : (
            /* Hamburger */
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6"  x2="19" y2="6"  />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <Link 
            key={link.path} 
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className={pathname === link.path ? 'active' : ''}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
