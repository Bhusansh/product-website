import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { products } from '../../lib/data';

export default function ProductsPage() {
  return (
    <div className="page-container container">
      <h1 className="text-center" style={{ marginTop: '2rem' }}>Our Products</h1>
      <p className="text-center" style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto 3rem' }}>
        Explore our complete range of 100% organic products crafted by nature in the valleys of Lachen.
      </p>

      <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-card-img">
              <Image 
                src={p.img} 
                alt={p.name} 
                fill 
                style={{ 
                  objectFit: 'cover', 
                  filter: p.grayscale ? 'grayscale(30%)' : p.filter || 'none' 
                }} 
              />
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{p.name}</h3>
            <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '1rem' }}>{p.price}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href={`https://wa.me/1234567890?text=Hi! I would like to order ${encodeURIComponent(p.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.6rem 1rem', fontSize: '0.85rem' }}
              >
                <FaWhatsapp size={16} /> Order via WhatsApp
              </a>
              <Link
                href={`/products/${p.id}`}
                className="btn btn-secondary"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.6rem 1rem', fontSize: '0.85rem' }}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
