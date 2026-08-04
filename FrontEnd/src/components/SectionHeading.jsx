import Reveal from './Reveal'
import { useTheme } from '../context/ThemeContext'

const SectionHeading = ({ eyebrow, title, description, align = 'center', className = '' }) => {
  const { dark } = useTheme()
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <Reveal className={`flex flex-col ${alignment} mb-14 ${className}`}>
      {eyebrow && <span className="chip mb-5">{eyebrow}</span>}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-300 ${
          dark ? 'text-white' : 'text-ink-50'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base sm:text-lg max-w-2xl leading-relaxed transition-colors duration-300 ${
            dark ? 'text-gray-400' : 'text-ink-400'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

export default SectionHeading
