import { useRef } from 'react'
import ReactDOM from 'react-dom'

import { Callout } from 'components/callout'

export function App () {
  const authorCallout = useRef<Element>(document.querySelector('[data-transparency-callout="author"]'))
  const authorCalloutPortal = authorCallout.current && ReactDOM.createPortal(<Callout>Author</Callout>, authorCallout.current)

  console.log('boom')

  return (
    <>
      { authorCalloutPortal }
    </>
  )
}
