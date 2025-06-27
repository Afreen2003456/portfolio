import { motion } from "framer-motion";
import { Heart, Mail, Phone, MapPin, Github, Linkedin, Twitter, Shield, Sparkles } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-white" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl shadow-blue-500/30 border border-white/20">
                  <span className="text-white font-black text-lg">AA</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-100">
                  Afreen Alam
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300 text-sm font-medium">Cybersecurity Specialist</span>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md mb-6">
              Passionate about securing digital landscapes and protecting data integrity. 
              Specialized in <span className="text-cyan-400 font-semibold">threat detection</span>, 
              <span className="text-emerald-400 font-semibold"> compliance</span>, and 
              <span className="text-purple-400 font-semibold"> data analytics</span>.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-slate-500/70 flex items-center justify-center transition-all duration-300 text-slate-400 ${social.color} shadow-lg`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-slate-200 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:w-2 transition-all duration-300"></div>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-400" />
              Get In Touch
            </h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:alamafreen93@gmail.com"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 text-slate-400 hover:text-slate-200 transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">alamafreen93@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+919324208312"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 text-slate-400 hover:text-slate-200 transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+91 93242 08312</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 text-slate-400 transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Available Worldwide</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-slate-700/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span>© 2024 Afreen Alam. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>and</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl rounded-full border border-slate-600/50 shadow-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-slate-300 text-sm font-medium">Available for opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-500 opacity-60"></div>
        <div className="absolute top-1/2 right-8 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-1000 opacity-60"></div>
      </div>
    </footer>
  );
} 