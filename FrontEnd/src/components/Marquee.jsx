const Marquee = ({ children, reverse = false, duration = 36, className = '' }) => {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Marquee
