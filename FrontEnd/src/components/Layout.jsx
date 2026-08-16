import Navbar from './Navbar'
import Footer from './Footer'
import ClickSpark from './ClickSpark'
import ShapeGrid from './reactbits/ShapeGrid'
import { useTheme } from '../context/ThemeContext'

const LayoutInner = ({ children }) => {
  const { dark } = useTheme()

  return (
    <div
      className={`relative flex min-h-screen flex-col transition-colors duration-300 ${
        dark ? 'bg-[#0f0f0f]' : 'bg-ink-950'
      }`}
    >
      {/*
       * Ambient background — animated ShapeGrid + CSS radial-gradient orbs.
       * The ShapeGrid canvas sits behind every page (pointer-events: none)
       * and tracks the cursor on window so hover cells light up site-wide.
       * Orbs are painted as a single background-image with multiple radial
       * gradients — no DOM blur divs, so scroll cost stays ~0.
       */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      >
        <ShapeGrid
          className="absolute inset-0 shapegrid-fade"
          speed={0.5}
          squareSize={44}
          direction="diagonal"
          borderColor={dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(34, 29, 58, 0.06)'}
          hoverFillColor={dark ? 'rgba(167, 139, 250, 0.12)' : 'rgba(124, 58, 237, 0.06)'}
          hoverTrailAmount={6}
        />
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
  return <LayoutInner>{children}</LayoutInner>
}

export default Layout
