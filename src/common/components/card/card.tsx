import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  title: string,
  description: string,
  icon: IconProp,
  onClick?: () => void
}

const Card = ({
  title,
  description,
  icon,
  onClick
}: Props) => {
  return (
    <div
      className="w-96 h-72 py-4 rounded overflow-hidden shadow-lg cursor-pointer"
      onClick={onClick}
      onKeyDown={event => {
        if (event.key === 'Enter') {
          onClick && onClick()
        }
      }}
      role="link"
      tabIndex={0}>
      <FontAwesomeIcon className="w-full px-2" icon={icon} color='#1E3A8A' size='4x'/>
      <div className="px-6 pt-4">
        <div className="font-bold text-xl mb-2">
          {title}
        </div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card
