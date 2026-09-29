import { Component } from 'react'

/*
 * The fallback was hardcoded `text-white`, which is invisible in light mode
 * (the page is #f2f0f7) and left a blank panel with only the reload button
 * visible. Both themes are now explicit.
 *
 * `resetKey` is expected to change with the route so navigating away from a
 * crashed page clears the error state; otherwise the boundary latched the
 * whole app on one throw.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  componentDidUpdate(prevProps) {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false })
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
          <h2 className="mb-3 text-2xl font-bold text-ink-50 dark:text-white">
            Something went wrong
          </h2>
          <p className="mb-6 max-w-md text-sm text-ink-400 dark:text-white/60">
            An unexpected error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
          >
            Refresh page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
