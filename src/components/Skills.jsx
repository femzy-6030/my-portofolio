import React from 'react'
import { Code2, Server, Database, Users } from 'lucide-react'
import { skills } from '../assets/data/portfolioData'

export default function Skills() {
    const skillCategories = [
        {
            title: 'Frontend Engineering',
            icon: <Code2 className="text-[#D4AF37]" size={24} />,
            items: skills.frontend,
            description: 'Building responsive, reactive, and accessible user interfaces with modern web standards.',
        },
        {
            title: 'Backend & Integrations',
            icon: <Server className="text-[#D4AF37]" size={24} />,
            items: skills.backend,
            description: 'Engineering REST APIs, real-time Socket.io engines, and cloud databases.',
        },
        {
            title: 'Data & Verification',
            icon: <Database className="text-[#D4AF37]" size={24} />,
            items: skills.dataAndAnalysis,
            description: 'Conducting structured data analysis, fact-checking workflows, and dataset verification.',
        },
        {
            title: 'Technical Leadership',
            icon: <Users className="text-[#D4AF37]" size={24} />,
            items: skills.leadership,
            description: 'Directing developer intern groups, executive coordination, and STEM education.',
        },
    ]

    return (
        <section id="skills" className="py-16 sm:py-20 bg-[#0C0C0C] border-y border-white/5 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-10 sm:mb-14">
                    <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-2">Core Competencies</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Capabilities & Technical Stack
                    </h2>
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group hover:shadow-xl hover:shadow-[#D4AF37]/5"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-105 transition-transform">
                                {category.icon}
                            </div>

                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                                {category.title}
                            </h3>

                            <p className="text-sm text-gray-400 mb-5 sm:mb-6 leading-relaxed">
                                {category.description}
                            </p>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 group-hover:border-[#D4AF37]/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}