import { motion } from "framer-motion";
import { Shield, FileText, BarChart3, Code, Lock, Link2, Sparkles, Star } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Shield,
      title: "Cybersecurity Tools",
      gradient: "from-red-500 via-pink-500 to-rose-500",
      bgGradient: "from-red-500/20 to-pink-500/20",
      shadowColor: "shadow-red-500/25",
      skills: ["Threat Detection", "Risk Management", "IDS/IPS", "Encryption", "Secure APIs"]
    },
    {
      icon: FileText,
      title: "Compliance & Privacy",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      shadowColor: "shadow-blue-500/25",
      skills: ["GDPR", "HIPAA", "IT Act", "Secure Data Handling", "Access Control"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Monitoring",
      gradient: "from-purple-500 via-violet-500 to-fuchsia-500",
      bgGradient: "from-purple-500/20 to-fuchsia-500/20",
      shadowColor: "shadow-purple-500/25",
      skills: ["Power BI", "SQL", "KNIME", "Apache Spark", "Network Logs"]
    },
    {
      icon: Code,
      title: "Programming",
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      bgGradient: "from-emerald-500/20 to-teal-500/20",
      shadowColor: "shadow-emerald-500/25",
      skills: ["Python", "SQL", "Smart Contracts", "API Development"]
    },
    {
      icon: Lock,
      title: "Operations Security",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      bgGradient: "from-amber-500/20 to-orange-500/20",
      shadowColor: "shadow-amber-500/25",
      skills: ["Incident Response", "Anomaly Detection", "Log Analysis", "Firewall Monitoring"]
    },
    {
      icon: Link2,
      title: "Blockchain Security",
      gradient: "from-indigo-500 via-blue-500 to-purple-500",
      bgGradient: "from-indigo-500/20 to-purple-500/20",
      shadowColor: "shadow-indigo-500/25",
      skills: ["Cryptographic Hashing", "Smart Contracts", "Identity Verification"]
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000 opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-500 opacity-50"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>
        
        {/* Floating sparkles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-500 opacity-60"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping delay-1000 opacity-60"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl rounded-full border border-slate-600/50 mb-8 shadow-2xl"
          >
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-slate-300 font-semibold">Technical Expertise</span>
            <Star className="w-5 h-5 text-yellow-400 animate-pulse delay-300" />
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-black mb-6 text-slate-100 drop-shadow-2xl">
            Core Competencies
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Specialized skills in <span className="text-cyan-400 font-semibold">cybersecurity</span>, 
            <span className="text-emerald-400 font-semibold"> data analytics</span>, and 
            <span className="text-purple-400 font-semibold"> secure system development</span>
          </p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative bg-gradient-to-br from-slate-800/90 via-slate-700/70 to-slate-800/90 border border-slate-600/50 backdrop-blur-xl hover:border-slate-500/70 transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl ${category.shadowColor} hover:shadow-2xl`}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-slate-600/20 to-slate-500/10 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-slate-600/15 to-slate-700/5 rounded-full animate-bounce delay-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-xl ${category.shadowColor} border border-white/20`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-slate-50 transition-colors duration-300 drop-shadow-lg">
                        {category.title}
                      </h3>
                      <div className={`w-12 h-1 bg-gradient-to-r ${category.gradient} rounded-full mt-2 group-hover:w-20 transition-all duration-300`}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        className="flex items-center gap-3 group/skill p-2 rounded-lg hover:bg-slate-700/5 transition-all duration-300"
                      >
                        <motion.div 
                          className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full shadow-lg`}
                          whileHover={{ scale: 2 }}
                          transition={{ duration: 0.2 }}
                        ></motion.div>
                        <span className="text-slate-300 group-hover/skill:text-slate-100 transition-colors duration-300 font-medium">
                          {skill}
                        </span>
                        <div className={`ml-auto w-0 h-0.5 bg-gradient-to-r ${category.gradient} group-hover/skill:w-4 transition-all duration-300 rounded-full`}></div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Skill count badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`px-3 py-1 bg-gradient-to-r ${category.gradient} rounded-full text-white text-xs font-bold shadow-lg`}>
                      {category.skills.length} Skills
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-slate-800/60 via-slate-700/60 to-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-600/50 shadow-2xl">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-2 border-white/20"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white/20"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-2 border-white/20"></div>
            </div>
            <span className="text-slate-300 font-semibold">
              Ready to leverage these skills for your next project?
            </span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 