import { motion } from "framer-motion";
import { Shield, FileText, BarChart3, Code, Lock, Link2 } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Shield,
      title: "Cybersecurity Tools",
      gradient: "from-red-500 to-orange-500",
      skills: ["Threat Detection", "Risk Management", "IDS/IPS", "Encryption", "Secure APIs"]
    },
    {
      icon: FileText,
      title: "Compliance & Privacy",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["GDPR", "HIPAA", "IT Act", "Secure Data Handling", "Access Control"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Monitoring",
      gradient: "from-purple-500 to-pink-500",
      skills: ["Power BI", "SQL", "KNIME", "Apache Spark", "Network Logs"]
    },
    {
      icon: Code,
      title: "Programming",
      gradient: "from-green-500 to-emerald-500",
      skills: ["Python", "SQL", "Smart Contracts", "API Development"]
    },
    {
      icon: Lock,
      title: "Operations Security",
      gradient: "from-yellow-500 to-orange-500",
      skills: ["Incident Response", "Anomaly Detection", "Log Analysis", "Firewall Monitoring"]
    },
    {
      icon: Link2,
      title: "Blockchain Security",
      gradient: "from-indigo-500 to-purple-500",
      skills: ["Cryptographic Hashing", "Smart Contracts", "Identity Verification"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Core Competencies
          </h2>
          <p className="text-xl text-slate-300">Specialized skills in cybersecurity, data analytics, and secure system development</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 rounded-2xl border overflow-hidden"
              >
                <div className="p-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-slate-100 transition-colors duration-300">{category.title}</h3>
                    </div>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 group/skill"
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${category.gradient} rounded-full group-hover/skill:scale-150 transition-transform duration-300`}></div>
                          <span className="text-slate-300 text-sm group-hover/skill:text-slate-200 transition-colors duration-300">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 