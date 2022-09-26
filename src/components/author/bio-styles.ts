import styled from '@emotion/styled'

export const Root = styled.div`
`

export const Name = styled.span`
  font-weight: 700;
`

export const Link = styled.a`
  font-weight: 700;
  text-decoration: underline;
  color: ${ props => props.theme.paletteVox.css.interactiveGray };
`
