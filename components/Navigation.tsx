import React, { ReactElement, useEffect, useState } from 'react'
import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Icon from '../components/Icons'

const NavigationContainer = styled.nav`
  width: 100%;
  position: absolute;
  display: flex;
  line-height: 1rem;
  font-size: 1rem;
  box-sizing: border-box;

  padding: 1rem 5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md + 'px'}) {
    padding: 1rem 3rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm + 'px'}) {
    padding: 1rem 2rem;
  }
`

const NavigationLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`
const NavigationRight = styled.div`
  display: flex;
  align-items: center;
  text-align: 'right';
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
  padding: 0;

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
  display: 'flex';
  background-color: #ffffff;
  height: 100vh;
  transform: ${(props) =>
    props.isOpen ? 'translateX(0%)' : 'translateX(-100%)'};

  transition: transform 800ms ease-in-out;
`

const SideNavigationLink = styled.a`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 1.5rem;
  width: 50%;
  margin-top: 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.sm + 'px'}) {
    width: 100%;
  }
`

function Navigation(): ReactElement {
  const [isCondensed, setIsFolded] = useState<boolean>()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    function handleResize() {
      setIsFolded(window.innerWidth <= theme.breakpoints.md)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  console.log(isOpen)

  return (
    <ThemeProvider theme={theme}>
      {isCondensed !== undefined ? (
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
                <Link href="/">
                  <NavigationLeftLink>Products</NavigationLeftLink>
                </Link>
                <Link href="/">
                  <NavigationLeftLink>Features</NavigationLeftLink>
                </Link>
                <Link href="/">
                  <NavigationLeftLink>Enterprise</NavigationLeftLink>
                </Link>
                <Link href="/">
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
                <Link href="/">
                  <NavigationRightLink>Sign In</NavigationRightLink>
                </Link>
                <Link href="/">
                  <NavigationRightLink style={{ marginRight: 0 }}>
                    Download
                  </NavigationRightLink>
                </Link>
              </>
            ) : (
              <MenuButton onClick={() => setIsOpen(!isOpen)}>☰</MenuButton>
            )}
          </NavigationRight>
        </NavigationContainer>
      ) : (
        ''
      )}

      <SideNavigationContainer isOpen={isOpen}>
        <NavigationContainer>
          <NavigationLeft>
            <Link href="/">
              <NavigationLeftLink style={{ marginLeft: 0 }}>
                <LogoContainer>
                  <Icon type="logo" />
                </LogoContainer>
              </NavigationLeftLink>
            </Link>
          </NavigationLeft>
          <NavigationRight>
            <MenuButton onClick={() => setIsOpen(!isOpen)}>✕</MenuButton>
          </NavigationRight>
        </NavigationContainer>
        <br />
        <br />
        <br />
        <Link href="/">
          <SideNavigationLink>Products</SideNavigationLink>
        </Link>
        <Link href="/">
          <SideNavigationLink>Features</SideNavigationLink>
        </Link>
        <Link href="/">
          <SideNavigationLink>Features</SideNavigationLink>
        </Link>
        <Link href="/">
          <SideNavigationLink>Features</SideNavigationLink>
        </Link>
        <Link href="/">
          <SideNavigationLink>Features</SideNavigationLink>
        </Link>
        <Link href="/">
          <SideNavigationLink>Features</SideNavigationLink>
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
