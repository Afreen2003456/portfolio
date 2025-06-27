import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { SplineScene } from "./splite";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 via-purple-950 to-indigo-950"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent via-purple-900/20 to-pink-900/20 animate-pulse"></div>
        
        {/* Floating orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-cyan-500/15 to-purple-500/20 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/20 via-pink-500/15 to-rose-500/20 rounded-full blur-3xl animate-pulse delay-1000 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-blue-500/5 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500 opacity-60"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-2xl animate-bounce opacity-50"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-r from-orange-500/15 to-yellow-500/15 rounded-full blur-2xl animate-bounce delay-700 opacity-50"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-xl animate-bounce delay-300 opacity-60"></div>
        <div className="absolute bottom-1/3 left-32 w-20 h-20 bg-gradient-to-r from-pink-500/15 to-rose-500/15 rounded-full blur-xl animate-bounce delay-1000 opacity-50"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-soft-light">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        
        {/* Animated light rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse delay-200"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse delay-700"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse delay-1200"></div>
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.3)_70%,rgba(2,6,23,0.8)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full z-10 relative pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 border border-green-500/40 backdrop-blur-xl shadow-2xl shadow-green-500/10"
            >
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse mr-3 shadow-lg shadow-green-400/50"></div>
              <span className="text-green-300 text-sm font-semibold">
                Available for opportunities
              </span>
              <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-ping shadow-lg shadow-green-400/50"></div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white mb-2 drop-shadow-2xl">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent font-extrabold drop-shadow-2xl">
                  Afreen Alam
                </span>
              </h1>
              
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl bg-gradient-to-r from-blue-300 via-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent font-bold drop-shadow-lg">
                  Cybersecurity Specialist & Data Analyst
                </p>
                <p className="text-lg text-slate-300 drop-shadow-lg">
                  IoT Graduate | Blockchain Developer | Threat Detection Expert
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-300 max-w-2xl leading-relaxed drop-shadow-lg"
            >
              Recent Computer Science (IoT) graduate specializing in Cybersecurity and Data Protection. 
              Experienced in building threat detection dashboards, incident response pipelines, and 
              implementing GDPR/HIPAA-compliant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm shadow-xl"
              >
                Download Resume
              </motion.button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-400"
            >
              <div className="flex items-center gap-2 hover:text-slate-300 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span>+91 93242 08312</span>
              </div>
              <div className="flex items-center gap-2 hover:text-slate-300 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span>alamafreen93@gmail.com</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Interactive 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* 3D Scene Container */}
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-slate-800/20 via-blue-900/10 to-slate-900/30 backdrop-blur-xl rounded-3xl border border-slate-700/30 border-t-slate-600/50 border-l-slate-600/50 overflow-hidden shadow-2xl shadow-blue-500/10 relative">
                {/* Status indicator */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-2 bg-slate-900/60 backdrop-blur-xl rounded-full border border-slate-700/40 shadow-xl">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <span className="text-green-300 text-sm font-medium">Online</span>
                </div>
                
                {/* Interactive hint */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-center">
                  <div className="bg-slate-900/60 backdrop-blur-xl rounded-lg px-4 py-2 border border-slate-700/40 shadow-xl">
                    <p className="text-slate-300 text-sm">
                      👆 Interactive 3D Scene - Move your mouse around!
                    </p>
                  </div>
                </div>

                {/* 3D Spline Scene */}
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
              
              {/* Enhanced floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full animate-bounce blur-sm shadow-lg shadow-blue-400/20"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-bounce delay-300 blur-sm shadow-lg shadow-purple-400/20"></div>
              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-r from-pink-400/30 to-rose-400/30 rounded-full animate-bounce delay-700 blur-sm shadow-lg shadow-pink-400/20"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full animate-bounce delay-500 blur-sm shadow-lg shadow-emerald-400/20"></div>
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