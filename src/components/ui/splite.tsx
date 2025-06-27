import { Suspense, useState, useEffect } from 'react'
import { Component, ReactNode } from 'react'
import { SplineFallback } from './spline-fallback'

interface SplineSceneProps {
  scene: string
  className?: string
}

// Dynamic import wrapper with error handling
const SplineWrapper = ({ scene, className }: SplineSceneProps) => {
  const [SplineComponent, setSplineComponent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadSpline = async () => {
      try {
        const module = await import('@splinetool/react-spline')
        if (isMounted) {
          setSplineComponent(() => module.default)
          setLoading(false)
        }
      } catch (err) {
        console.error('Failed to load Spline:', err)
        if (isMounted) {
          setError('Failed to load 3D scene')
          setLoading(false)
        }
      }
    }

    loadSpline()

    return () => {
      isMounted = false
    }
  }, [])

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-purple-900/50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-300">Loading 3D Scene...</p>
        </div>
      </div>
    )
  }

  if (error || !SplineComponent) {
    // Use fallback component instead of error message
    return <SplineFallback className={className} />
  }

  return <SplineComponent scene={scene} className={className} />
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={`w-full h-full ${className || ''}`}>
      <ErrorBoundary>
        <SplineWrapper scene={scene} className="w-full h-full" />
      </ErrorBoundary>
    </div>
  )
}

// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Spline Error Boundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Use fallback component instead of error message
      return <SplineFallback />
    }

    return this.props.children
  }
} 