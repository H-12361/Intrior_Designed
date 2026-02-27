import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();
  const [selectedTimeline, setSelectedTimeline] = useState(null);

  const timelineDetails = {
    "2014": {
      title: "The Beginning",
      desc: "Our first studio in a small garage, focusing on organic materials.",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c",
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2"
      ]
    },
    "2017": {
      title: "McGee & Co. Launch",
      desc: "Launching our curated furniture line that redefined modern classic style.",
      images: [
        "https://images.unsplash.com/photo-1556761175-b413da4baf72",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      ]
    },
    "2021": {
      title: "The McGee Home",
      desc: "A milestone project that showcased our full-scale architectural capabilities.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
      ]
    }
  };

  // 4 images se hata kar 3 images kar di hain
  const evolutionSteps = [
    { year: "2014", title: "The Beginning", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" },
    { year: "2017", title: "McGee & Co.", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" },
    { year: "2021", title: "The McGee Home", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" }
  ];

  useGSAP(() => {
    gsap.utils.toArray(".reveal-text").forEach((text) => {
      gsap.from(text, {
        scrollTrigger: { trigger: text, start: "top 92%" },
        y: 30, opacity: 0, duration: 1, ease: "power3.out"
      });
    });

    gsap.from(".timeline-card", {
      scrollTrigger: { trigger: ".timeline-grid", start: "top 85%" },
      y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: "power2.out"
    });
  }, { scope: container });

  return (
    <div ref={container} style={{ backgroundColor: '#F9F7F4', color: '#2D2D2D', overflowX: 'hidden' }}>
      
      {/* Modal / Layer */}
      {selectedTimeline && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: '#F9F7F4',
          zIndex: 10000, padding: '60px 5%', overflowY: 'auto'
        }}>
          <button 
            onClick={() => setSelectedTimeline(null)}
            style={{ position: 'fixed', top: '20px', right: '20px', border: 'none', background: '#2D2D2D', color: '#fff', padding: '10px 15px', fontSize: '0.7rem', cursor: 'pointer', letterSpacing: '2px', borderRadius: '2px' }}
          >
            CLOSE [X]
          </button>
          
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <span style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', fontFamily: 'serif', opacity: 0.1, display: 'block' }}>{selectedTimeline}</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontFamily: 'serif', marginTop: '-15px' }}>{timelineDetails[selectedTimeline].title}</h2>
            <p style={{ fontSize: '1rem', maxWidth: '600px', margin: '20px 0 40px', lineHeight: 1.6, color: '#555' }}>
              {timelineDetails[selectedTimeline].desc}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
              {timelineDetails[selectedTimeline].images.map((img, i) => (
                <img key={i} src={img} style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} alt="Detail" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        alignItems: 'center', 
        padding: '80px 5%',
        gap: '40px'
      }}>
        <div style={{ flex: '1 1 300px', zIndex: 10 }}>
          <p className="reveal-text" style={{ letterSpacing: '5px', fontSize: '0.65rem', marginBottom: '15px', fontWeight: 'bold' }}>SINCE 2014</p>
          <h1 className="reveal-text" style={{ fontSize: 'clamp(2.2rem, 8vw, 4.5rem)', fontFamily: 'serif', fontStyle: 'italic', fontWeight: '300', lineHeight: 1.1 }}>
            Architecture <br/> Meets Soul.
          </h1>
        </div>
        <div style={{ flex: '1.2 1 300px', height: 'clamp(300px, 60vh, 70vh)', overflow: 'hidden', borderRadius: '4px' }}>
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Hero" />
        </div>
      </section>

      {/* Evolution Section - Now 3 Items Only */}
      <section style={{ padding: '80px 5%' }}>
        <h2 className="reveal-text" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontFamily: 'serif', marginBottom: '40px', textAlign: 'center' }}>The Studio Evolution</h2>
        <div className="timeline-grid" style={{ 
          display: 'grid', 
          // repeat(3, 1fr) for desktop, auto-fill for mobile
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {evolutionSteps.map((step, idx) => (
            <div key={idx} className="timeline-card" onClick={() => setSelectedTimeline(step.year)} style={{ cursor: 'pointer' }}>
              <div style={{ width: '100%', aspectRatio: '4/5', overflow: 'hidden', marginBottom: '15px', borderRadius: '2px' }}>
                <img 
                  src={step.img} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  alt={step.year} 
                />
              </div>
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'serif' }}>{step.year}</h3>
              <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '2px' }}>{step.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Principles Section */}
      <section style={{ padding: '80px 5%', backgroundColor: '#2D2D2D', color: '#F9F7F4' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          flexWrap: 'wrap-reverse', 
          gap: '50px', 
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ flex: '1 1 300px' }}>
            <h2 className="reveal-text" style={{ fontSize: '2rem', fontFamily: 'serif', marginBottom: '30px' }}>Design Principles</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {[
                { n: "01", t: "Natural Light", d: "We believe windows are the most important furniture." },
                { n: "02", t: "Material Honesty", d: "Authentic wood, stone, and linen." },
                { n: "03", t: "Timelessness", d: "Spaces that age gracefully over decades." }
              ].map((item, i) => (
                <div key={i}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '5px', color: '#c5a059' }}>{item.n}. {item.t}</h4>
                  <p style={{ opacity: 0.7, fontSize: '0.85rem', lineHeight: 1.5 }}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: '1 1 300px', height: '450px', overflow: 'hidden', borderRadius: '2px' }}>
             <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Design" />
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '60px 10%' }}>
        <h3 className="reveal-text" style={{ fontSize: 'clamp(1.3rem, 4vw, 2.2rem)', fontFamily: 'serif', fontStyle: 'italic', fontWeight: '300', maxWidth: '800px', lineHeight: 1.4 }}>
          "The best rooms have something to say about the people who live in them."
        </h3>
        <p className="reveal-text" style={{ marginTop: '20px', letterSpacing: '4px', opacity: 0.5, fontSize: '0.65rem' }}>- STUDIO PHILOSOPHY</p>
      </section>

    </div>
  );
};

export default About;