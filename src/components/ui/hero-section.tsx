import { motion } from "framer-motion";
import { Phone, Mail, Download, ExternalLink, CheckCircle, Sparkles, Shield, Database } from "lucide-react";
import { InteractiveRobot } from "./interactive-robot";
import { useState } from "react";

export function HeroSection() {
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Show notification
  const showNotification = (message: string, type: 'success' | 'info' | 'error' = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Handle smooth scroll to projects section
  const handleViewWork = () => {
    const projectsSection = document.getElementById('experience') || document.getElementById('projects') || document.getElementById('work');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      showNotification('Scrolling to work section...', 'success');
    } else {
      // Fallback: scroll to about section or just scroll down
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      showNotification('Navigating to work section...', 'info');
    }
  };

  // Handle resume download
  const handleDownloadResume = () => {
    try {
      const resumeUrl = 'https://drive.google.com/file/d/1your-actual-resume-file-id/view?usp=sharing';
      window.open(resumeUrl, '_blank');
      showNotification('Opening resume in new tab...', 'success');
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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50">
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

      {/* Ultra Enhanced Animated Background - Light Version */}
      <div className="absolute inset-0">
        {/* Multi-layer gradient background - Light and Attractive */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/80 via-purple-50/60 to-slate-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-50/60 via-transparent via-purple-50/40 to-slate-50/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/40 via-transparent to-white/60"></div>
        
        {/* Enhanced animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/20 via-transparent via-purple-200/20 to-pink-200/20 animate-pulse opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-200/15 via-transparent via-blue-200/15 to-violet-200/15 animate-pulse delay-1000 opacity-40"></div>
        
        {/* Enhanced floating orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-200/30 via-cyan-200/25 to-purple-200/30 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-200/30 via-pink-200/25 to-rose-200/30 rounded-full blur-3xl animate-pulse delay-1000 opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-indigo-200/20 via-blue-200/15 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-500 opacity-50"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-emerald-500/35 to-teal-500/35 rounded-full blur-2xl animate-bounce opacity-80"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-r from-orange-500/35 to-yellow-500/35 rounded-full blur-2xl animate-bounce delay-700 opacity-80"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-violet-500/40 to-purple-500/40 rounded-full blur-xl animate-bounce delay-300 opacity-85"></div>
        <div className="absolute bottom-1/3 left-32 w-28 h-28 bg-gradient-to-r from-pink-500/35 to-rose-500/35 rounded-full blur-xl animate-bounce delay-1000 opacity-80"></div>
        
        {/* Enhanced animated grid pattern */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
        
        {/* Enhanced animated light rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/40 to-transparent animate-pulse delay-200"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/40 to-transparent animate-pulse delay-700"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent animate-pulse delay-1200"></div>
        
        {/* Ping animations */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/60 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400/60 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping delay-1100"></div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-pink-400/60 rounded-full animate-ping delay-500"></div>
        
        {/* Floating animated shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/20 rounded-full animate-spin opacity-30" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-400/20 rounded-full animate-spin opacity-30" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        
        {/* Enhanced radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.3)_70%,rgba(2,6,23,0.8)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full z-10 relative pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Enhanced Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500/30 via-green-500/25 to-teal-500/30 border border-emerald-400/60 backdrop-blur-xl shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
            >
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-300 to-green-300 rounded-full animate-pulse mr-3 shadow-lg shadow-emerald-300/80"></div>
              <Sparkles className="w-5 h-5 text-emerald-200 mr-3 animate-sparkle" />
              <span className="text-emerald-100 text-base font-display font-bold tracking-wide">
                Available for opportunities
              </span>
              <div className="ml-3 w-2 h-2 bg-emerald-300 rounded-full animate-ping shadow-lg shadow-emerald-300/80"></div>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black leading-[0.9] tracking-tight">
                <span className="block text-slate-900 mb-3 font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-wider uppercase animate-fade-in-up drop-shadow-lg">
                  Hi, I'm
                </span>
                <span className="block text-slate-800 font-heading font-black drop-shadow-2xl text-shadow-lg">
                  Afreen Alam
                </span>
                <div className="mt-4 w-32 h-1 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full animate-shimmer"></div>
              </h1>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-lg md:text-xl">
                <div className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/90 via-blue-50/80 to-white/90 rounded-2xl border border-blue-400/60 backdrop-blur-xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 group">
                  <Shield className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  <span className="font-display font-bold text-slate-800 tracking-wide">Cybersecurity Specialist</span>
                </div>
                <div className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/90 via-purple-50/80 to-white/90 rounded-2xl border border-purple-400/60 backdrop-blur-xl shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 group">
                  <Database className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                  <span className="font-display font-bold text-slate-800 tracking-wide">Data Analyst</span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 max-w-2xl mx-auto lg:mx-0"
            >
              <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-sans font-bold drop-shadow-md">
                Recent Computer Science (IoT) graduate specializing in{" "}
                <span className="text-blue-800 font-black">Cybersecurity</span>{" "}
                and{" "}
                <span className="text-purple-800 font-black">Data Protection</span>.
              </p>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans font-semibold drop-shadow-sm">
                Experienced in building{" "}
                <span className="text-emerald-800 font-bold">threat detection dashboards</span>,{" "}
                <span className="text-orange-800 font-bold">incident response pipelines</span>, and implementing{" "}
                <span className="text-rose-800 font-bold">GDPR/HIPAA-compliant</span>{" "}
                solutions.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <button
                onClick={handleViewWork}
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-display font-bold rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 overflow-hidden border border-cyan-400/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-4">
                  <span className="text-xl font-bold tracking-wide">View My Work</span>
                  <ExternalLink className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              <button
                onClick={handleDownloadResume}
                className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-display font-bold rounded-2xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 overflow-hidden border border-emerald-400/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-4">
                  <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
                  <span className="text-xl font-bold tracking-wide">Download Resume</span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </motion.div>

            {/* Enhanced Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <button
                onClick={handlePhoneClick}
                className="group flex items-center gap-5 px-8 py-5 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl border border-slate-600/60 rounded-2xl hover:border-blue-400/60 transition-all duration-300 hover:scale-105 shadow-2xl shadow-slate-900/60"
              >
                <div className="p-4 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 rounded-xl group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-all duration-300 shadow-lg shadow-blue-500/20">
                  <Phone className="w-6 h-6 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 font-display font-medium tracking-wide">Call me</p>
                  <p className="text-white font-display font-bold text-lg group-hover:text-blue-300 transition-colors duration-300">+91 93242 08312</p>
                </div>
                <div className="ml-auto">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse group-hover:animate-ping shadow-lg shadow-blue-400/60"></div>
                </div>
              </button>

              <button
                onClick={handleEmailClick}
                className="group flex items-center gap-5 px-8 py-5 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl border border-slate-600/60 rounded-2xl hover:border-purple-400/60 transition-all duration-300 hover:scale-105 shadow-2xl shadow-slate-900/60"
              >
                <div className="p-4 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-xl group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all duration-300 shadow-lg shadow-purple-500/20">
                  <Mail className="w-6 h-6 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 font-display font-medium tracking-wide">Email me</p>
                  <p className="text-white font-display font-bold text-lg group-hover:text-purple-300 transition-colors duration-300">alamafreen93@gmail.com</p>
                </div>
                <div className="ml-auto">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse group-hover:animate-ping shadow-lg shadow-purple-400/60"></div>
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right side - Interactive Cybersecurity Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            {/* Robot Container with Dark Background */}
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-black/80 via-slate-950/90 to-black/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-black/50">
              {/* Enhanced Status Indicator */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-slate-950/95 to-slate-900/95 backdrop-blur-xl border border-slate-600/50 rounded-full shadow-lg shadow-slate-900/50">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/60"></div>
                <span className="text-emerald-300 text-sm font-semibold">Security Bot Online</span>
              </div>

              {/* Interactive Robot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <InteractiveRobot className="scale-110" />
              </div>

              {/* Enhanced Interactive Hint */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 backdrop-blur-xl border border-slate-600/50 rounded-2xl shadow-lg shadow-slate-900/50">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="text-cyan-300 text-sm font-semibold">Interactive Cybersecurity Robot - Click to activate!</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              </div>

              {/* Enhanced Floating Decorative Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full animate-bounce delay-200 blur-sm shadow-lg shadow-blue-400/30"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full animate-bounce delay-500 blur-sm shadow-lg shadow-purple-400/30"></div>
                <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full animate-bounce delay-700 blur-sm shadow-lg shadow-cyan-400/20"></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-gradient-to-r from-emerald-400/40 to-teal-400/40 rounded-full animate-bounce delay-1000 blur-sm shadow-lg shadow-emerald-400/30"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/20 pointer-events-none"></div>
    </section>
  );
} 