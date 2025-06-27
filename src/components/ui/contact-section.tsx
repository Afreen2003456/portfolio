import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Rocket } from "lucide-react";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 93242 08312",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email",
      value: "alamafreen93@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/afreen-alam2003",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-100">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300">Ready to discuss cybersecurity solutions and data protection strategies</p>
        </motion.div>

        {/* Enhanced Contact Methods with Better Visibility */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-slate-800/95 to-slate-700/90 border-2 border-slate-500/80 backdrop-blur-xl hover:scale-105 hover:border-slate-400/90 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/60 hover:shadow-slate-800/80"
              >
                <div className="p-10 text-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-r ${method.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-slate-900/50`}>
                      <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-display tracking-wide drop-shadow-md">{method.title}</h3>
                    <p className="text-slate-200 font-semibold text-lg drop-shadow-sm">{method.value}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-slate-800/90 to-slate-700/80 border-2 border-slate-500/80 backdrop-blur-xl rounded-2xl p-16 shadow-2xl shadow-slate-900/60"
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 animate-pulse">
                <Rocket className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-6 text-white font-display tracking-wide drop-shadow-lg">
              Ready to Collaborate?
            </h3>
            <p className="text-2xl text-slate-200 mb-10 font-semibold drop-shadow-md">
              Let's build secure and compliant solutions together
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full font-bold text-white text-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 border-2 border-white/20 hover:border-white/40 drop-shadow-lg"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 