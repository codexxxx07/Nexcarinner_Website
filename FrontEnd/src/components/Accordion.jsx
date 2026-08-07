import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  const { dark } = useTheme()

  return (
    <div
      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
        isOpen
          ? dark
            ? 'border-white/14 bg-white/6 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
            : 'border-brand-500/20 bg-brand-500/5 shadow-[0_4px_20px_rgba(124,58,237,0.08)]'
          : dark
          ? 'border-white/8 bg-[#1a1a1a]'
          : 'border-ink-300/40 bg-white'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 ${
          dark ? 'hover:bg-white/4' : 'hover:bg-brand-500/5'
        }`}
      >
        <span
          className={`font-display text-base font-semibold transition-colors duration-300 ${
            dark
              ? isOpen ? 'text-white' : 'text-gray-300'
              : isOpen ? 'text-brand-700' : 'text-ink-50'
          }`}
        >
          {question}
        </span>
        <FiChevronDown
          className={`ml-4 h-5 w-5 shrink-0 transition-all duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          } ${dark ? 'text-gray-500' : 'text-ink-400'}`}
        />
      </button>

      {/* Smooth height animation via max-height */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p
          className={`px-6 pb-6 text-sm leading-relaxed transition-colors duration-300 ${
            dark ? 'text-gray-400' : 'text-ink-400'
          }`}
        >
          {answer}
        </p>
      </div>
    </div>
  )
}

/**
 * Reusable accordion. Pass items as an array of { question, answer }.
 * Set allowMultiple to let more than one item stay open at once.
 */
const Accordion = ({ items = [], allowMultiple = false, className = '' }) => {
  const [openIndexes, setOpenIndexes] = useState([])

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : allowMultiple
          ? [...prev, index]
          : [index],
    )
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndexes.includes(index)}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
