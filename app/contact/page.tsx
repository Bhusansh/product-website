"use client";

import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="page-container container">
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gap: '4rem', gridTemplateColumns: '1fr', padding: '2rem 0' }}>
        
        {/* Contact Info Header */}
        <div className="text-center">
          <h1 style={{ marginTop: '2rem' }}>Get in Touch</h1>
          <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
            Whether you have a question about our products, shipping, or just want to say hello, we'd love to hear from you.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {/* Contact Details & Socials */}
          <div style={{ padding: '2rem', background: 'var(--color-surface)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Contact Information</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <strong>Email</strong><br/>
              <a href="mailto:support@lachenessentials.com" style={{ color: 'var(--color-primary)' }}>support@lachenessentials.com</a>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <strong>Phone / WhatsApp</strong><br/>
              <a href="https://wa.me/1234567890" style={{ color: 'var(--color-primary)' }}>+91 12345 67890</a>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <strong>Location</strong><br/>
              Lachen Valley, Himalayas
            </div>

            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Follow Us</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.8rem', fontSize: '1.2rem', width: '45px', height: '45px' }} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.8rem', fontSize: '1.2rem', width: '45px', height: '45px' }} aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.8rem', fontSize: '1.2rem', width: '45px', height: '45px' }} aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Contact Form (UI Only) */}
          <div style={{ padding: '2rem', background: 'var(--color-surface)', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                <input type="text" placeholder="Your full name" style={{ width: '100%', padding: '0.8rem', border: '1px solid rgba(74, 93, 78, 0.2)', borderRadius: '4px', fontFamily: 'var(--font-sans)' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                <input type="email" placeholder="Your email address" style={{ width: '100%', padding: '0.8rem', border: '1px solid rgba(74, 93, 78, 0.2)', borderRadius: '4px', fontFamily: 'var(--font-sans)' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                <textarea placeholder="How can we help you?" rows={5} style={{ width: '100%', padding: '0.8rem', border: '1px solid rgba(74, 93, 78, 0.2)', borderRadius: '4px', fontFamily: 'var(--font-sans)', resize: 'vertical' }}></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}