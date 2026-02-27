import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={16} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={16} />, href: "#", label: "Twitter" },
    { icon: <Facebook size={16} />, href: "#", label: "Facebook" },
    { icon: <Linkedin size={16} />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-8 w-full">
      {/* Main Wrapper: 
          'max-w-7xl' content ki width limit karta hai.
          'mx-auto' left aur right gap ko barabar (equal) rakhta hai.
      */}
      <div className="max-w-7xl mx-auto">
        
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-20 border-b border-white/10 items-center">
          <div className="text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif mb-6 tracking-tight"
            >
              Design your <span className="italic text-[#c5a059]">sanctuary.</span>
            </motion.h2>
            <p className="text-zinc-400 max-w-sm font-light leading-relaxed">
              Sign up for our private collection updates and curated interior design insights.
            </p>
          </div>
          
          <div className="relative">
            <form className="flex items-center w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-[10px] tracking-[0.2em] focus:outline-none focus:border-[#c5a059] transition-all duration-500"
              />
              <button className="absolute right-0 text-[#c5a059] text-[10px] font-bold tracking-[0.2em] hover:text-white transition-colors">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Links Section: 
            Yahan 'justify-between' use kiya hai taaki columns 
            pure available space mein barabar fail jayein.
        */}
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 py-20 border-b border-white/5">
          <div className="flex flex-col gap-5 min-w-[150px]">
            <h3 className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] font-bold">Navigation</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-xs font-light text-zinc-400 hover:text-white transition-colors">Portfolios</a>
              <a href="#" className="text-xs font-light text-zinc-400 hover:text-white transition-colors">The Studio</a>
              <a href="#" className="text-xs font-light text-zinc-400 hover:text-white transition-colors">Process</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-5 min-w-[150px]">
            <h3 className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] font-bold">Services</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-xs font-light text-zinc-400 hover:text-white transition-colors">Interior Design</a>
              <a href="#" className="text-xs font-light text-zinc-400 hover:text-white transition-colors">Flooring</a>
              <a href="#" className="text-xs font-light text-zinc-400 hover:text-white transition-colors">Custom Furniture</a>
            </div>
          </div>

          <div className="flex flex-col gap-5 min-w-[150px]">
            <h3 className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] font-bold">Connect</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-xs font-light text-zinc-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-xs font-light text-zinc-400 hover:text-white transition-colors">Pinterest</a>
              <a href="#" className="text-xs font-light text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="flex flex-col gap-5 min-w-[150px]">
            <h3 className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] font-bold">Legal</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-xs font-light text-zinc-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs font-light text-zinc-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Balanced Alignment */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="flex-1 flex justify-start">
            <div className="text-4xl font-serif tracking-tighter leading-none group cursor-default">
              G<span className="text-[#c5a059] group-hover:ml-2 transition-all duration-500">.</span>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center text-center">
            <p className="text-[9px] text-zinc-500 uppercase tracking-[0.25em]">
              © {currentYear} Luxury Interior Design Studio. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex-1 flex justify-end gap-3">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;