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
      onError={() => setError(true)}
      className={`h-8 w-auto rounded-xl object-contain md:h-10 lg:h-12 dark:brightness-125 ${className}`}
    />
  )
}

export default Logo
