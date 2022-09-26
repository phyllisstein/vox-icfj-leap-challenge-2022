import chroma from 'chroma-js'
import * as R from 'ramda'

export const js = {
  brandYellow: chroma.rgb(255, 242, 0),
  interactiveGray: chroma.rgb(79, 113, 119),
  text: chroma.rgb(76, 78, 77),
  textBold: chroma.rgb(17, 17, 17),
}

export type JS = typeof js
export type ColorNames = keyof JS
export type CSS = { [k in ColorNames]: string }

export const css: CSS = R.map(R.invoker(0, 'css'), js)
