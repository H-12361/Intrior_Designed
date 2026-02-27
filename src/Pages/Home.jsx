import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import About from './About';
import Services from './Services';

const Home = () => {
  const container = useRef();

  const slides = [
    { id: 1, url: "https://media.istockphoto.com/id/2199044624/photo/boho-living-room-interior-with-decorative-wall-dried-flowers-in-vase-rattan-armchair-book-and.jpg?s=1024x1024&w=is&k=20&c=vx3-QjN0qesJOZfOq3QxBZID2jemEWgrz_vzOfg_zbA=" },
    { id: 2, url: "https://media.istockphoto.com/id/1357529222/photo/3d-rendering-of-a-dining-area-in-modern-kitchen.jpg?s=2048x2048&w=is&k=20&c=GqbASrNfHV_EtBjqq5VKqbd3aOWXmAfSE1NcL-ggc34=" },
    { id: 3, url: "https://media.istockphoto.com/id/1439677762/photo/table-on-parquet-floor-of-bright-dining-room-near-kitchen-in-modern-beach-house-or-luxury.jpg?s=1024x1024&w=is&k=20&c=pps0ZNlpNDcM2s1BhSP3B8q1zc8KmTffi99BhWj1vcc=" },
    { id: 4, url: "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f" }
  ];

  useGSAP(() => {
    const slideItems = gsap.utils.toArray(".slide-bg");
    
    // Initial Setup
    gsap.set(slideItems, { opacity: 0, scale: 1.1 });
    gsap.set(slideItems[0], { opacity: 1, scale: 1 });

    // Slider Logic
    const mainTimeline = gsap.timeline({ repeat: -1 });
    slideItems.forEach((slide, i) => {
      const nextSlide = slideItems[(i + 1) % slideItems.length];
      mainTimeline
        .to(slide, { scale: 1.05, duration: 3, ease: "none" }, i * 3)
        .to(nextSlide, { opacity: 1, scale: 1, duration: 1.2, ease: "power2.inOut" }, (i + 1) * 3 - 1.2)
        .to(slide, { opacity: 0, duration: 1.2 }, (i + 1) * 3 - 1.2);
    });

    // Blueprint & Text Reveal
    gsap.to(".blueprint-path", { strokeDashoffset: 0, duration: 2.5, ease: "power2.out" });

    const tlText = gsap.timeline();
    tlText.from(".hero-h1", { y: 70, skewY: 7, opacity: 0, duration: 1, ease: "expo.out", delay: 0.5 })
          .from(".hero-p", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5");

  }, { scope: container });

  return (
    // FIX 1: removed 'overflow: hidden' to allow scrolling
    <div ref={container} style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      
      {/* Hero Wrapper */}
      <div className="slider-wrapper" style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className="slide-bg"
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              // FIX 2: Darker overlay for better readability of Navbar and Content
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              willChange: 'transform, opacity'
            }}
          />
        ))}

        {/* Blueprint SVG Overlay */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '90%', height: '80%', zIndex: 2, pointerEvents: 'none' }}>
          <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.4 }}>
            <path 
              className="blueprint-path"
              d="M50 50 L950 50 L950 550 L50 550 Z M50 150 L500 150 M500 50 L500 550" 
              stroke="rgba(255,255,255,1)" 
              strokeWidth="0.5" 
              strokeDasharray="2500" 
              strokeDashoffset="2500" 
            />
          </svg>
        </div>

        {/* Hero Content */}
        <div style={{ position: 'absolute', zIndex: 3, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
          <div style={{ overflow: 'hidden' }}>
            <h1 className="hero-h1" style={{ fontSize: 'clamp(2rem, 8vw, 5.5rem)', fontWeight: '200', letterSpacing: '15px', textTransform: 'uppercase', margin: 0, lineHeight: 1.1 }}>
              The Atelier
            </h1>
          </div>
          <p className="hero-p" style={{ letterSpacing: '6px', opacity: 0.7, marginTop: '20px', fontSize: '0.8rem' }}>
            DESIGNING EMOTIONS THROUGH SPACE
          </p>
        </div>

        {/* Animated Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
          <div style={{ width: '1px', height: '50px', backgroundColor: '#fff', opacity: 0.4 }}></div>
        </div>
      </div>

      {/* FIX 3: Container for other sections with clear background */}
      <div style={{ position: 'relative', zIndex: 10, backgroundColor: '#fff', color: '#000' }}>
        <About />
        <Services />
      </div>

    </div>
  );
};

export default Home;