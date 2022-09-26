import { ReactNode } from 'react'

import { Link, Name, Root } from './bio-styles'

interface BioProps {
  children: ReactNode
  name: string
  photoURL: string
  url: string
}

export function Bio ({ children, name, url }: BioProps) {
  return (
    <Root>
      <Name>{ name }</Name>
      { children }
      <Link href={ url }>More from { name } »</Link>
    </Root>
  )
}
