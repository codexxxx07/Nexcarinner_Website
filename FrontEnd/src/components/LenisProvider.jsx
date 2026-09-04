import { ReactLenis } from 'lenis/react'

const LenisProvider = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        lerp: 0.1,
        smoothWheel: true,
        touchMultiplier: 2,
        autoResize: true,
        anchors: true,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default LenisProvider
