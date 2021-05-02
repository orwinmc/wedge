import React, { ReactElement, useEffect, useState } from 'react'
import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Icon from '../components/Icons'

const NavigationContainer = styled.nav`
  width: 100%;
  position: absolute;
  display: flex;
  padding: 1rem;
  line-height: 1rem;
  font-size: 1rem;
  box-sizing: border-box;

  padding-left: 5rem;
  padding-right: 5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  /*@media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 62%;
    flex-direction: column;
    background-color: red;
    height: 100vh;
    transform: translateX(-50%);
  }*/
`

const NavigationLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  /*@media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    background-color: yellow;
  }*/
`
const NavigationRight = styled.div`
  display: flex;
  align-items: center;
  text-align: 'right';

  /*@media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    background-color: yellow;
  }*/
`

const NavigationLeftLink = styled.a`
  color: #7b8798;
  font-size: 1rem;
  margin: 1.25em;
  text-decoration: none;

  transition: filter 400ms;
  cursor: pointer;

  &:hover,
  &:active {
    filter: brightness(0.85);
    text-decoration: underline;
  }
`

const NavigationRightLink = styled.a`
  color: #ffffff;
  font-size: 1rem;
  margin: 1.25em;
  text-decoration: none;

  transition: filter 400ms;
  cursor: pointer;

  &:hover,
  &:active {
    filter: brightness(0.85);
    text-decoration: underline;
  }
`

const LogoContainer = styled.div`
  color: #fd815a;
  width: 2.5rem;
  height: 2.5rem;
`

const MenuButton = styled.button`
  background: rgba(0, 0, 0, 0);
  border: none;
  font-size: 1.8rem;

  transition: filter 400ms;
  cursor: pointer;

  &:hover,
  &:active {
    filter: opacity(0.85);
  }
`

const SideNavigationContainer = styled.nav`
  width: 100%;
  position: fixed;
  flex-direction: column;
  background-color: #ffffff;
  height: 100vh;
  transform: translateX(-100%);
`

function Navigation(): ReactElement {
  const [isCondensed, setIsFolded] = useState<boolean>()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    function handleResize() {
      setIsFolded(window.innerWidth <= 800)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  console.log(isCondensed)

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <NavigationLeft>
          <Link href="/">
            <NavigationLeftLink style={{ marginLeft: 0 }}>
              <LogoContainer>
                <Icon type="logo" />
              </LogoContainer>
            </NavigationLeftLink>
          </Link>
          {!isCondensed ? (
            <>
              <Link href="/products">
                <NavigationLeftLink>Products</NavigationLeftLink>
              </Link>
              <Link href="/features">
                <NavigationLeftLink>Features</NavigationLeftLink>
              </Link>
              <Link href="/enterprise">
                <NavigationLeftLink>Enterprise</NavigationLeftLink>
              </Link>
              <Link href="/company">
                <NavigationLeftLink>Company</NavigationLeftLink>
              </Link>
            </>
          ) : (
            ''
          )}
        </NavigationLeft>
        <NavigationRight>
          {!isCondensed ? (
            <>
              <Link href="/signin">
                <NavigationRightLink>Sign In</NavigationRightLink>
              </Link>
              <Link href="/download">
                <NavigationRightLink style={{ marginRight: 0 }}>
                  Download
                </NavigationRightLink>
              </Link>
            </>
          ) : (
            <MenuButton>☰</MenuButton>
          )}
        </NavigationRight>
      </NavigationContainer>

      <SideNavigationContainer>
        <Link href="/products">
          <NavigationLeftLink>Products</NavigationLeftLink>
        </Link>
        <Link href="/features">
          <NavigationLeftLink>Features</NavigationLeftLink>
        </Link>
      </SideNavigationContainer>
    </ThemeProvider>
  )
}

export default Navigation

/*
<NavigationLeft>
          <Link href="/">
            <NavigationLeftLink>
              <LogoContainer>
                <Icon type="logo" />
              </LogoContainer>
            </NavigationLeftLink>
          </Link>
          <Link href="/products">
            <NavigationLeftLink>Products</NavigationLeftLink>
          </Link>
          <Link href="/features">
            <NavigationLeftLink>Features</NavigationLeftLink>
          </Link>
          <Link href="/enterprise">
            <NavigationLeftLink>Enterprise</NavigationLeftLink>
          </Link>
          <Link href="/company">
            <NavigationLeftLink>Company</NavigationLeftLink>
          </Link>
          <Link href="/company">
            <NavigationLeftLink>Sign In</NavigationLeftLink>
          </Link>
          <Link href="/company">
            <NavigationLeftLink>Download</NavigationLeftLink>
          </Link>
          <Link href="/company">
            <NavigationLeftLink>
              <span style={{ fontSize: '1.5rem' }}>☰</span>
            </NavigationLeftLink>
          </Link>
        </NavigationLeft>
*/

// MenuButton not aligned
