import { createRoot } from 'react-dom/client'

import { App } from './app'

import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'

import './style.scss'

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react')
  const React = require('react')
  const ReactDOM = require('react-dom')
  axe(React, ReactDOM, 1000)
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<App />)
