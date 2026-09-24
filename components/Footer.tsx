import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Mountain Shape Divider */}
      <div className="footer-mountain-shape">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L0,40 C150,40 200,90 300,90 C400,90 450,20 600,20 C750,20 800,80 900,80 C1000,80 1050,50 1200,50 L1200,120 Z" fill="#2c332d" />
        </svg>
      </div>

      <div className="container footer-content">
        <div className="footer-grid">
          {/* Brand & Social */}
          <div className="footer-brand">
            <h2 style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>Lachen Essentials</h2>
            <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>From Earth, For You.</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Shortcuts */}
          <div className="footer-links">
            <h3 style={{ color: 'var(--color-background)', marginBottom: '1rem', fontSize: '1.1rem' }}>Explore</h3>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/story">Our Story</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Legal */}
          <div className="footer-links">
            <h3 style={{ color: 'var(--color-background)', marginBottom: '1rem', fontSize: '1.1rem' }}>Legal</h3>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Refund Policy</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Lachen Essentials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
