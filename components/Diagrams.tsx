
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Briefcase, TrendingUp, ArrowRight, Users, Building, Search, Workflow, Zap, CheckCircle2, Layers, BarChart3 } from 'lucide-react';

// --- GLOBAL NETWORK MAP ---
export const GlobalNetworkMap: React.FC = () => {
  const [activeHub, setActiveHub] = useState<string | null>('LIM');
  
  // Radial positions: center (50,50)
  // Surrounding nodes arranged in a circle
  const hubs = [
    { id: 'LIM', name: 'Limassol', x: 50, y: 50, type: 'HQ' },
    { id: 'MAD', name: 'Madrid', x: 20, y: 35, type: 'Hub' },
    { id: 'MUC', name: 'Munich', x: 35, y: 20, type: 'Hub' },
    { id: 'DBX', name: 'Dubai', x: 80, y: 35, type: 'Hub' },
    { id: 'HKG', name: 'Hong Kong', x: 85, y: 65, type: 'Hub' },
    { id: 'SHA', name: 'Shanghai', x: 65, y: 80, type: 'Hub' },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-4 text-stone-800">Strategic Gateway</h3>
      <p className="text-sm text-stone-500 mb-6 text-center max-w-md">
        Centered in Limassol, connecting key markets across Europe, the Middle East, and Asia.
      </p>
      
      <div className="relative w-full max-w-md aspect-[4/3] bg-[#F5F4F0] rounded-lg border border-stone-200 p-4 overflow-hidden">
         
         {/* Connections */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {hubs.map(hub => {
                if (hub.id === 'LIM') return null;
                return (
                    <motion.line 
                        key={`line-${hub.id}`}
                        x1="50%"
                        y1="50%"
                        x2={`${hub.x}%`}
                        y2={`${hub.y}%`}
                        stroke="#C5A059"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                );
            })}
            {/* Animated pulses on lines */}
             {hubs.map(hub => {
                if (hub.id === 'LIM') return null;
                return (
                    <circle key={`pulse-${hub.id}`} r="2" fill="#C5A059">
                        <animateMotion 
                            dur="3s" 
                            repeatCount="indefinite"
                            path={`M ${50*4} ${50*3} L ${hub.x*4} ${hub.y*3}`} // Approximate scaling for viewBox if we used it, but here we just use CSS mostly. Actually SVG paths need absolute coords usually.
                        />
                        {/* Simple CSS animation fallback for lines is harder, let's just keep static lines with css dashed animation if possible, or simpler: */}
                    </circle>
                )
             })}
         </svg>

         {/* Hubs */}
         {hubs.map(hub => (
             <div
                key={hub.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-10 cursor-pointer`}
                style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                onMouseEnter={() => setActiveHub(hub.id)}
             >
                <div className={`relative flex items-center justify-center transition-all duration-500 ${hub.id === 'LIM' ? 'w-6 h-6' : 'w-4 h-4'}`}>
                    <div className={`absolute inset-0 rounded-full bg-nobel-gold/20 animate-ping ${activeHub === hub.id ? 'opacity-100' : 'opacity-0'}`}></div>
                    <div className={`w-full h-full rounded-full border-2 transition-all duration-300 shadow-sm ${hub.id === 'LIM' ? 'bg-stone-900 border-nobel-gold z-20' : 'bg-white border-stone-400 group-hover:border-stone-600 group-hover:bg-stone-100'}`}></div>
                </div>
                <span className={`mt-2 text-[10px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap bg-white/80 backdrop-blur-sm px-1 rounded ${hub.id === 'LIM' ? 'text-stone-900' : 'text-stone-500'}`}>{hub.name}</span>
             </div>
         ))}
      </div>
    </div>
  );
};

// --- PROCESS FLOW DIAGRAM ---
export const ProcessFlowDiagram: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setStep(s => (s + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { title: "Analysis", icon: <Search size={20} />, desc: "AI Due Diligence" },
    { title: "Structure", icon: <Briefcase size={20} />, desc: "Deal Architecture" },
    { title: "Integrate", icon: <Workflow size={20} />, desc: "Ops Transformation" },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-[#F5F4F0] rounded-xl border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-4 text-stone-900">M&A and Transformation</h3>
      <p className="text-sm text-stone-600 mb-8 text-center max-w-md">
        From identifying distressed assets to executing post-acquisition turnaround, our process is rigorous and tech-enabled.
      </p>

      <div className="flex items-center justify-center gap-2 md:gap-4 w-full max-w-lg">
        {steps.map((s, i) => (
            <React.Fragment key={i}>
                <div className={`flex flex-col items-center gap-3 transition-all duration-500 ${step === i ? 'opacity-100 scale-110' : 'opacity-50 grayscale'}`}>
                    <div className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center shadow-sm transition-colors duration-500 ${step === i ? 'bg-white border-nobel-gold text-nobel-gold' : 'bg-stone-100 border-stone-300 text-stone-400'}`}>
                        {s.icon}
                    </div>
                    <div className="text-center">
                        <div className="font-serif font-bold text-stone-900">{s.title}</div>
                        <div className="text-[10px] uppercase tracking-widest text-stone-500">{s.desc}</div>
                    </div>
                </div>
                {i < steps.length - 1 && (
                    <div className="text-stone-300">
                        <ArrowRight size={24} />
                    </div>
                )}
            </React.Fragment>
        ))}
      </div>

      <div className="mt-8 w-full bg-stone-200 h-1 rounded-full overflow-hidden max-w-xs">
        <motion.div 
            className="h-full bg-nobel-gold"
            animate={{ width: `${((step + 1) / 3) * 100}%` }}
            transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

// --- METHODOLOGY GRID (REPLACED GROWTH CHART) ---
export const MethodologyGrid: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number>(0);

    const cards = [
        {
            title: "Diagnostic",
            icon: <Search size={24} />,
            desc: "AI-driven analysis of operational bottlenecks and financial distress signals.",
            details: "Our proprietary algorithms analyze years of financial data to pinpoint the exact root cause of underperformance."
        },
        {
            title: "Implementation",
            icon: <Layers size={24} />,
            desc: "Hands-on restructuring and immediate implementation of value-creation levers.",
            details: "We deploy interim management and digital tools to execute the turnaround plan with military precision."
        },
        {
            title: "Evolution",
            icon: <BarChart3 size={24} />,
            desc: "Continuous monitoring and adaptation using real-time market data feeds.",
            details: "Post-transformation, we install AI monitoring systems to ensure the asset remains resilient and profitable."
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {cards.map((card, idx) => (
                <div 
                    key={idx}
                    className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col gap-4 ${activeCard === idx ? 'bg-white border-nobel-gold shadow-md scale-105 z-10' : 'bg-white/50 border-stone-200 hover:bg-white hover:border-stone-300'}`}
                    onClick={() => setActiveCard(idx)}
                >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${activeCard === idx ? 'bg-stone-900 text-nobel-gold' : 'bg-stone-200 text-stone-500'}`}>
                        {card.icon}
                    </div>
                    <div>
                        <h4 className={`font-serif text-lg mb-2 ${activeCard === idx ? 'text-stone-900' : 'text-stone-600'}`}>{card.title}</h4>
                        <p className="text-sm text-stone-500 leading-relaxed mb-4">{card.desc}</p>
                        
                        <AnimatePresence>
                            {activeCard === idx && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 border-t border-stone-100 text-xs text-stone-600 italic">
                                        "{card.details}"
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className={`mt-auto self-end transition-opacity ${activeCard === idx ? 'opacity-100' : 'opacity-0'}`}>
                         <CheckCircle2 size={16} className="text-nobel-gold" />
                    </div>
                </div>
            ))}
        </div>
    );
};
