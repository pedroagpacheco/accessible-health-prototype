import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Example = () => (
  <div className="p-4">
    <h1 className="text-4xl font-bold pb-4">Checklist</h1>
    <ul>
      <li><FontAwesomeIcon icon={faCheck} className="pr-2"/>All Done!</li>
    </ul>
  </div>
)

export default Example
