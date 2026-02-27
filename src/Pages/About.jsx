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
    "2016": {
      title: "McGee & Co. Launch",
      desc: "Launching our curated furniture line that redefined modern classic style.",
      images: [
        "https://images.unsplash.com/photo-1556761175-b413da4baf72",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      ]
    },
    "2018": {
      title: "The McGee Home",
      desc: "A milestone project that showcased our full-scale architectural capabilities.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
      ]
    },
    "2020": {
      title: "Expanding Vision",
      desc: "Global reach and digital transformation of how people design homes.",
      images: [
        "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20",
        "https://images.unsplash.com/photo-1565374395542-0ce18882c857",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
      ]
    }
  };

  const evolutionSteps = [
    { year: "2014", title: "The Beginning", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" },
    { year: "2016", title: "McGee & Co.", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" },
    { year: "2018", title: "The McGee Home", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { year: "2020", title: "Expanding Vision", img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20" }
  ];

  useGSAP(() => {
    gsap.utils.toArray(".reveal-text").forEach((text) => {
      gsap.from(text, {
        scrollTrigger: { trigger: text, start: "top 90%" },
        y: 40, opacity: 0, duration: 1, ease: "power3.out"
      });
    });

    gsap.from(".timeline-card", {
      scrollTrigger: { trigger: ".timeline-grid", start: "top 80%" },
      y: 80, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.out"
    });
  }, { scope: container });

  return (
    <div ref={container} style={{ backgroundColor: '#F9F7F4', color: '#2D2D2D', overflowX: 'hidden' }}>
      
      {/* Modal / Layer */}
      {selectedTimeline && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(249, 247, 244, 0.99)',
          zIndex: 10000, padding: '80px 5%', overflowY: 'auto'
        }}>
          <button 
            onClick={() => setSelectedTimeline(null)}
            style={{ position: 'fixed', top: '40px', right: '5%', border: 'none', background: 'none', fontSize: '0.8rem', cursor: 'pointer', letterSpacing: '2px', fontWeight: 'bold' }}
          >
            CLOSE [X]
          </button>
          
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <span style={{ fontSize: '4rem', fontFamily: 'serif', opacity: 0.1 }}>{selectedTimeline}</span>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'serif', marginTop: '-20px' }}>{timelineDetails[selectedTimeline].title}</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '20px 0 40px', lineHeight: 1.6, color: '#555' }}>
              {timelineDetails[selectedTimeline].desc}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {timelineDetails[selectedTimeline].images.map((img, i) => (
                <img key={i} src={img} style={{ width: '100%', height: '350px', objectFit: 'cover' }} alt="Detail" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', padding: '0 8%', position: 'relative' }}>
        <div style={{ zIndex: 10, flex: 1 }}>
          <p className="reveal-text" style={{ letterSpacing: '5px', fontSize: '0.7rem', marginBottom: '20px', fontWeight: 'bold' }}>SINCE 2014</p>
          <h1 className="reveal-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: 'serif', fontStyle: 'italic', fontWeight: '300', lineHeight: 1.1 }}>
            Architecture <br/> Meets Soul.
          </h1>
        </div>
        <div style={{ flex: 1.2, height: '70vh', overflow: 'hidden', borderRadius: '4px' }}>
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Hero" />
        </div>
      </section>

      {/* Evolution Section */}
      <section style={{ padding: '100px 5%' }}>
        <h2 className="reveal-text" style={{ fontSize: '2.8rem', fontFamily: 'serif', marginBottom: '60px', textAlign: 'center' }}>The Studio Evolution</h2>
        <div className="timeline-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {evolutionSteps.map((step, idx) => (
            <div key={idx} className="timeline-card" onClick={() => setSelectedTimeline(step.year)} style={{ cursor: 'pointer' }}>
              <div style={{ width: '100%', height: '400px', overflow: 'hidden', marginBottom: '20px' }}>
                <img 
                  src={step.img} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  alt={step.year} 
                />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'serif' }}>{step.year}</h3>
              <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '2px' }}>{step.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Principles Section */}
      <section style={{ padding: '100px 8%', backgroundColor: '#2D2D2D', color: '#F9F7F4' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 className="reveal-text" style={{ fontSize: '2.5rem', fontFamily: 'serif', marginBottom: '40px' }}>Design Principles</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {[
                { n: "01", t: "Natural Light", d: "We believe windows are the most important furniture." },
                { n: "02", t: "Material Honesty", d: "Authentic wood, stone, and linen." },
                { n: "03", t: "Timelessness", d: "Spaces that age gracefully over decades." }
              ].map((item, i) => (
                <div key={i}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', color: '#c5a059' }}>{item.n}. {item.t}</h4>
                  <p style={{ opacity: 0.7, fontSize: '0.9rem', lineHeight: 1.5 }}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: '500px', overflow: 'hidden', borderRadius: '2px' }}>
             <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Design" />
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section style={{ height: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 10%' }}>
        <h3 className="reveal-text" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontFamily: 'serif', fontStyle: 'italic', fontWeight: '300', maxWidth: '800px', lineHeight: 1.4 }}>
          "The best rooms have something to say about the people who live in them."
        </h3>
        <p className="reveal-text" style={{ marginTop: '30px', letterSpacing: '4px', opacity: 0.5, fontSize: '0.7rem' }}>- STUDIO PHILOSOPHY</p>
      </section>

    </div>
  );
};

export default About;