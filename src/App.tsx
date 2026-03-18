/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, Phone, ExternalLink, Sparkles, Diamond, PenTool } from "lucide-react";

// Custom Diamond Icon matching the user's reference image
const CustomDiamondIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Outline */}
    <path d="M6 3h12l4 7-10 12L2 10l4-7z" />
    {/* Internal Facets */}
    <path d="M6 3l4 7h4l4-7" />
    <path d="M10 10l2 12 2-12" />
    <path d="M2 10h20" />
  </svg>
);
// Custom Logo component matching the user's reference image exactly
const CristalRevaLogo = ({ className, size = 140 }: { className?: string, size?: number }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg 
        viewBox="0 0 512 512" 
        className="w-full h-full fill-none stroke-amber-400"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Main Circle Frame */}
        <circle cx="256" cy="256" r="210" strokeWidth="2" strokeOpacity="0.5" />
        
        {/* Arched Text Path */}
        <defs>
          <path id="textPathCurve" d="M 80,256 A 176,176 0 0,1 432,256" />
        </defs>
        <text className="fill-amber-400 font-serif font-bold text-[42px] uppercase tracking-[0.15em]">
          <textPath href="#textPathCurve" startOffset="50%" textAnchor="middle">
            CRISTAL • REVA
          </textPath>
        </text>

        {/* Detailed Brilliant Cut Diamond */}
        <g transform="translate(256, 160) scale(1.2)">
          {/* Top facets */}
          <path d="M-40,0 L40,0 L25,-25 L-25,-25 Z" />
          <path d="M-25,-25 L0,-40 L25,-25" />
          <path d="M-40,0 L-25,-25 M40,0 L25,-25 M0,-40 L0,-25" />
          {/* Bottom facets */}
          <path d="M-40,0 L0,50 L40,0" />
          <path d="M-40,0 L-15,15 L0,50 L15,15 L40,0" />
          <path d="M-15,15 L15,15 M0,0 L0,50" />
        </g>

        {/* Detailed Hand with Ring */}
        <g transform="translate(256, 280)">
          {/* Hand Silhouette */}
          <path d="M-140,50 C-120,20 -80,0 -20,0 C20,0 60,10 90,30 C110,45 130,70 140,90" strokeWidth="5" />
          {/* Fingers */}
          <path d="M20,0 L80,-40 C95,-50 115,-45 125,-30 C135,-15 130,5 115,15 L60,40" strokeWidth="4" />
          <path d="M40,15 L100,-15 C115,-25 135,-20 145,-5 C155,10 150,30 135,40 L80,65" strokeWidth="4" />
          <path d="M55,35 L110,15 C125,10 145,15 155,30 C165,45 160,65 145,75 L90,95" strokeWidth="4" />
          {/* Thumb */}
          <path d="M-60,15 C-40,5 -10,5 20,15" strokeWidth="5" />
          
          {/* The Ring on the finger */}
          <g transform="translate(75, 25) rotate(-35)">
            <ellipse cx="0" cy="0" rx="12" ry="6" strokeWidth="3" />
            <path d="M-5,-12 L5,-12 L8,-5 L0,0 L-8,-5 Z" fill="rgba(251, 191, 36, 0.3)" />
            <path d="M-5,-12 L5,-12 L8,-5 L0,0 L-8,-5 Z" strokeWidth="2" />
          </g>
        </g>

        {/* Detailed Floral Wreath */}
        <g transform="translate(256, 420)">
          {/* Center Flowers */}
          <g transform="translate(0, -20)">
            <circle cx="0" cy="0" r="12" fill="rgba(251, 191, 36, 0.2)" />
            <path d="M-25,-15 Q-15,15 0,0 Q15,15 25,-15" />
            {[0, 72, 144, 216, 288].map(ang => (
              <circle key={ang} cx={20 * Math.cos(ang * Math.PI / 180)} cy={20 * Math.sin(ang * Math.PI / 180)} r="8" />
            ))}
          </g>
          <g transform="translate(-60, -10) scale(0.8)">
            <circle cx="0" cy="0" r="10" />
            {[0, 72, 144, 216, 288].map(ang => (
              <circle key={ang} cx={18 * Math.cos(ang * Math.PI / 180)} cy={18 * Math.sin(ang * Math.PI / 180)} r="7" />
            ))}
          </g>
          <g transform="translate(60, -10) scale(0.8)">
            <circle cx="0" cy="0" r="10" />
            {[0, 72, 144, 216, 288].map(ang => (
              <circle key={ang} cx={18 * Math.cos(ang * Math.PI / 180)} cy={18 * Math.sin(ang * Math.PI / 180)} r="7" />
            ))}
          </g>

          {/* Leaves curving up */}
          <path d="M-100,-20 C-150,-40 -190,-100 -200,-180" strokeWidth="3" />
          <path d="M100,-20 C150,-40 190,-100 200,-180" strokeWidth="3" />
          
          {/* Individual Leaves */}
          {[-120, -140, -160, -180].map(y => (
            <g key={y} transform={`translate(-180, ${y}) rotate(-45)`}>
              <path d="M0,0 Q15,-15 30,0 Q15,15 0,0" fill="rgba(251, 191, 36, 0.1)" />
            </g>
          ))}
          {[ -120, -140, -160, -180].map(y => (
            <g key={y} transform={`translate(180, ${y}) rotate(45)`}>
              <path d="M0,0 Q-15,-15 -30,0 Q-15,15 0,0" fill="rgba(251, 191, 36, 0.1)" />
            </g>
          ))}
        </g>
      </svg>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full -z-10" />
    </div>
  );
};

// Custom Snapchat icon (Official Ghost shape)
const SnapchatIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg 
    width={size}
    height={size}
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M12 3c-2.69 0-4.87 2.18-4.87 4.87 0 .8.2 1.55.55 2.22-.38.38-.66.85-.66 1.38 0 .7.66 1.11 1.25 1.11.38 0 .7-.11.96-.38.4.53 1.02.91 1.73.91.71 0 1.33-.38 1.73-.91.26.27.58.38.96.38.59 0 1.25-.41 1.25-1.11 0-.53-.28-1-.66-1.38.35-.67.55-1.42.55-2.22C16.87 5.18 14.69 3 12 3zm-4.87 9.75c-1.31 0-2.37 1.06-2.37 2.37 0 1.31 1.06 2.37 2.37 2.37h9.75c1.31 0 2.37-1.06 2.37-2.37 0-1.31-1.06-2.37-2.37-2.37" />
  </svg>
);

const SocialButton = ({ 
  icon: Icon, 
  label, 
  username, 
  href, 
  delay,
  colorClass,
  iconColor,
  labelColor
}: { 
  icon: any, 
  label: string, 
  username: string, 
  href: string, 
  delay: number,
  colorClass: string,
  iconColor: string,
  labelColor?: string,
  key?: string
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.02, backgroundColor: "rgba(251, 191, 36, 0.08)" }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center justify-between w-full p-5 mb-4 transition-all border rounded-3xl bg-amber-500/5 border-amber-500/10 backdrop-blur-xl group"
  >
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/5 group-hover:bg-amber-500/10 transition-all">
        <ExternalLink size={16} className="text-white/20 group-hover:text-white transition-colors" />
      </div>
    </div>
    
    <div className="flex items-center gap-5">
      <div className="text-right">
        <p className={`text-[11px] font-bold tracking-normal mb-0.5 ${labelColor || iconColor}`}>{label}</p>
        <p className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors tracking-tight">{username}</p>
      </div>
      <div className={`relative flex items-center justify-center w-14 h-14 transition-all duration-500`}>
        {/* Diamond Background for Icon */}
        <div className={`absolute inset-0 rotate-45 rounded-xl opacity-20 ${colorClass}`} />
        <div className={`relative z-10 ${iconColor}`}>
          <Icon size={28} />
        </div>
      </div>
    </div>
  </motion.a>
);

export default function App() {
  const links = [
    {
      icon: Facebook,
      label: "فەیسبووک",
      username: "cristal_reva",
      href: "https://www.facebook.com/cristal_reva",
      colorClass: "bg-blue-600/20 group-hover:bg-blue-600/30 shadow-blue-500/5",
      iconColor: "text-blue-400"
    },
    {
      icon: Instagram,
      label: "ئینستاگرام",
      username: "cristal_reva",
      href: "https://www.instagram.com/cristal_reva",
      colorClass: "bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-orange-600/20 group-hover:from-purple-600/30 group-hover:via-pink-600/30 group-hover:to-orange-600/30 shadow-pink-500/5",
      iconColor: "text-pink-400"
    },
    {
      icon: SnapchatIcon,
      label: "سناپچات",
      username: "cristalrevacr20",
      href: "https://www.snapchat.com/add/cristalrevacr20",
      colorClass: "bg-yellow-400/10 group-hover:bg-yellow-400/20 shadow-yellow-500/5",
      iconColor: "text-yellow-400",
      labelColor: "text-yellow-400"
    },
    {
      icon: Phone,
      label: "پەیوەندی",
      username: "4694 194 0750",
      href: "tel:07501944694",
      colorClass: "bg-green-600/20 group-hover:bg-green-600/30 shadow-green-500/5",
      iconColor: "text-green-400"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="rtl">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-amber-200/5 blur-[150px]" />
        <div className="absolute top-[30%] left-[10%] w-[30%] h-[30%] rounded-full bg-amber-400/5 blur-[100px]" />
        
        {/* Large Central Diamond Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rotate-45 bg-amber-500/5 blur-[120px]" />
        
        {/* Diamond Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, #fbbf24 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            transform: 'rotate(45deg) scale(2)'
          }} 
        />
        
        {/* Floating Diamond Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              y: Math.random() * 1000, 
              x: Math.random() * 1000,
              rotate: 45 
            }}
            animate={{ 
              opacity: [0, 0.2, 0],
              y: [null, Math.random() * -500],
              rotate: [45, 225]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-2 h-2 border border-amber-500/20"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center max-w-md px-6 py-16 mx-auto">
        {/* Diamond Border for the whole app */}
        <div className="absolute inset-0 border border-amber-500/5 rotate-45 pointer-events-none" />
        <div className="absolute inset-4 border border-amber-500/5 rotate-45 pointer-events-none" />
        {/* Logo / Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="relative mb-10">
            {/* Outer Rotating Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] border border-dashed border-amber-500/10 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-12px] border border-amber-200/20 rounded-full"
            />
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[-4px] border-2 border-amber-500/30 rounded-full"
            />
            
            {/* Main Logo Container */}
            <div className="relative flex items-center justify-center w-44 h-44 overflow-hidden border-2 border-amber-500/40 rounded-full bg-black shadow-[0_0_80px_rgba(251,191,36,0.2)]">
              <img 
                src="/cristal-reva-logo-1.png" 
                alt="Cristal Reva Logo"
                className="w-full h-full object-contain p-4 transition-all duration-700 hover:scale-110"
                style={{
                  filter: 'invert(1) sepia(1) saturate(5) hue-rotate(10deg) brightness(1.2) contrast(1.2)',
                }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Sparkles */}
            <motion.div 
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 text-amber-400"
            >
              <Sparkles size={24} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute bottom-2 left-2 p-2.5 border rounded-full bg-[#050505] border-amber-200/30 text-amber-300 shadow-2xl z-20"
            >
              <CustomDiamondIcon size={20} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-6xl font-serif italic tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-400 to-amber-600 mb-4 drop-shadow-2xl">
              Cristal Reva
            </h1>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-amber-500/50" />
                <p className="text-[12px] tracking-[0.5em] uppercase text-amber-200/80 font-bold">
                  Luxury & Style
                </p>
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-amber-500/50" />
              </div>
              <p className="text-base text-amber-200/50 font-medium italic tracking-wide">
                قەڵادزێ - بازاڕی سەردەم
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Links Section */}
        <div className="w-full space-y-2">
          {links.map((link, index) => (
            <SocialButton
              key={link.label}
              icon={link.icon}
              label={link.label}
              username={link.username}
              href={link.href}
              delay={0.1 + index * 0.1}
              colorClass={link.colorClass}
              iconColor={link.iconColor}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center flex flex-col items-center gap-6"
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-medium">
            © 2026 Cristal Reva • Qaladiza, Kurdistan
          </p>
          
          <div className="flex flex-col items-center gap-3 pt-6 border-t border-amber-500/10 w-full">
            <p className="text-amber-500/40 text-xs font-medium tracking-wide">
              دروست کراوە لە لایەن چاپلین چاپەوە
            </p>
            <div className="flex items-center justify-center w-12 h-12 rounded-xl border border-amber-500/20 shadow-lg shadow-amber-500/5 bg-white/5 text-amber-400">
              <PenTool size={24} />
            </div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
