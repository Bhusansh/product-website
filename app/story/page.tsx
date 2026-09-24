import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function StoryPage() {
  return (
    <div className="page-container story-hero">

      {/* Hero Image — full bleed */}
      <div style={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden' }}>
        <Image
          src="/story_valley.jpg"
          alt="Himalayan Valley — the home of Lachen Essentials"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(44,51,45,0.15) 0%, rgba(44,51,45,0.55) 100%)',
        }} />
        {/* Caption */}
        <div style={{
          position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)',
          textAlign: 'center', color: 'white', zIndex: 2,
        }}>
          <p style={{
            textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem',
            marginBottom: '0.5rem', opacity: 0.85,
          }}>
            Lachen, Sikkim Himalayas
          </p>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            Our Story
          </h1>
        </div>
      </div>

      <div className="container">
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>

          {/* Section 1 */}
          <div style={{ padding: '4rem 0 2rem' }}>
            <p style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem', color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
              Where It All Began
            </p>
            <h2 style={{ marginBottom: '1.5rem' }}>Roots in the Himalayas</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--color-text-light)' }}>
              Lachen Essentials was born out of a profound respect for the mountains and a desire to bring their pure, untouched goodness to the world. Nestled high in the Himalayan valleys of Sikkim, our journey began with a simple belief: nature provides everything we need to thrive.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--color-text-light)', marginTop: '1rem' }}>
              For generations, the people of Lachen have lived in harmony with the earth, cultivating robust herbs and sweet fruits fed by glacial streams and crisp mountain air. We wanted to capture that essence — the vitality of the mountains — and share it with you.
            </p>
          </div>

          {/* Harvest image — inline */}
          <div style={{ position: 'relative', width: '100%', height: '420px', borderRadius: '12px', overflow: 'hidden', margin: '2rem 0' }}>
            <Image
              src="/story_harvest.jpg"
              alt="Hand-harvesting wild berries in the Himalayan forest"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(44,51,45,0.7), transparent)',
              padding: '1.5rem',
              color: 'white', fontSize: '0.85rem', letterSpacing: '1px',
            }}>
              Hand-harvested by local farmers in the forests of Lachen
            </div>
          </div>

          {/* Section 2 */}
          <div style={{ padding: '2rem 0' }}>
            <p style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem', color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
              Our Philosophy
            </p>
            <h2 style={{ marginBottom: '1.5rem' }}>Crafted by Nature, Delivered with Care</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--color-text-light)' }}>
              Every jar of our wild preserves and every bottle of our coolers is a testament to our commitment to 100% organic goodness. We work directly with local farmers who employ eco-friendly, sustainable agricultural practices — protecting both the land and the livelihoods of the communities that depend on it.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: 'var(--color-text-light)', marginTop: '1rem' }}>
              We don't believe in shortcuts. There are no artificial preservatives, colors, or hidden additives in our products. When you taste a Lachen Essentials product, you are experiencing the authentic, untamed flavor of the Himalayas.
            </p>
          </div>

          {/* Values grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem', margin: '2rem 0 3rem',
          }}>
            {[
              { label: '100% Organic', desc: 'Certified organic produce from verified local farms.' },
              { label: 'Zero Additives', desc: 'No artificial preservatives, colors, or flavors.' },
              { label: 'Eco Packaging', desc: 'Thoughtful packaging that minimizes waste.' },
              { label: 'Fair Trade', desc: 'Farmers are paid fairly for their precious harvest.' },
            ].map((v) => (
              <div key={v.label} style={{
                padding: '1.5rem',
                border: '1px solid rgba(74,93,78,0.15)',
                borderRadius: '8px',
                background: 'var(--color-surface)',
              }}>
                <p style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{v.label}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Promise block */}
          <div style={{
            textAlign: 'center', padding: '3rem 2rem',
            background: 'var(--color-primary)', borderRadius: '12px',
            color: 'var(--color-background)', marginBottom: '4rem',
          }}>
            <p style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem', color: 'var(--color-secondary)', marginBottom: '1rem' }}>
              Our Promise
            </p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', lineHeight: '1.7', margin: '0 0 2rem', fontStyle: 'italic' }}>
              "To protect the earth that provides for us, and to nourish the bodies that rely on it."
            </p>
            <a
              href="https://wa.me/1234567890?text=Hi! I would like to know more about Lachen Essentials products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: '#25D366', color: 'white',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              }}
            >
              <FaWhatsapp size={18} /> Get in Touch
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
