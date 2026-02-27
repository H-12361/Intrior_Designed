import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Contact = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Reveal entry animations
    tl.from(".contact-image", {
      x: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out"
    })
    .from(".form-field, .info-block", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out"
    }, "-=1")
    .from(".map-section", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.5");

    // 2. Floating background decoration animation
    gsap.to(".bg-circle", {
      y: 40,
      x: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: container });

  return (
    <div ref={container} style={{ 
      backgroundColor: '#fdfdfd', 
      color: '#1a1a1a', 
      minHeight: '100vh', 
      padding: '80px 0 0 0', 
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      {/* Background Decoration */}
      <div className="bg-circle" style={{ 
        position: 'absolute', top: '-5%', right: '-5%', width: '500px', height: '500px', 
        borderRadius: '50%', background: '#f3f3f3', zIndex: 0 
      }} />

      {/* --- TOP SECTION: FORM & STUDIO IMAGE --- */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        width: '90%', 
        maxWidth: '1300px', 
        margin: '0 auto 100px auto',
        zIndex: 1,
        gap: '80px',
        position: 'relative'
      }}>
        
        {/* LEFT SIDE: FORM */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="form-field">
            <p style={{ letterSpacing: '4px', fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', marginBottom: '15px' }}>
              Connect with us
            </p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '300', lineHeight: 1.1, marginBottom: '50px', fontFamily: 'serif' }}>
              Let's Design Your <br/> Future Together.
            </h2>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="form-field">
              <input type="text" placeholder="Full Name" style={inputStyle} />
            </div>
            <div className="form-field">
              <input type="email" placeholder="Email Address" style={inputStyle} />
            </div>
            <div className="form-field">
              <textarea placeholder="Tell us about your project" rows="3" style={inputStyle}></textarea>
            </div>
            <div className="form-field" style={{ marginTop: '20px' }}>
              <button style={buttonStyle}>Send Inquiry</button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE: THE ABOUT PAGE STYLE IMAGE */}
        <div className="contact-image">
          <div style={{ 
            width: '100%', 
            height: '500px', 
            overflow: 'hidden', 
            borderRadius: '4px', 
            boxShadow: '0 30px 60px rgba(0,0,0,0.05)' 
          }}>
            <img 
              src="https://plus.unsplash.com/premium_photo-1661923465953-937e49c9e624?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Indore Office Studio" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '50px' }}>
            <div className="info-block">
              <p style={{ fontWeight: '600', fontSize: '0.85rem', marginBottom: '10px', letterSpacing: '1px' }}>OFFICE</p>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Vijay Nagar, AB Road<br/>Indore, MP 452010</p>
            </div>
            <div className="info-block">
              <p style={{ fontWeight: '600', fontSize: '0.85rem', marginBottom: '10px', letterSpacing: '1px' }}>CONTACT</p>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>hello@atelier.com<br/>+91 731 400 1234</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION: THE INTERACTIVE MAP --- */}
      <section className="map-section" style={{ 
        width: '100%', 
        height: '65vh', 
        position: 'relative', 
        marginTop: '10px', // The requested 10px margin
        borderTop: '1px solid #eee' 
      }}>
        {/* Google Map Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58882.16453678368!2d75.85966145!3d22.7195687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b4aa745%3A0x5981eead2ba45a8c!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Studio Location"
        ></iframe>

        {/* Floating UI Card - Exactly like the screenshot */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '420px',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '24px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, fontSize: '1.3rem', fontWeight: '600', color: '#202124' }}>Atelier Studio Indore</h4>
            <div style={{ backgroundColor: '#f1f3f4', padding: '8px', borderRadius: '50%', display: 'flex' }}>
               <span style={{ fontSize: '1rem' }}>📍</span>
            </div>
          </div>

          <p style={{ margin: 0, fontSize: '0.95rem', color: '#70757a', lineHeight: 1.4 }}>
            Vijay Nagar, AB Road, Indore, MP. <br/>
            Open • Closes 7:00 PM
          </p>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{ flex: 1, backgroundColor: '#1a73e8', color: '#fff', border: 'none', padding: '12px', borderRadius: '25px', fontWeight: '500', cursor: 'pointer', fontSize: '0.9rem' }}>Directions</button>
            <button style={{ flex: 1, border: '1px solid #dadce0', backgroundColor: '#fff', color: '#1a73e8', padding: '12px', borderRadius: '25px', fontWeight: '500', cursor: 'pointer', fontSize: '0.9rem' }}>Save</button>
          </div>
        </div>
      </section>

    </div>
  );
};

// Styles
const inputStyle = {
  width: '100%',
  padding: '15px 0',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid #ccc',
  outline: 'none',
  fontSize: '1rem',
  transition: 'border-color 0.3s'
};

const buttonStyle = {
  padding: '18px 45px',
  backgroundColor: '#1a1a1a',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  fontSize: '0.75rem',
  fontWeight: '600',
  transition: '0.3s'
};

export default Contact;