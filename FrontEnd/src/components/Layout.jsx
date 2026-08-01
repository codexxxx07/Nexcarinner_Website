import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-ink-950">
      {/* Static ambient background — no animation for performance */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-brand-500/5 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-flare-pink/4 blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-flare-cyan/4 blur-[120px]" />
      </div>

      <Navbar />
      <main className="relative z-10 flex-1 pt-16 lg:pt-20">{children}</main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
