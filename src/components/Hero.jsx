import React from 'react'
import { Sparkles, Rocket, Terminal, ArrowDown, MapPin, CheckCircle2, ShieldCheck, Award } from 'lucide-react'
import { personalInfo } from '../assets/data/portfolioData'

export default function Hero() {
    return (
        <section id="about" className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden">

            {/* Ambient Radial Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#D4AF37]/10 blur-[150px] pointer-events-none rounded-full" />
            <div className="absolute top-[300px] -right-[150px] w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#D4AF37]/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

                    {/* Left Column: Text & CTAs */}
                    <div className="lg:col-span-7 flex flex-col items-start">

                        {/* Status Pill */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-5 sm:mb-6 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                            </span>
                            <span>{personalInfo.title}</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.1] text-white">
                            Crafting <span className="gold-gradient-text">high-performance web apps</span> & leading technical execution.
                        </h1>

                        {/* Bio Description */}
                        <p className="mt-4 sm:mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                            {personalInfo.bio}
                        </p>

                        {/* Quick Highlights / Location Tag */}
                        <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-gray-400 font-medium">
                            {personalInfo.location && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                                    <MapPin size={14} className="text-[#D4AF37]" />
                                    {personalInfo.location}
                                </span>
                            )}
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                                <CheckCircle2 size={14} className="text-[#D4AF37]" />
                                React & Full-Stack
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                                <ShieldCheck size={14} className="text-[#D4AF37]" />
                                Data Verification & Leadership
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                            <a
                                href="#projects"
                                className="w-full sm:w-auto text-center px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-[#D4AF37]/20"
                            >
                                <Rocket size={18} /> View Selected Work
                            </a>

                            <a
                                href="#skills"
                                className="w-full sm:w-auto text-center px-6 sm:px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                            >
                                <Terminal size={18} className="text-[#D4AF37]" /> Explore Capabilities
                            </a>
                        </div>

                    </div>

                    {/* Right Column: Modern Avatar & Floating Badges */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end relative">

                        {/* Avatar Wrapper with Multi-layer Glow & Border */}
                        <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[380px]">

                            {/* Backlight Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 to-[#8C6D1F]/10 rounded-3xl blur-2xl transform -rotate-3 scale-95 pointer-events-none" />

                            {/* Profile Card Container */}
                            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#D4AF37]/40 via-white/10 to-white/5 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80 group">
                                <div className="relative rounded-2xl overflow-hidden bg-[#121212] aspect-[4/5]">
                                    {personalInfo.avatar ? (
                                        <img
                                            src={personalInfo.avatar.replace(/^\/?public\//, '/')}
                                            alt={personalInfo.name}
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-[#181818] text-6xl font-black text-[#D4AF37]">
                                            {personalInfo.name.charAt(0)}
                                        </div>
                                    )}

                                    {/* Subtle Gradient Overlay on bottom of photo */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                                    {/* In-Image Tag */}
                                    <div className="absolute bottom-4 left-4 right-28 text-left">
                                        <p className="text-white font-bold text-base leading-tight drop-shadow-md">
                                            {personalInfo.name}
                                        </p>
                                        <p className="text-[#D4AF37] text-xs font-semibold drop-shadow-md mt-0.5">
                                            {personalInfo.title}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Glass Badge 1 - Top Left */}
                            <div className="absolute -top-3.5 -left-3 sm:-left-4 bg-[#141414]/95 border border-[#D4AF37]/30 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2">
                                <Award size={14} className="text-[#D4AF37]" />
                                <span className="text-[11px] font-bold text-white tracking-wide">Intern Lead & Mentor</span>
                            </div>

                            {/* Floating Glass Badge 2 - Bottom Right (Slim & Compact) */}
                            <div className="absolute -bottom-3 -right-3 sm:-right-4 bg-[#141414]/95 border border-emerald-500/30 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xl flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                                </span>
                                <span className="text-[11px] font-bold text-emerald-300 tracking-wide">Available</span>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Scroll Indicator */}
                <div className="mt-16 sm:mt-20 flex items-center gap-3 text-xs text-gray-500 uppercase tracking-widest font-semibold">
                    <span>Scroll to explore</span>
                    <ArrowDown size={14} className="animate-bounce text-[#D4AF37]" />
                </div>

            </div>
        </section>
    )
}
