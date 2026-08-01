import Reveal from './Reveal'

const SectionHeading = ({ eyebrow, title, description, align = 'center', className = '' }) => {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <Reveal className={`flex flex-col ${alignment} mb-14 ${className}`}>
      {eyebrow && <span className="chip mb-5">{eyebrow}</span>}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-50 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-ink-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  )
}

export default SectionHeading
