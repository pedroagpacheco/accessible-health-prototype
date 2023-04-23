import {
  faPills,
  faRotate,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

enum FontSize {
  DEFAULT = 16,
  MAX = 24,
  MIN = 12,
  INCREASE = 'plus',
  DECREASE = 'minus',
  RESET = 'reset'
}

const Header = () => {
  const handleFontSizeChange = (type: FontSize) => {
    const root = getComputedStyle(document.documentElement)
    const oldpx = Number.parseInt(root.getPropertyValue('--font-size').replaceAll('px', ''))

    if (type === FontSize.INCREASE) {
      const canBeIncreased = oldpx + 1 < FontSize.MAX && oldpx + 1 > FontSize.MIN
      canBeIncreased && document.documentElement.style.setProperty('--font-size', `${oldpx + 1  }px`)
    } else if (type === FontSize.DECREASE) {
      const canBeDecreased = oldpx - 1 < FontSize.MAX && oldpx - 1 > FontSize.MIN
      canBeDecreased && document.documentElement.style.setProperty('--font-size', `${oldpx - 1  }px`)
    } else {
      document.documentElement.style.setProperty('--font-size', `${FontSize.DEFAULT  }px`)
    }
  }

  return (
    <div className="w-screen py-3 bg-blue-900 flex items-center justify-center">
      <div className="w-full max-w-5xl flex justify-between text-2xl">
        <h1 className="text-white font-bold">
          <FontAwesomeIcon icon={faPills} className="pr-2 text-red-400"/>
          ConecteSaúde
        </h1>
        <div>
          <button
            className="text-white hover:text-gray-200 pr-4"
            title="Aumentar fonte"
            aria-label="Aumentar fonte"
            onClick={() => handleFontSizeChange(FontSize.INCREASE)}>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus}/>
          </button>
          <button
            className="text-white hover:text-gray-200 pr-4"
            title="Redefinir fonte"
            aria-label="Redefinir fonte"
            onClick={() => handleFontSizeChange(FontSize.RESET)}>
            <FontAwesomeIcon icon={faRotate}/>
          </button>
          <button
            className="text-white hover:text-gray-200"
            title="Diminuir fonte"
            aria-label="Diminuir fonte"
            onClick={() => handleFontSizeChange(FontSize.DECREASE)}>
            <FontAwesomeIcon icon={faMagnifyingGlassMinus}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header