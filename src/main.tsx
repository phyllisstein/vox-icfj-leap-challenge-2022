import { App} from './app'
import ReactDOM from 'react-dom/client'

export function renderApp () {
  const rootEl = document.createElement('div')
  document.body.appendChild(rootEl)

  const root = ReactDOM.createRoot(rootEl)
  root.render(<App />)
}
