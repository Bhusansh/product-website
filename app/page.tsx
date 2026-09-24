"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { products } from '../lib/data';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are your products 100% organic?",
      answer: "Yes, all our products are sourced directly from nature and are 100% organic and eco-friendly."
    },
    {
      question: "Where is Lachen Essentials located?",
      answer: "We are nestled in the pristine valleys of the Himalayas, bringing you pure goodness straight from the source."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we ship across the country. We are working on bringing Lachen Essentials to the rest of the world soon."
    }
  ];

  const reviews = [
    {
      name: "Aisha M.",
      text: "The Blueberry Preserves taste exactly like the ones my grandmother used to make. Absolutely pure and delightful."
    },
    {
      name: "Rohan S.",
      text: "I start my day with the Peach Cooler. It is incredibly refreshing and you can feel the natural ingredients."
    },
    {
      name: "Meera K.",
      text: "The Seabuckthorn infusion is my new favorite. Such high quality and premium packaging."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <img src="/hero.jpg" alt="Mountains" className="mountain-bg" />

        <div className="hero-content animate-slide-up">
          <h1 style={{ marginBottom: '1.5rem' }}>Bringing you the best of Lachen</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Organic, natural, and eco-friendly products. Crafted by nature, delivered with care.
            <br/><br/>
            100% organic goodness.
          </p>
          <Link href="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </section>

      <div className="container">
        {/* Feature 1 */}
        <section className="feature-section">
          <div className="feature-image-wrapper">
            <Image src="/product_1.jpg" alt="Blueberry Preserves" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="feature-text">
            <h2>Wild Blueberry Preserves</h2>
            <p>Hand-picked from the pristine slopes, our blueberries are gently preserved to retain their natural sweetness and nutritional value. A true taste of the mountains on your morning toast.</p>
            <Link href="/products" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Discover More</Link>
          </div>
        </section>

        {/* Feature 2 */}
        <section className="feature-section">
          <div className="feature-text">
            <h2>Refreshing Peach Cooler</h2>
            <p>Made with sun-ripened peaches from our orchards, this cooler is an instant refresher. No artificial colors, no preservatives, just the pure essence of Himalayan peaches.</p>
            <Link href="/products" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Taste the Freshness</Link>
          </div>
          <div className="feature-image-wrapper">
            <Image src="/product_2.jpg" alt="Peach Cooler" fill style={{ objectFit: 'cover' }} />
          </div>
        </section>

        {/* Popular Products */}
        <section style={{ padding: '4rem 0' }}>
          <h2 className="text-center">Popular Favorites</h2>
          <p className="text-center" style={{ color: 'var(--color-text-light)' }}>Our most loved products by the community.</p>
          
          <div className="products-grid">
            {products.slice(0, 4).map((p) => (
              <div className="product-card" key={p.id}>
                <div className="product-card-img">
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover', filter: p.grayscale ? 'grayscale(30%)' : p.filter || 'none' }} />
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{p.name}</h3>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '0.75rem' }}>{p.price}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <a
                    href={`https://wa.me/1234567890?text=Hi! I would like to order ${encodeURIComponent(p.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.5rem 0.75rem', fontSize: '0.78rem' }}
                  >
                    <FaWhatsapp size={14} /> Order via WhatsApp
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
          
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link href="/products" className="btn btn-primary">View All Products</Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="text-center">Frequently Asked Questions</h2>
          <div style={{ marginTop: '2rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  {faq.question}
                  <span>{activeFaq === index ? '-' : '+'}</span>
                </div>
                <div className={`faq-answer ${activeFaq === index ? 'open' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="text-center">What Our Customers Say</h2>
          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <div key={i} className="review-card">
                <div style={{ color: 'var(--color-secondary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>* * * * *</div>
                <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"{review.text}"</p>
                <p style={{ fontWeight: 600 }}>— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
