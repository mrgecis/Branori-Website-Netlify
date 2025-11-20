
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, GlobeScene } from './components/QuantumScene';
import { GlobalNetworkMap, ProcessFlowDiagram, MethodologyGrid } from './components/Diagrams';
import { ArrowDown, Menu, X, Globe, Shield, TrendingUp, Cpu, Anchor } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navigation - Hamburger Always Visible */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="font-serif font-bold text-lg tracking-wide text-stone-900">
              BRANORI <span className="font-normal text-stone-500 text-xs tracking-widest uppercase ml-1">International</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Desktop Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
            <a href="#location" onClick={scrollToSection('location')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Strategic Hub</a>
            <a href="#services" onClick={scrollToSection('services')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Services</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30">
            M&A, Restructuring, AI
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight md:leading-[0.9] mb-8 text-stone-900 drop-shadow-sm">
            Branori <br/><span className="italic font-normal text-stone-600 text-3xl md:text-5xl block mt-4">We turn distressed equity into value</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            Specialized advisory for private investors. We leverage artificial intelligence to unlock value in distressed equity.
          </p>
          
          <div className="flex justify-center">
             <a href="#about" onClick={scrollToSection('about')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                <span>DISCOVER OUR APPROACH</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </header>

      <main>
        {/* About */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Who We Are</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">Value in Complexity</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
            </div>
            <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed space-y-6">
              <p>
                Branori International is a boutique advisory firm specialized in guiding <strong>private investors</strong> through the intricacies of <strong>distressed equity</strong> and complex corporate restructuring.
              </p>
              <p>
                Operating from our strategic headquarters in <strong>Limassol, Cyprus</strong>, we are positioned at the crossroads of Europe, Asia, and the Middle East. We differentiate ourselves through an uncompromising <strong>AI-First philosophy</strong>—integrating advanced analytics into every stage of the deal lifecycle, from due diligence to operational development.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Section 1: Location / Global Network */}
        <section id="location" className="py-24 bg-white border-t border-stone-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                            <Anchor size={14}/> Strategic Hub
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">The Cyprus Advantage</h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                           Limassol is more than a location; it is our operational bridge. Situated at the nexus of three continents, our Cyprus headquarters allows us to seamlessly service clients across the Middle East, Europe, and Asia, while maintaining strong links to the US markets.
                        </p>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            This geographic agility, combined with a robust legal framework, makes Branori the ideal partner for cross-border transactions and international asset management.
                        </p>
                    </div>
                    <div>
                        <GlobalNetworkMap />
                    </div>
                </div>
            </div>
        </section>

        {/* Expertise Section 2: M&A Services */}
        <section id="services" className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-stone-600 blur-[100px] absolute top-[-100px] left-[-100px]"></div>
                <div className="w-96 h-96 rounded-full bg-nobel-gold blur-[100px] absolute bottom-[-100px] right-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className="order-2 lg:order-1">
                        <ProcessFlowDiagram />
                     </div>
                     <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                            <Shield size={14}/> Core Competencies
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">M&A and Restructuring</h2>
                        <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                            We focus on two pillars: <strong>Deal Analysis & Transaction Structuring</strong> and <strong>Operational Consulting</strong>.
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed mb-6">
                            Whether identifying undervalued distressed assets or architecting complex mergers, our team provides rigorous financial modeling and strategic foresight, including post-merger integrations.
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed">
                             We ensure deals are not just signed, but structured for long-term resilience and profitability.
                        </p>
                     </div>
                </div>
            </div>
        </section>

        {/* Expertise Section 3: Operational Consulting & AI */}
        <section className="py-24 bg-[#F9F8F4]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200 shadow-sm">
                        <Cpu size={14}/> AI First
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Operational Transformation</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Post-acquisition integration and Corporate Development are where value is realized. We apply an "AI First" methodology to streamline operations, optimize supply chains, and accelerate decision-making in turnaround scenarios.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <MethodologyGrid />
                </div>
            </div>
        </section>

        {/* Global Reach / 3D Visualization */}
        <section className="py-24 bg-white border-t border-stone-200">
             <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5 relative">
                    <div className="aspect-square bg-[#F5F4F0] rounded-xl overflow-hidden relative border border-stone-200 shadow-inner">
                        <GlobeScene />
                    </div>
                    <div className="mt-4 text-center text-xs text-stone-400 font-serif italic">Global Market Connectivity</div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Presence</div>
                    <h2 className="font-serif text-4xl mb-6 text-stone-900">Global Reach, Local Insight</h2>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        While our heart is in Limassol, our reach is global. We actively monitor distressed opportunities across established Western markets and emerging Eastern economies.
                    </p>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        Our "AI First" systems allow us to process global market signals in real-time, giving our private investors a speed advantage typically reserved for institutional giants.
                    </p>
                </div>
             </div>
        </section>

      </main>

      <footer id="footer" className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">Branori International</div>
                <p className="text-sm mt-4 max-w-xs">Strategic Advisory for Private Investors in Distressed Equity.</p>
            </div>
            <div className="flex flex-col gap-2 text-center md:text-right text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600 border-t border-stone-800 pt-8">
            © 2024 Branori International. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
