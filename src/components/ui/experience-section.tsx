import { motion } from "framer-motion";
import { AlertTriangle, Activity, FileCheck, Search } from "lucide-react";

export function ExperienceSection() {
  const projects = [
    {
      icon: AlertTriangle,
      title: "Cybersecurity Analytics: Threat Detection & Incident Response",
      description: "Designed dashboards in Power BI to monitor real-time threats using log files from IDS/IPS systems. Applied ML models (Isolation Forest, DBSCAN) to detect anomalies in access logs.",
      technologies: ["Power BI", "Python", "Anomaly Detection", "GDPR", "HIPAA"],
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Activity,
      title: "Security Analytics Dashboard for Network Monitoring",
      description: "Built a network traffic analysis tool using Apache Spark and KNIME. Clustered event logs using ML techniques to identify suspicious behavior.",
      technologies: ["KNIME", "Apache Spark", "Power BI", "Log Analytics"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileCheck,
      title: "Document Verification System Using Blockchain",
      description: "Implemented a blockchain-based system for secure academic document verification. Used smart contracts to automate validation workflows.",
      technologies: ["Ethereum", "Solidity", "Python", "Cryptography"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Search,
      title: "Fraud Detection System with Data Protection",
      description: "Integrated fraud detection ML model with encrypted data processing and access control. Ensured compliance with financial and privacy regulations.",
      technologies: ["Python", "Tableau", "Risk Analytics", "Secure API"],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const tools = [
    { category: "Security", items: ["IDS/IPS", "GDPR", "HIPAA", "Encryption", "Risk Management", "Log Analytics"] },
    { category: "Analytics", items: ["Power BI", "Tableau", "KNIME", "SQL", "Apache Spark"] },
    { category: "Programming", items: ["Python", "SQL"] },
    { category: "Blockchain & Crypto", items: ["Smart Contracts", "Ethereum", "Hash Functions"] },
    { category: "Cloud & Tools", items: ["AWS", "JIRA", "Git"] }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Cybersecurity Projects
          </h2>
          <p className="text-xl text-slate-300">Real-world applications of cybersecurity and data protection</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 rounded-2xl border overflow-hidden"
              >
                <div className="p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-slate-100 transition-colors duration-300">{project.title}</h3>
                        <p className="text-slate-300 leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                          viewport={{ once: true }}
                          className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${project.gradient} text-white rounded-full shadow-lg`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Tools */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Technical Tools & Platforms
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {tools.map((toolGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 rounded-xl border p-4"
              >
                <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  {toolGroup.category}
                </h4>
                <div className="space-y-2">
                  {toolGroup.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (itemIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 