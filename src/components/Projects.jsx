import React from 'react'
import { ExternalLink, FolderGit2 } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { projects } from '../assets/data/portfolioData'

export default function Projects() {
    return (
        <section id="projects" className="py-14 sm:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-8 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-2">Portfolio</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            Featured Engineering Work
                        </h2>
                    </div>
                    <p className="text-neutral-400 text-sm max-w-md">
                        Production builds, real-time engines, and web applications designed for scale and social impact.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col justify-between p-4 sm:p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
                        >
                            {/* Subtle Ambient Card Glow */}
                            <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/15 transition-all pointer-events-none" />

                            <div>
                                {/* Header Info */}
                                <div className="flex items-center justify-between mb-3 sm:mb-4">
                                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                                        {project.category}
                                    </span>

                                    {/* Action Icons */}
                                    <div className="flex items-center gap-3 text-gray-400">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-[#D4AF37] transition-colors p-1"
                                                title="View Source Code"
                                            >
                                                <GithubIcon size={18} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-[#D4AF37] transition-colors p-1"
                                                title="View Live App"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Title & Tagline */}
                                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3 sm:mb-4">
                                    {project.tagline}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-neutral-300 leading-relaxed mb-4 sm:mb-6">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="pt-3.5 sm:pt-4 border-t border-white/5 flex flex-wrap gap-1.5 sm:gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-medium text-neutral-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                                    >
                                        {tech}
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