import { faPills,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className="w-screen h-8 bg-blue-900 flex items-center justify-center">
      <div className="w-full max-w-5xl flex justify-between">
        <h1 className="text-xl text-white font-bold">
          <FontAwesomeIcon icon={faPills} className="pr-2 text-red-400"/>
          ConecteSaúde
        </h1>
        <div>
          <button
            className="text-white hover:text-gray-200 pr-4"
            title="Aumentar fonte"
            aria-label="Aumentar fonte"
            onClick={() => {
              const root = getComputedStyle(document.documentElement)
              const oldpx = Number.parseInt(root.getPropertyValue('--font-size').replaceAll('px', ''))
              document.documentElement.style.setProperty('--font-size', `${oldpx + 1  }px`)
            }}>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus}/>
          </button>
          <button
            className="text-white hover:text-gray-200"
            title="Diminuir fonte"
            aria-label="Diminuir fonte"
            onClick={() => {
              const root = getComputedStyle(document.documentElement)
              const oldpx = Number.parseInt(root.getPropertyValue('--font-size').replaceAll('px', ''))
              document.documentElement.style.setProperty('--font-size', `${oldpx - 1  }px`)
            }}>
            <FontAwesomeIcon icon={faMagnifyingGlassMinus}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header