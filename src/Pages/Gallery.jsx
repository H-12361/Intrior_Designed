import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LuxuryGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // PREVENT BACKGROUND SCROLL
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  const baseData = [
    { id: 1, title: "The Obsidian Suite", cat: "Living Room", loc: "South Mumbai", imgId: "1600210492486-724fe5c67fb0" },
    { id: 2, title: "Walnut Executive", cat: "Workspace", loc: "New Delhi", imgId: "1618221195710-dd6b41faaea6" },
    { id: 3, title: "Matte Black Bistro", cat: "Kitchen", loc: "Bangalore", imgId: "1510798831971-661eb04b3739" }, 
    { id: 4, title: "Alabaster Master", cat: "Bedroom", loc: "Hyderabad", imgId: "1560185127-6ed189bf02f4" },
    { id: 5, title: "Geometric Atrium", cat: "Lighting", loc: "Mumbai", imgId: "1513506003901-1e6a229e2d15" },
    { id: 6, title: "Teak Terrace", cat: "Exterior", loc: "Pune", imgId: "1512917774080-9991f1c4c750" },
    { id: 7, title: "Marble Monolith", cat: "Living Room", loc: "Chennai", imgId: "1484154218962-a197022b5858" }, 
    { id: 8, title: "The Silk Boudoir", cat: "Bedroom", loc: "Kolkata", imgId: "1595526114035-0d45ed16cfbf" },
    // 5 NEW PROJECTS ADDED BELOW
    { id: 9, title: "Travertine Hall", cat: "Living Room", loc: "Chandigarh", imgId: "1613545325278-f24b0cae1224" },
   
    { id: 11, title: "Raw Concrete Loft", cat: "Workspace", loc: "Ahmedabad", imgId: "1524758631624-e2822e304c36" },
    { id: 12, title: "The Golden Galley", cat: "Kitchen", loc: "Jaipur", imgId: "1556909114-f6e7ad7d3136" },
    { id: 13, title: "Scandi Oak Suite", cat: "Bedroom", loc: "Manali", imgId: "1522771739844-6a9f6d5f14af" }
  ];

  const galleryData = baseData.map((item, i) => ({
    ...item,
    description: `An architectural dialogue between ${item.cat.toLowerCase()} functionality and high-end aesthetic. This project features custom-made furniture, sustainable materials, and an emphasis on natural light flow.`,
    area: `${1100 + (i * 125)} sq.ft`,
    year: 2024 - (i % 3),
    images: [
      `https://images.unsplash.com/photo-${item.imgId}?auto=format&fit=crop&q=80&w=1600`,
      `https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600`,
      `https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1600`,
      `https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1600`,
      `https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1600`
    ]
  }));

  const closeModal = () => {
    setSelectedProject(null);
    setActiveIndex(0);
  };

  return (
    <section className="bg-[#fcfbf9] min-h-screen py-24 px-6 font-light">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-24">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#96846b] uppercase tracking-[0.6em] text-[10px] font-bold mb-4">The Collection</motion.h2>
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 tracking-tight">Portfolio</h1>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
        {galleryData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={() => setSelectedProject(item)}
          >
            <div className="overflow-hidden bg-[#eeebe6] aspect-[4/5] shadow-sm">
              <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="mt-6">
              <span className="text-[10px] text-[#96846b] uppercase font-bold tracking-[0.2em]">{item.category}</span>
              <h3 className="text-gray-900 font-serif text-2xl lowercase italic mt-1">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-Screen Modal (Completely fills the window) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-white" onClick={closeModal} />
            
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              className="relative bg-white w-full h-full flex flex-col md:flex-row overflow-hidden"
            >
              {/* Left Side: Image Gallery */}
              <div className="w-full md:w-[65%] h-[50%] md:h-full bg-gray-100 relative">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeIndex}
                    src={selectedProject.images[activeIndex]} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                    alt="Active Interior"
                  />
                </AnimatePresence>
                
                <button 
                  onClick={closeModal}
                  className="absolute top-10 left-10 z-10 text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur-md px-8 py-4 border border-gray-100 hover:bg-black hover:text-white transition-all duration-300"
                >
                  Close Perspective
                </button>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-[40%] h-[50%] md:h-full p-10 md:p-20 flex flex-col justify-between overflow-y-auto bg-white">
                <div className="space-y-10">
                  <div>
                    <p className="text-[#96846b] text-[10px] font-bold tracking-widest uppercase mb-4 italic">
                      {selectedProject.category} / {selectedProject.location}
                    </p>
                    <h2 className="text-5xl font-serif text-gray-900 leading-tight">
                      {selectedProject.title}
                    </h2>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed font-light">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-2 gap-10 border-t border-gray-100 pt-10">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Scale</p>
                      <p className="text-sm text-gray-800 font-medium">{selectedProject.area}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Year</p>
                      <p className="text-sm text-gray-800 font-medium">{selectedProject.year}</p>
                    </div>
                  </div>
                </div>

                {/* Perspective View Navigation */}
                <div className="mt-16">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-6">Gallery Perspectives</p>
                  <div className="grid grid-cols-6 gap-3">
                    {selectedProject.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`aspect-square border transition-all duration-500 ${
                          activeIndex === i ? "border-[#96846b] scale-110" : "border-transparent grayscale opacity-40 hover:opacity-100"
                        }`}
                      >
                        <img src={img} className="w-full h-full object-cover shadow-sm" alt={`Perspective ${i}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LuxuryGallery;