import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400">
            © 2024 Afreen Alam. Cybersecurity Specialist & Data Protection Expert.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 