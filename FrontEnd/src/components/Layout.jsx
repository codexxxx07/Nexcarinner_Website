import Navbar from './Navbar'
import Footer from './Footer'
import ClickSpark from './ClickSpark'
import { ThemeProvider, useTheme } from '../context/ThemeContext'

const LayoutInner = ({ children }) => {
  const { dark } = useTheme()

  return (
    <div
      className={`relative flex min-h-screen flex-col transition-colors duration-300 ${
        dark ? 'bg-[#0f0f0f]' : 'bg-ink-950'
      }`}
    >
      {/*
       * Ambient background — CSS radial-gradient orbs instead of DOM divs with blur.
       * blur-[120px] on fixed elements forces GPU repaints on every scroll frame.
       * A single background-image with multiple radial gradients costs ~0 at runtime.
       */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 grid-pattern" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: dark
              ? [
                  'radial-gradient(ellipse 55% 40% at 0% 0%, rgba(255,255,255,0.015) 0%, transparent 70%)',
                  'radial-gradient(ellipse 50% 35% at 100% 33%, rgba(255,255,255,0.01) 0%, transparent 70%)',
                  'radial-gradient(ellipse 45% 35% at 25% 100%, rgba(255,255,255,0.01) 0%, transparent 70%)',
                ].join(', ')
              : [
                  'radial-gradient(ellipse 55% 40% at 0% 0%, rgba(139,92,246,0.07) 0%, transparent 70%)',
                  'radial-gradient(ellipse 50% 35% at 100% 33%, rgba(232,121,249,0.05) 0%, transparent 70%)',
                  'radial-gradient(ellipse 45% 35% at 25% 100%, rgba(34,211,238,0.05) 0%, transparent 70%)',
                ].join(', '),
          }}
        />
      </div>

      <ClickSpark
        className="flex flex-1 flex-col"
        sparkColor={dark ? '#fff' : '#7c3aed'}
        sparkSize={14}
        sparkRadius={35}
        sparkCount={10}
        duration={500}
      >
        <Navbar />
        <main className="relative z-10 flex-1 pt-16 lg:pt-20">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
      </ClickSpark>
    </div>
  )
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <LayoutInner>{children}</LayoutInner>
    </ThemeProvider>
  )
}

export default Layout
