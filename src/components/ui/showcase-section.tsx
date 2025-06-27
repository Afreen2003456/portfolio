import { motion } from "framer-motion";
import { SplineSceneBasic } from "./spline-demo";

export function ShowcaseSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive 3D Showcase
          </h2>
          <p className="text-xl text-slate-300">
            Experience cutting-edge 3D technology integrated with modern web development
          </p>
        </motion.div>

        {/* 3D Demo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <SplineSceneBasic />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 max-w-3xl mx-auto"
        >
          <p className="text-lg text-slate-300 leading-relaxed">
            This interactive 3D scene demonstrates the integration of advanced web technologies 
            with cybersecurity visualization. The immersive experience showcases how modern 
            web development can create engaging interfaces for complex security dashboards 
            and monitoring systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 