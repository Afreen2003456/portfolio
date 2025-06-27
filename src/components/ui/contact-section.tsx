import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Rocket } from "lucide-react";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 93242 08312",
      gradient: "from-green-500 to-emerald-500",
      action: () => window.location.href = 'tel:+919324208312'
    },
    {
      icon: Mail,
      title: "Email",
      value: "alamafreen93@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      action: () => window.location.href = 'mailto:alamafreen93@gmail.com?subject=Collaboration Opportunity&body=Hi Afreen, I would like to discuss potential collaboration opportunities.'
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/afreen-alam2003",
      gradient: "from-purple-500 to-pink-500",
      action: () => window.open('https://linkedin.com/in/afreen-alam2003', '_blank')
    }
  ];

  const handleGetInTouch = () => {
    // Open email client with pre-filled subject and body
    const subject = encodeURIComponent('Partnership & Collaboration Inquiry');
    const body = encodeURIComponent(`Hi Afreen,

I hope this email finds you well. I came across your portfolio and was impressed by your expertise in cybersecurity and data protection.

I would like to discuss potential collaboration opportunities in:
- Cybersecurity consulting
- Data protection and compliance
- Threat detection solutions
- Blockchain development

Please let me know when you're available for a call or meeting.

Best regards,`);
    
    window.location.href = `mailto:alamafreen93@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-300">Ready to discuss cybersecurity solutions and data protection strategies</p>
        </motion.div>

        {/* Contact Methods */}
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
                className="group bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/50 backdrop-blur-md hover:scale-105 transition-all duration-300 rounded-2xl border overflow-hidden cursor-pointer"
                onClick={method.action}
              >
                <div className="p-8 text-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                    <p className="text-slate-300 font-medium">{method.value}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-slate-900/50 to-indigo-900/30 border-slate-700/50 backdrop-blur-sm rounded-2xl border p-12"
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Collaborate?
            </h3>
            <p className="text-xl text-slate-300 mb-8">
              Let's build secure and compliant solutions together
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetInTouch}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 