import { createRoot } from 'react-dom/client'
import { Example } from 'common/components/example'

import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'

import './style.scss'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<Example />)
