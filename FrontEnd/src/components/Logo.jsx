import { useState } from 'react'
import LogoImg from '../assets/images/NCW_Logo.jpg'

const Logo = ({ className = '' }) => {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <span
        className={`flex items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-brand-700 font-display text-xs font-bold text-white md:text-sm ${className}`}
      >
        NC
      </span>
    )
  }

  return (
    <img
      src={LogoImg}
      alt="Nexcarinner Logo"
      /*
       * Explicit width/height prevent CLS — the browser reserves the
       * correct aspect ratio before the image loads.
       * fetchpriority="high" ensures this above-the-fold LCP candidate
       * is fetched as early as possible.
       * These match the rendered sizes set by the h-8/h-10/h-12 classes
       * (32px/40px/48px). The aspect ratio is ~1:1 for the logo.
       */
      width={48}
      height={48}
      fetchPriority="high"
      decoding="async"
      onError={() => setError(true)}
      className={`h-8 w-auto rounded-xl object-contain md:h-10 lg:h-12 dark:brightness-125 ${className}`}
    />
  )
}

export default Logo
