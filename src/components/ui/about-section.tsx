import { motion } from "framer-motion";
import { GraduationCap, Phone, Mail, Linkedin, Award } from "lucide-react";

export function AboutSection() {
  const certifications = [
    "Google Project Management: Professional Certificate",
    "Microsoft: Power BI Essentials",
    "Google: Data Analysis with R Programming",
    "Infosys Springboard: Introduction to Cybersecurity",
    "KNIME: Analytics Platform Proficiency",
    "Excel Skills for Business: Essentials"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate about building secure systems that balance innovation and compliance
          </p>
        </motion.div>

        {/* Education and Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-slate-900/80 via-blue-900/40 to-slate-800/80 border border-blue-500/30 backdrop-blur-md hover:scale-105 transition-all duration-500 overflow-hidden shadow-2xl rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Education</h3>
                  <p className="text-slate-400 font-medium">University of Mumbai</p>
                </div>
              </div>
              <p className="text-slate-200 mb-2 font-semibold">B.E. in Computer Science (IoT)</p>
              <p className="text-slate-400">Expected Graduation: May 2025</p>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-slate-800/80 border border-purple-500/30 backdrop-blur-md hover:scale-105 transition-all duration-500 overflow-hidden shadow-2xl rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="p-8 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Contact</h3>
                  <p className="text-slate-400 font-medium">Get in touch</p>
                </div>
              </div>
              <div className="space-y-3 text-slate-200">
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">+91 93242 08312</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">alamafreen93@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-semibold">linkedin.com/in/afreen-alam2003</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900/50 to-indigo-900/30 border-slate-700/50 backdrop-blur-sm rounded-2xl border"
        >
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-indigo-300 mb-6 flex items-center gap-3">
              <Award className="w-8 h-8" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-200 group"
                >
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-200">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 