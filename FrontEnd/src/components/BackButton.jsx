import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Button } from './ui/button'

const BackButton = ({ to, className = '', disableCursor = false }) => {
  const navigate = useNavigate()
  return (
    <Button
      variant="outline"
      size="sm"
      cursorTarget={!disableCursor}
      className={`group ${className}`}
      onClick={() => (to ? navigate(to) : navigate(-1))}
    >
      <FiArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
      Back
    </Button>
  )
}

export default BackButton
