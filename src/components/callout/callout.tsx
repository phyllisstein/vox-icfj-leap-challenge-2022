import { ReactNode } from 'react'

interface CalloutProps {
  children: ReactNode
}

export function Callout ({ children }: CalloutProps) {
  return (
    <div>
      { children }
    </div>
  )
}
