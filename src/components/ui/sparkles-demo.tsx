"use client";
import React from "react";
import { SparklesCore } from "./sparkles";
import { Shield, Database, Lock, Globe } from "lucide-react";

export function CybersecuritySparklesHero() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950/90 to-indigo-950 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="cybersecurity-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#00d4ff"
          speed={0.8}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        {/* Status Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 backdrop-blur-xl mb-8">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-3"></div>
          <span className="text-emerald-300 text-sm font-medium">Cybersecurity Professional</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
          Securing the
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Digital Future
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          IoT Graduate • Threat Detection Expert • Data Protection Specialist
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group">
            <Shield className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium">Cybersecurity</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 group">
            <Database className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium">Data Analysis</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 group">
            <Lock className="w-8 h-8 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium">Threat Detection</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 group">
            <Globe className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium">IoT Security</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105">
            View Projects
          </button>
          <button className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm text-white font-semibold rounded-2xl border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:bg-slate-700/80 hover:scale-105">
            Download Resume
          </button>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30 pointer-events-none"></div>
    </div>
  );
}

export function SparklesShowcase() {
  return (
    <div className="h-[60rem] relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-xl">
      {/* Background Sparkles */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="showcase-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#8b5cf6"
          speed={0.5}
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-8 relative z-20 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Protecting Digital Assets
        </h2>
        <p className="text-neutral-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          Specialized in building threat detection dashboards, incident response pipelines, 
          and implementing GDPR/HIPAA-compliant security solutions.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">100+</div>
            <div className="text-slate-400 text-sm">Security Assessments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-slate-400 text-sm">Vulnerabilities Fixed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-slate-400 text-sm">Threat Monitoring</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SparklesExperience() {
  return (
    <div className="h-[50rem] relative w-full bg-gradient-to-br from-slate-950 to-blue-950/80 flex flex-col items-center justify-center overflow-hidden rounded-xl">
      {/* Background Sparkles */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="experience-sparkles"
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#10b981"
          speed={1.2}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Experience & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Technical Skills</h3>
            <ul className="text-slate-300 space-y-2 text-left">
              <li>• Penetration Testing & Vulnerability Assessment</li>
              <li>• SIEM Implementation & Threat Hunting</li>
              <li>• Network Security & Firewall Configuration</li>
              <li>• Incident Response & Digital Forensics</li>
            </ul>
          </div>
          
          <div className="p-8 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Certifications</h3>
            <ul className="text-slate-300 space-y-2 text-left">
              <li>• Computer Science (IoT) Graduate</li>
              <li>• GDPR/HIPAA Compliance Specialist</li>
              <li>• Data Protection & Privacy Expert</li>
              <li>• Blockchain Security Enthusiast</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 