import React, { CSSProperties, ReactElement } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../theme'

const StyledButton = styled.button`
  background: ${(props) => props.theme.palette.text.light};
  color: ${(props) => props.theme.palette.common.white};
  border: none;
  border-radius: 0.5rem;

  margin: 0;
  padding: 1.25rem;

  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 0.8;

  transition: filter 400ms;

  &:hover,
  &:active {
    filter: brightness(0.85);
    cursor: pointer;
  }
`

const PrimaryButton = styled(StyledButton)`
  background: ${(props) => props.theme.palette.primary.medium};
  color: ${(props) => props.theme.palette.common.white};
`

const SecondaryButton = styled(StyledButton)`
  background: ${(props) => props.theme.palette.secondary.light};
  color: ${(props) => props.theme.palette.secondary.medium};
`

interface ButtonProps {
  variant?: string
  children: string
  style?: CSSProperties
}

function Button({ variant, children, style }: ButtonProps): ReactElement {
  switch (variant) {
    case 'primary':
      return (
        <ThemeProvider theme={theme}>
          <PrimaryButton style={style}>{children}</PrimaryButton>
        </ThemeProvider>
      )

    case 'secondary':
      return (
        <ThemeProvider theme={theme}>
          <SecondaryButton style={style}>{children}</SecondaryButton>
        </ThemeProvider>
      )
    default:
      return (
        <ThemeProvider theme={theme}>
          <StyledButton style={style}>{children}</StyledButton>
        </ThemeProvider>
      )
  }
}

export default Button
