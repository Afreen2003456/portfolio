import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, ExternalLink, Download, Phone, Mail, CheckCircle, Sparkles } from 'lucide-react';
import { InteractiveRobot } from './interactive-robot';

export function HeroSection() {
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  const showNotification = (message: string, type: 'success' | 'info' | 'error' = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      showNotification('Scrolling to projects section...', 'success');
    } else {
      showNotification('Projects section coming soon!', 'info');
    }
  };

  const handleDownloadResume = () => {
    try {
      showNotification('Resume will be available soon!', 'error');
    } catch (error) {
      showNotification('Resume will be available soon!', 'error');
      console.error('Resume download error:', error);
    }
  };

  // Handle contact actions
  const handlePhoneClick = () => {
    try {
      window.open('tel:+919324208312', '_self');
      showNotification('Opening phone dialer...', 'success');
    } catch (error) {
      navigator.clipboard.writeText('+91 93242 08312');
      showNotification('Phone number copied to clipboard!', 'success');
    }
  };

  const handleEmailClick = () => {
    try {
      const subject = encodeURIComponent('Hello Afreen - Portfolio Inquiry');
      const body = encodeURIComponent('Hi Afreen,\\n\\nI viewed your portfolio and would like to get in touch with you regarding potential opportunities.\\n\\nBest regards');
      window.open(`mailto:alamafreen93@gmail.com?subject=${subject}&body=${body}`, '_self');
      showNotification('Opening email client...', 'success');
    } catch (error) {
      navigator.clipboard.writeText('alamafreen93@gmail.com');
      showNotification('Email address copied to clipboard!', 'success');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Notification Toast */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-600/50 rounded-2xl shadow-2xl shadow-slate-900/50"
        >
          <CheckCircle className={`w-5 h-5 ${
            notification.type === 'success' ? 'text-emerald-400' : 
            notification.type === 'error' ? 'text-rose-400' : 'text-cyan-400'
          }`} />
          <span className="text-white font-display font-semibold tracking-wide">{notification.message}</span>
          <div className={`w-2 h-2 rounded-full animate-pulse ${
            notification.type === 'success' ? 'bg-emerald-400' : 
            notification.type === 'error' ? 'bg-rose-400' : 'bg-cyan-400'
          }`}></div>
        </motion.div>
      )}

      {/* Ultra Enhanced Animated Background - Stylish Dark Version */}
      <div className="absolute inset-0">
        {/* Multi-layer gradient background - Enhanced with more depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 via-slate-800/70 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-slate-900/80 via-transparent via-slate-800/60 to-slate-950/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-900/80"></div>
        
        {/* Enhanced animated gradient overlays with more vibrant colors */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/30 via-transparent via-purple-900/30 to-pink-900/30 animate-pulse opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-900/25 via-transparent via-blue-900/25 to-violet-900/25 animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-transparent via-rose-900/20 to-indigo-900/20 animate-pulse delay-2000 opacity-40"></div>
        
        {/* Enhanced floating orbs with more variety */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/40 via-cyan-500/35 to-purple-500/40 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/40 via-pink-500/35 to-rose-500/40 rounded-full blur-3xl animate-pulse delay-1000 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/30 via-blue-500/25 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-500 opacity-60"></div>
        
        {/* Additional stylish floating elements */}
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-emerald-500/45 to-teal-500/45 rounded-full blur-2xl animate-bounce opacity-90"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-gradient-to-r from-orange-500/45 to-yellow-500/45 rounded-full blur-2xl animate-bounce delay-700 opacity-90"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-to-r from-violet-500/50 to-purple-500/50 rounded-full blur-xl animate-bounce delay-300 opacity-95"></div>
        <div className="absolute bottom-1/3 left-32 w-36 h-36 bg-gradient-to-r from-pink-500/45 to-rose-500/45 rounded-full blur-xl animate-bounce delay-1000 opacity-90"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-gradient-to-r from-lime-500/40 to-green-500/40 rounded-full blur-lg animate-bounce delay-1500 opacity-85"></div>
        
        {/* Enhanced animated grid pattern with better visibility */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.4)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
        
        {/* Stylish noise texture - Fixed SVG */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-soft-light">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}></div>
        </div>

        {/* Enhanced animated light rays with more colors */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-pulse delay-200"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-pulse delay-700"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-pulse delay-1200"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/40 to-transparent animate-pulse delay-400"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/40 to-transparent animate-pulse delay-900"></div>
        
        {/* Enhanced ping animations with more variety */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-blue-400/70 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400/70 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-emerald-400/70 rounded-full animate-ping delay-1100"></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-pink-400/70 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-cyan-400/70 rounded-full animate-ping delay-800"></div>
        <div className="absolute top-1/3 right-10 w-3 h-3 bg-orange-400/70 rounded-full animate-ping delay-1300"></div>
        
        {/* Stylish floating animated shapes */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-blue-400/30 rounded-full animate-spin opacity-40" style={{ animationDuration: '25s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-purple-400/30 rounded-full animate-spin opacity-40" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 border border-emerald-400/25 rounded-full animate-spin opacity-35" style={{ animationDuration: '30s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-36 h-36 border border-pink-400/25 rounded-full animate-spin opacity-35" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
        
        {/* Enhanced radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.4)_70%,rgba(2,6,23,0.9)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full z-10 relative pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Enhanced Text content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Ultra Enhanced Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-10 py-5 rounded-3xl bg-gradient-to-r from-emerald-500/40 via-green-500/35 to-teal-500/40 border-2 border-emerald-400/70 backdrop-blur-xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-4 h-4 bg-gradient-to-r from-emerald-300 to-green-300 rounded-full animate-pulse mr-4 shadow-lg shadow-emerald-300/90"></div>
              <Sparkles className="w-6 h-6 text-emerald-200 mr-4 animate-sparkle" />
              <span className="text-emerald-100 text-lg font-display font-black tracking-wide drop-shadow-lg">
                Available for opportunities
              </span>
              <div className="ml-4 w-3 h-3 bg-emerald-300 rounded-full animate-ping shadow-lg shadow-emerald-300/90"></div>
            </motion.div>

            {/* Ultra Enhanced Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black leading-[0.85] tracking-tight">
                <span className="block text-slate-100 mb-4 font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase animate-fade-in-up drop-shadow-2xl text-shadow-strong">
                  Hi, I'm
                </span>
                <span className="block bg-gradient-to-r from-slate-50 via-white to-slate-100 bg-clip-text text-transparent font-heading font-black drop-shadow-2xl text-shadow-strong animate-shimmer">
                  Afreen Alam
                </span>
                <div className="mt-6 w-40 h-2 bg-gradient-to-r from-slate-300 via-white to-slate-100 rounded-full animate-shimmer shadow-lg"></div>
              </h1>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-xl md:text-2xl">
                <div className="flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-slate-800/95 via-slate-700/90 to-slate-800/95 rounded-3xl border-2 border-blue-400/70 backdrop-blur-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 group hover:scale-105">
                  <Shield className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 drop-shadow-lg" />
                  <span className="font-display font-black text-slate-100 tracking-wide drop-shadow-lg">Cybersecurity Specialist</span>
                </div>
                <div className="flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-slate-800/95 via-slate-700/90 to-slate-800/95 rounded-3xl border-2 border-purple-400/70 backdrop-blur-xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 group hover:scale-105">
                  <Database className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-300 drop-shadow-lg" />
                  <span className="font-display font-black text-slate-100 tracking-wide drop-shadow-lg">Data Analyst</span>
                </div>
              </div>
            </motion.div>

            {/* Ultra Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 max-w-2xl mx-auto lg:mx-0"
            >
              <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed font-sans font-black drop-shadow-lg text-shadow">
                Recent Computer Science (IoT) graduate specializing in{" "}
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-black drop-shadow-lg">Cybersecurity</span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-black drop-shadow-lg">Data Protection</span>.
              </p>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-sans font-bold drop-shadow-md text-shadow">
                Experienced in building{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-black">threat detection dashboards</span>,{" "}
                <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent font-black">incident response pipelines</span>, and implementing{" "}
                <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent font-black">GDPR/HIPAA-compliant</span>{" "}
                solutions.
              </p>
            </motion.div>

            {/* Ultra Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start"
            >
              <button
                onClick={handleViewWork}
                className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-display font-black text-xl rounded-3xl shadow-2xl shadow-blue-600/40 hover:shadow-blue-500/60 transition-all duration-300 hover:scale-110 overflow-hidden border-2 border-blue-400/80 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-5">
                  <span className="text-xl font-black tracking-wide drop-shadow-lg">View My Work</span>
                  <ExternalLink className="w-7 h-7 group-hover:rotate-45 transition-transform duration-300 drop-shadow-lg" />
                  <div className="absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping opacity-80"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              <button
                onClick={handleDownloadResume}
                className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-display font-black text-xl rounded-3xl shadow-2xl shadow-purple-600/40 hover:shadow-purple-500/60 transition-all duration-300 hover:scale-110 overflow-hidden border-2 border-purple-400/80 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-5">
                  <span className="text-xl font-black tracking-wide drop-shadow-lg">Download Resume</span>
                  <Download className="w-7 h-7 group-hover:translate-y-1 transition-transform duration-300 drop-shadow-lg" />
                  <div className="absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-80"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </motion.div>

            {/* Ultra Enhanced Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start"
            >
              <button
                onClick={handlePhoneClick}
                className="group flex items-center gap-6 px-10 py-6 bg-gradient-to-r from-emerald-600/90 via-emerald-700/90 to-emerald-800/90 backdrop-blur-xl border-2 border-emerald-400/80 rounded-3xl hover:border-emerald-300 hover:bg-gradient-to-r hover:from-emerald-500/95 hover:via-emerald-600/95 hover:to-emerald-700/95 transition-all duration-300 hover:scale-110 shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-500/60"
              >
                <div className="p-4 bg-gradient-to-r from-emerald-500/40 to-teal-500/40 rounded-2xl group-hover:from-emerald-400/50 group-hover:to-teal-400/50 transition-all duration-300 shadow-lg shadow-emerald-500/30">
                  <Phone className="w-7 h-7 text-white drop-shadow-lg" />
                </div>
                <div className="text-left">
                  <p className="text-emerald-200 text-sm font-display font-bold tracking-wide uppercase drop-shadow-md">Call me</p>
                  <p className="text-white text-lg font-mono font-black tracking-wide drop-shadow-lg">+91 93242 08312</p>
                </div>
              </button>

              <button
                onClick={handleEmailClick}
                className="group flex items-center gap-6 px-10 py-6 bg-gradient-to-r from-rose-600/90 via-rose-700/90 to-rose-800/90 backdrop-blur-xl border-2 border-rose-400/80 rounded-3xl hover:border-rose-300 hover:bg-gradient-to-r hover:from-rose-500/95 hover:via-rose-600/95 hover:to-rose-700/95 transition-all duration-300 hover:scale-110 shadow-2xl shadow-rose-600/40 hover:shadow-rose-500/60"
              >
                <div className="p-4 bg-gradient-to-r from-rose-500/40 to-pink-500/40 rounded-2xl group-hover:from-rose-400/50 group-hover:to-pink-400/50 transition-all duration-300 shadow-lg shadow-rose-500/30">
                  <Mail className="w-7 h-7 text-white drop-shadow-lg" />
                </div>
                <div className="text-left">
                  <p className="text-rose-200 text-sm font-display font-bold tracking-wide uppercase drop-shadow-md">Email me</p>
                  <p className="text-white text-lg font-mono font-black tracking-wide drop-shadow-lg">alamafreen93@gmail.com</p>
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right side - Enhanced Interactive Robot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            {/* Robot Container with Enhanced Dark Background */}
            <div className="relative w-full h-[700px] rounded-3xl overflow-hidden bg-gradient-to-br from-black/90 via-slate-950/95 to-black/90 backdrop-blur-xl border-2 border-slate-700/60 shadow-2xl shadow-black/60 hover:shadow-black/80 transition-all duration-300">
              {/* Enhanced Status Indicator with better visibility */}
              <div className="absolute top-8 left-8 z-20 flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-white/95 to-gray-100/95 backdrop-blur-xl border-2 border-gray-300/60 rounded-full shadow-lg shadow-gray-900/60">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/70"></div>
                <span className="text-slate-900 text-base font-black tracking-wide drop-shadow-sm">Security Bot Online</span>
              </div>

              {/* Enhanced Scanning Message */}
              <div className="absolute top-20 left-8 right-8 z-20 flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/90 to-cyan-600/90 backdrop-blur-xl border border-blue-400/60 rounded-2xl shadow-lg shadow-blue-600/40">
                <Shield className="w-5 h-5 text-white animate-pulse" />
                <span className="text-white text-sm font-black tracking-wide drop-shadow-lg">🛡️ Scanning for threats...</span>
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </div>

              {/* Interactive Robot Component */}
              <div className="absolute inset-8 flex items-center justify-center">
                <InteractiveRobot />
              </div>

              {/* Enhanced Interactive Hint with better visibility */}
              <div className="absolute bottom-8 left-8 right-8 z-20 flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-white/95 via-gray-100/95 to-white/95 backdrop-blur-xl border-2 border-gray-300/60 rounded-2xl shadow-lg shadow-gray-900/60 hover:shadow-gray-900/80 transition-all duration-300">
                <Sparkles className="w-6 h-6 text-cyan-500 animate-pulse" />
                <span className="text-slate-900 text-base font-black tracking-wide drop-shadow-sm">Interactive Cybersecurity Robot - Click to activate!</span>
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-ping"></div>
              </div>

              {/* Enhanced floating decorative elements */}
              <div className="absolute top-1/4 left-4 w-6 h-6 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full animate-bounce delay-200 blur-sm shadow-lg shadow-blue-400/30"></div>
              <div className="absolute top-1/3 right-6 w-4 h-4 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full animate-bounce delay-700 blur-sm shadow-lg shadow-purple-400/30"></div>
              <div className="absolute bottom-1/3 left-6 w-5 h-5 bg-gradient-to-r from-emerald-400/40 to-teal-400/40 rounded-full animate-bounce delay-1000 blur-sm shadow-lg shadow-emerald-400/30"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-r from-orange-400/40 to-yellow-400/40 rounded-full animate-bounce delay-500 blur-sm shadow-lg shadow-orange-400/30"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30 pointer-events-none"></div>
    </section>
  );
} 