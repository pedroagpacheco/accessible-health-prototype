import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { labels } from 'common/utils/labels'

interface Props {
  title: string,
  subtitle: string,
  description: string,
  onDelete?: () => void
}

const ListItem = ({
  title,
  subtitle,
  description,
  onDelete
}: Props) => {
  return (
    <li key={title} className="flex justify-between gap-x-6 py-5 w-96">
      <div className="flex gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{title}</p>
          {description && (
            <p className="mt-2 text-xs leading-5 text-gray-700">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-sm leading-6 text-gray-900">{subtitle}</p>
        {onDelete && (
          <button
            onClick={onDelete}
            title={labels.delete_item}
            aria-label={labels.delete_item}
            tabIndex={0}
            className="bg-blue-900 hover:bg-blue-950 text-white w-6 rounded mt-2">
            <FontAwesomeIcon icon={faTrash}/>
          </button>
        )}
      </div>
    </li>
  )
}

export default ListItem
