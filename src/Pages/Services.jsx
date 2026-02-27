import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const container = useRef();
  // State to handle which service is being "explored"
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "01",
      title: "Residential Interior Design",
      desc: "We create layered, timeless homes that balance architecture, texture, and warmth. Every detail is carefully curated to reflect your lifestyle.",
      fullDetail: "Our residential approach focuses on creating personal sanctuaries. We handle everything from spatial planning and lighting design to sourcing bespoke furniture and textiles that stand the test of time.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    },
    {
      id: "02",
      title: "Commercial Design",
      desc: "Elevated brand environments crafted for beauty and productivity. We design spaces that leave lasting impressions.",
      fullDetail: "For commercial projects, we blend brand identity with functional excellence. We design offices, retail spaces, and hospitality venues that inspire employees and captivate customers.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    },
    {
      id: "03",
      title: "Furniture & Styling",
      desc: "From custom furniture to final styling touches, we ensure a cohesive and refined aesthetic throughout your space.",
      fullDetail: "Styling is the soul of a room. We curate art, accessories, and custom furniture pieces that pull a space together, making it feel finished, lived-in, and sophisticated.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200",
    },
    {
      id: "04",
      title: "Renovation & Remodeling",
      desc: "Transforming existing spaces into modern sanctuaries while preserving architectural integrity and charm.",
      fullDetail: "We specialize in high-end renovations, stripping spaces back to their potential and rebuilding them with modern luxuries while honoring the original architectural spirit of the building.",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200",
    },
  ];

  useGSAP(
    () => {
      // Hero Animation
      gsap.from(".hero-content", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
      });

      // Scroll Fade-up
      gsap.utils.toArray(".fade-up").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 80,
          duration: 1.2,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: container }
  );

  // Layer Animation when opening
  useGSAP(() => {
    if (activeService) {
      gsap.fromTo(".detail-layer", 
        { y: "100%" }, 
        { y: "0%", duration: 0.7, ease: "power4.out" }
      );
    }
  }, [activeService]);

  return (
    <div ref={container} className="bg-[#f5f2ed] text-[#1a1a1a] overflow-hidden">
      
      {/* ===== HERO WITH VIDEO ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://media.istockphoto.com/id/2184521996/video/3d-render-of-modern-livingroom-with-classical-white-walls.mp4?s=mp4-640x640-is&k=20&c=Uw1-A_n6QsTcboMSOj6-8zBrB-niG3DNDHnlAnXRfv8=" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div> 
        </div>

        <div className="relative z-10 text-center px-6 hero-content text-white">
          <h1 className="text-[12vw] md:text-9xl font-serif font-light mb-6 text-[#eeefe8] drop-shadow-lg">Services</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl font-light leading-relaxed text-[#f6faf7]">
            We design intentional spaces that balance texture, warmth, and architectural detail.
          </p>
        </div>
      </section>

      {/* ===== SERVICES LIST ===== */}
      <div className="py-20">
        {services.map((service, index) => (
          <section
            key={service.id}
            className={`fade-up flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16 py-24 px-6 md:px-20`}
          >
            <div className="flex-1 overflow-hidden group">
              <img src={service.image} alt={service.title} className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>

            <div className="flex-1">
              <p className="text-sm tracking-[4px] text-gray-400 mb-6 font-medium">{service.id}</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8">{service.title}</h2>
              <div className="w-16 h-[2px] bg-[#545453] mb-8"></div>
              <p className="text-lg text-gray-600 leading-loose mb-10 max-w-lg">{service.desc}</p>
              
              <button 
                onClick={() => setActiveService(service)}
                className="relative overflow-hidden group border border-black px-8 py-3 tracking-[2px] transition duration-300"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">EXPLORE SERVICE</span>
                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
            </div>
          </section>
        ))}
      </div>

      {/* ===== FULL SCREEN DETAIL LAYER ===== */}
      {activeService && (
        <div className="detail-layer fixed inset-0 z-[100] bg-white flex flex-col md:flex-row overflow-y-auto">
          {/* Close Trigger */}
          <button 
            onClick={() => setActiveService(null)}
            className="absolute top-10 right-10 z-[110] text-sm tracking-[3px] font-bold border-b border-black pb-1 uppercase"
          >
            Close [X]
          </button>

          {/* Left Side: Visual */}
          <div className="md:w-1/2 h-[50vh] md:h-full">
            <img src={activeService.image} className="w-full h-full object-cover" alt={activeService.title} />
          </div>

          {/* Right Side: Detailed Content */}
          <div className="md:w-1/2 min-h-[50vh] bg-[#f5f2ed] flex items-center justify-center p-10 md:p-24">
            <div className="max-w-md">
              <span className="text-gray-400 tracking-[5px] text-xs uppercase mb-4 block">{activeService.id} / Insight</span>
              <h2 className="text-5xl font-serif mb-8 leading-tight">{activeService.title}</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 italic border-l-4 border-black pl-6">
                "{activeService.desc}"
              </p>
              <p className="text-gray-600 leading-loose mb-12">
                {activeService.fullDetail}
              </p>
              <button className="bg-black text-white px-10 py-4 tracking-[2px] text-sm hover:bg-gray-800 transition-colors">
                SCHEDULE A CONSULTATION
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Baki ka Process aur Footer Section (same as before) */}
    </div>
  );
};

export default Services;