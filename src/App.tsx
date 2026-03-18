/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Facebook, Instagram, Phone, ExternalLink, Sparkles, QrCode } from "lucide-react";

// Custom Snapchat icon (More accurate Ghost shape)
const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12 3c-2.485 0-4.5 2.015-4.5 4.5 0 .73.175 1.418.484 2.025-.31.31-.62.62-.62 1.238 0 .618.62.927 1.238.927.31 0 .62-.113.927-.31.31.478.927.927 1.546.927.618 0 1.124-.449 1.433-.927.31.197.618.31.927.31.618 0 1.238-.31 1.238-.927 0-.618-.31-.928-.62-1.238.31-.607.485-1.295.485-2.025 0-2.485-2.015-4.5-4.5-4.5zm-4.5 9c-1.242 0-2.25 1.008-2.25 2.25s1.008 2.25 2.25 2.25h9c1.242 0 2.25-1.008 2.25-2.25s-1.008-2.25-2.25-2.25" />
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
    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center justify-between w-full p-5 mb-4 transition-all border rounded-3xl bg-white/5 border-white/10 backdrop-blur-xl group"
  >
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 transition-all">
        <ExternalLink size={16} className="text-white/20 group-hover:text-white transition-colors" />
      </div>
    </div>
    
    <div className="flex items-center gap-5">
      <div className="text-right">
        <p className={`text-[11px] font-bold tracking-normal mb-0.5 ${labelColor || iconColor}`}>{label}</p>
        <p className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors tracking-tight">{username}</p>
      </div>
      <div className={`flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 shadow-lg ${colorClass} ${iconColor}`}>
        <Icon size={28} />
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
      colorClass: "bg-[#FFFC00] group-hover:bg-[#FFFC00]/90 shadow-yellow-500/20",
      iconColor: "text-white",
      labelColor: "text-yellow-400"
    },
    {
      icon: Phone,
      label: "پەیوەندی",
      username: "4694 194 0750",
      href: "tel:07501949446",
      colorClass: "bg-green-600/20 group-hover:bg-green-600/30 shadow-green-500/5",
      iconColor: "text-green-400"
    },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="rtl">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-amber-200/5 blur-[150px]" />
        <div className="absolute top-[30%] left-[10%] w-[30%] h-[30%] rounded-full bg-amber-400/5 blur-[100px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center max-w-md px-6 py-16 mx-auto">
        {/* Logo / Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="relative mb-8">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-12px] border border-dashed border-amber-200/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-6px] border border-amber-500/10 rounded-full"
            />
            <div className="relative flex items-center justify-center w-36 h-36 overflow-hidden border border-amber-200/20 rounded-full bg-gradient-to-b from-zinc-900 to-black shadow-[0_0_50px_rgba(251,191,36,0.1)]">
              <span className="text-6xl font-serif italic font-bold tracking-tighter text-amber-200 drop-shadow-2xl">CR</span>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute bottom-1 left-1 p-2.5 border rounded-full bg-[#050505] border-amber-200/20 text-amber-200 shadow-xl"
            >
              <Sparkles size={18} />
            </motion.div>
          </div>

          <h1 className="text-5xl font-serif italic tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-3">
            Cristal Reva
          </h1>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[11px] tracking-[0.4em] uppercase text-amber-200/70 font-semibold">
              Luxury & Style
            </p>
            <p className="text-sm text-white/40 font-medium italic">
              جوانی و شیکپۆشی لای ئێمەیە
            </p>
          </div>
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
          className="mt-16 text-center"
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-medium">
            © 2026 Cristal Reva • Erbil, Kurdistan
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
