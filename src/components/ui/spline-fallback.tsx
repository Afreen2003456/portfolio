import { motion } from 'framer-motion'

interface SplineFallbackProps {
  className?: string
}

export function SplineFallback({ className }: SplineFallbackProps) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className || ''}`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900/50">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-lg backdrop-blur-sm"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            y: [-10, 10, -10]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-3/4 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full backdrop-blur-sm"
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1.1, 1],
            x: [-15, 15, -15]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 transform rotate-45 backdrop-blur-sm"
          animate={{ 
            rotate: [45, 405],
            scale: [1, 1.3, 0.9, 1],
            y: [-20, 20, -20]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Central content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              className="w-32 h-32 mx-auto mb-6 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
              <div className="absolute inset-2 border-4 border-purple-500/30 rounded-full"></div>
              <div className="absolute inset-4 border-4 border-cyan-500/30 rounded-full"></div>
              <motion.div
                className="absolute inset-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </motion.div>
            </motion.div>
            
            <motion.h3
              className="text-2xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Interactive 3D Experience
            </motion.h3>
            
            <motion.p
              className="text-slate-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Cybersecurity Visualization
            </motion.p>
            
            <motion.div
              className="flex items-center justify-center gap-2 text-sm text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>System Active</span>
            </motion.div>
          </div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
    </div>
  )
} 