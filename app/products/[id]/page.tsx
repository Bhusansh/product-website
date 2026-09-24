import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaWhatsapp, FaArrowLeft, FaLeaf } from 'react-icons/fa';
import { products } from '../../../lib/data';

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="page-container container">

      {/* Back link */}
      <Link
        href="/products"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--color-text-light)',
          marginBottom: '2rem',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          fontWeight: 500,
          transition: 'color 0.2s',
        }}
      >
        <FaArrowLeft size={12} /> All Products
      </Link>

      {/* Main product layout */}
      <div className="product-detail-grid">

        {/* Image */}
        <div className="product-detail-image">
          <Image
            src={product.img}
            alt={product.name}
            fill
            priority
            style={{
              objectFit: 'cover',
              filter: product.grayscale ? 'grayscale(30%)' : product.filter || 'none',
            }}
          />
        </div>

        {/* Info panel */}
        <div className="product-detail-info">
          <p style={{
            textTransform: 'uppercase', letterSpacing: '3px',
            fontSize: '0.75rem', color: 'var(--color-secondary)', marginBottom: '0.5rem',
          }}>
            Lachen Essentials
          </p>

          <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '0.75rem' }}>
            {product.name}
          </h1>

          <p style={{ fontSize: '1.8rem', color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
            {product.price}
          </p>

          <p style={{ color: 'var(--color-text-light)', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '2rem' }}>
            {product.description}
          </p>

          {/* Features */}
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem' }}>
            {product.features.map((f, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(74,93,78,0.1)',
                  color: 'var(--color-text)',
                  fontSize: '0.95rem',
                }}
              >
                <FaLeaf size={14} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                {f}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href={`https://wa.me/1234567890?text=Hi! I would like to order: *${encodeURIComponent(product.name)}* (${encodeURIComponent(product.price)})`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '0.6rem', fontSize: '1rem', background: '#25D366',
              }}
            >
              <FaWhatsapp size={20} /> Order via WhatsApp
            </a>
            <Link
              href="/contact"
              className="btn btn-secondary"
              style={{ textAlign: 'center' }}
            >
              Ask a Question
            </Link>
          </div>

          {/* Trust badge */}
          <div style={{
            marginTop: '2rem', padding: '1rem 1.25rem',
            background: 'rgba(74,93,78,0.06)',
            borderRadius: '6px',
            fontSize: '0.85rem', color: 'var(--color-text-light)',
            display: 'flex', gap: '0.5rem', alignItems: 'center',
          }}>
            <FaLeaf style={{ color: 'var(--color-primary)' }} />
            100% organic — no artificial preservatives, no additives. Straight from the Himalayas.
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(74,93,78,0.12)' }}>
          <h2 style={{ marginBottom: '2rem', fontSize: '1.6rem' }}>You Might Also Like</h2>
          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {related.map((p) => (
              <div className="product-card" key={p.id}>
                <div className="product-card-img">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    style={{
                      objectFit: 'cover',
                      filter: p.grayscale ? 'grayscale(30%)' : p.filter || 'none',
                    }}
                  />
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{p.name}</h3>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '1rem' }}>{p.price}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <a
                    href={`https://wa.me/1234567890?text=Hi! I would like to order: *${encodeURIComponent(p.name)}*`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: '0.4rem', padding: '0.5rem', fontSize: '0.78rem', background: '#25D366',
                    }}
                  >
                    <FaWhatsapp size={13} /> Order via WhatsApp
                  </a>
                  <Link
                    href={`/products/${p.id}`}
                    className="btn btn-secondary"
                    style={{ display: 'block', textAlign: 'center', padding: '0.5rem', fontSize: '0.78rem' }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
