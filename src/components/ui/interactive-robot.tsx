import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Shield, Zap, Eye, Cpu, Lock } from 'lucide-react'

interface InteractiveRobotProps {
  className?: string
}

export function InteractiveRobot({ className }: InteractiveRobotProps) {
  const [isActive, setIsActive] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const eyeControls = useAnimation()
  const bodyControls = useAnimation()

  const messages = [
    "🛡️ Scanning for threats...",
    "🔒 Systems secure!",
    "📊 Analyzing data patterns...",
    "⚡ Ready to protect!",
    "🎯 Threat detected & neutralized!",
    "🚀 Cybersecurity mode activated!"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [messages.length])

  const handleRobotClick = async () => {
    setIsActive(!isActive)
    
    // Animate eyes
    await eyeControls.start({
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      transition: { duration: 0.8 }
    })

    // Animate body
    await bodyControls.start({
      y: [0, -10, 0],
      transition: { duration: 0.5 }
    })
  }

  return (
    <div className={`relative ${className}`}>
      {/* Robot Container */}
      <motion.div
        className="relative cursor-pointer"
        onClick={handleRobotClick}
        whileHover={{ scale: 1.05 }}
        animate={bodyControls}
      >
        {/* Robot Body */}
        <div className="relative w-48 h-64 mx-auto">
          {/* Head */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 rounded-2xl border-2 border-cyan-400/50 shadow-lg shadow-cyan-400/20"
            animate={{
              boxShadow: isActive 
                ? "0 0 30px rgba(34, 211, 238, 0.5), 0 0 60px rgba(34, 211, 238, 0.3)" 
                : "0 0 15px rgba(34, 211, 238, 0.2)"
            }}
          >
            {/* Eyes */}
            <motion.div 
              className="flex justify-center items-center h-full gap-3"
              animate={eyeControls}
            >
              <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                isActive ? 'bg-cyan-400 shadow-lg shadow-cyan-400/60' : 'bg-blue-400'
              }`}></div>
              <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                isActive ? 'bg-cyan-400 shadow-lg shadow-cyan-400/60' : 'bg-blue-400'
              }`}></div>
            </motion.div>

            {/* Antenna */}
            <motion.div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-t from-cyan-400 to-purple-400 rounded-full"
              animate={{
                height: isActive ? 28 : 24,
                boxShadow: isActive ? "0 0 20px rgba(34, 211, 238, 0.8)" : "none"
              }}
            >
              <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${
                isActive ? 'bg-purple-400 animate-pulse' : 'bg-cyan-400'
              }`}></div>
            </motion.div>
          </motion.div>

          {/* Body */}
          <motion.div
            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 rounded-3xl border-2 border-blue-400/50 shadow-lg shadow-blue-400/20"
            animate={{
              borderColor: isActive ? "rgba(34, 211, 238, 0.8)" : "rgba(59, 130, 246, 0.5)",
              boxShadow: isActive 
                ? "0 0 25px rgba(59, 130, 246, 0.4)" 
                : "0 0 10px rgba(59, 130, 246, 0.2)"
            }}
          >
            {/* Chest Panel */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-emerald-400/30">
              {/* Status Indicators */}
              <div className="flex justify-center items-center h-full">
                <div className="grid grid-cols-2 gap-2">
                  <motion.div
                    className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-slate-500'}`}
                    animate={{
                      opacity: isActive ? [1, 0.3, 1] : 0.5,
                    }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                  <motion.div
                    className={`w-2 h-2 rounded-full ${isActive ? 'bg-cyan-400' : 'bg-slate-500'}`}
                    animate={{
                      opacity: isActive ? [0.3, 1, 0.3] : 0.5,
                    }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
                  />
                  <motion.div
                    className={`w-2 h-2 rounded-full ${isActive ? 'bg-purple-400' : 'bg-slate-500'}`}
                    animate={{
                      opacity: isActive ? [1, 0.3, 1] : 0.5,
                    }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}
                  />
                  <motion.div
                    className={`w-2 h-2 rounded-full ${isActive ? 'bg-pink-400' : 'bg-slate-500'}`}
                    animate={{
                      opacity: isActive ? [0.3, 1, 0.3] : 0.5,
                    }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.9 }}
                  />
                </div>
              </div>
            </div>

            {/* Security Icons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <motion.div
                animate={{
                  rotate: isActive ? 360 : 0,
                  scale: isActive ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
              >
                <Shield className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
              </motion.div>
              <motion.div
                animate={{
                  scale: isActive ? [1, 1.3, 1] : 1,
                }}
                transition={{ duration: 1.5, repeat: isActive ? Infinity : 0, delay: 0.5 }}
              >
                <Lock className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
              </motion.div>
              <motion.div
                animate={{
                  rotate: isActive ? -360 : 0,
                }}
                transition={{ duration: 3, repeat: isActive ? Infinity : 0 }}
              >
                <Cpu className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-slate-400'}`} />
              </motion.div>
            </div>
          </motion.div>

          {/* Arms */}
          <motion.div
            className="absolute top-24 -left-8 w-6 h-16 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full border border-blue-400/30"
            animate={{
              rotate: isActive ? [0, -15, 0] : 0,
            }}
            transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
          />
          <motion.div
            className="absolute top-24 -right-8 w-6 h-16 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full border border-blue-400/30"
            animate={{
              rotate: isActive ? [0, 15, 0] : 0,
            }}
            transition={{ duration: 2, repeat: isActive ? Infinity : 0, delay: 1 }}
          />

          {/* Legs */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4">
            <div className="w-5 h-20 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full border border-blue-400/30"></div>
            <div className="w-5 h-20 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full border border-blue-400/30"></div>
          </div>
        </div>

        {/* Floating Security Elements */}
        {isActive && (
          <>
            <motion.div
              className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full flex items-center justify-center"
              animate={{
                x: [0, 20, 0],
                y: [0, -10, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Shield className="w-4 h-4 text-emerald-400" />
            </motion.div>
            <motion.div
              className="absolute top-10 right-0 w-6 h-6 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full flex items-center justify-center"
              animate={{
                x: [0, -15, 0],
                y: [0, 15, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            >
              <Eye className="w-3 h-3 text-cyan-400" />
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-2 w-7 h-7 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full flex items-center justify-center"
              animate={{
                x: [0, 25, 0],
                y: [0, -20, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <Zap className="w-4 h-4 text-purple-400" />
            </motion.div>
          </>
        )}
      </motion.div>

      {/* Message Bubble */}
      <motion.div
        className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-white/95 to-gray-100/95 backdrop-blur-xl border border-gray-300/50 rounded-xl shadow-lg shadow-gray-500/40"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-sm font-display font-bold text-slate-900 whitespace-nowrap"
          key={currentMessage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {messages[currentMessage]}
        </motion.p>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100/95"></div>
      </motion.div>

      {/* Click Instruction */}
      {!isActive && (
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-900 font-bold text-center bg-white/90 px-3 py-1 rounded-full border border-gray-300/50 shadow-md"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Click to activate
        </motion.div>
      )}
    </div>
  )
} 