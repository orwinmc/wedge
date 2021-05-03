import React, { ReactElement, useEffect, useState } from 'react'
import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Icon from '../components/Icons'

// Main Navigation Styles

const MainNavigationContainer = styled.nav`
  display: flex;
  position: absolute;
  width: 100%;
  font-size: 1rem;
  line-height: 1rem;
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
  align-items: center;
  flex: 1;
`
const NavigationRight = styled.div`
  display: flex;
  align-items: center;
  text-align: 'right';
`

const LeftLink = styled.a`
  color: ${(props) => props.theme.palette.text.light};
  text-decoration: none;
  margin: 1.25em;
  font-size: 1rem;
  cursor: pointer;
  transition: filter 400ms;

  &:hover,
  &:active {
    filter: brightness(0.85);
    text-decoration: underline;
  }
`

const NavigationRightLink = styled.a`
  color: ${(props) => props.theme.palette.common.white};
  text-decoration: none;
  margin: 1.25em;
  font-size: 1rem;
  cursor: pointer;
  transition: filter 400ms;

  &:hover,
  &:active {
    filter: brightness(0.85);
    text-decoration: underline;
  }
`

const LogoContainer = styled.div`
  color: ${(props) => props.theme.palette.primary.medium};
  width: 2.5rem;
  height: 2.5rem;
`

// Side Navigation Styles

const MenuButton = styled.button`
  color: ${(props) => props.theme.palette.text.light};
  background: rgba(0, 0, 0, 0);
  border: none;
  padding: 0;
  //margin: 0 1.25em;
  font-size: 1.8rem;
  cursor: pointer;
  transition: filter 400ms;

  &:hover,
  &:active {
    filter: brightness(0.85);
  }
`

const SideNavigationContainer = styled.nav`
  display: 'flex';
  position: fixed;
  color: ${(props) => props.theme.palette.text.dark};
  background-color: ${(props) => props.theme.palette.text.dark};
  width: 100%;
  height: 100vh;
  transform: ${(props) =>
    props.isOpen ? 'translateX(0%)' : 'translateX(100%)'};

  transition: transform 800ms ease-in-out;
`

const SideNavigationLink = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.palette.text.lightest};
  width: 50%;
  margin-top: 2rem;
  text-align: center;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: filter 400ms;

  @media (max-width: ${(props) => props.theme.breakpoints.sm + 'px'}) {
    width: 100%;
  }

  &:hover,
  &:active {
    filter: brightness(0.85);
    text-decoration: underline;
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
        <MainNavigationContainer>
          <NavigationLeft>
            <Link href="/">
              <LeftLink style={{ marginLeft: 0 }}>
                <LogoContainer>
                  <Icon type="logo" />
                </LogoContainer>
              </LeftLink>
            </Link>
            {!isCondensed ? (
              <>
                <Link href="/">
                  <LeftLink>Products</LeftLink>
                </Link>
                <Link href="/">
                  <LeftLink>Features</LeftLink>
                </Link>
                <Link href="/">
                  <LeftLink>Enterprise</LeftLink>
                </Link>
                <Link href="/">
                  <LeftLink>Company</LeftLink>
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
        </MainNavigationContainer>
      ) : (
        ''
      )}

      <SideNavigationContainer isOpen={isOpen}>
        <MainNavigationContainer>
          <NavigationLeft style={{ visibility: 'hidden' }}>
            <Link href="/">
              <LeftLink style={{ marginLeft: 0 }}>
                <LogoContainer>
                  <Icon type="logo" />
                </LogoContainer>
              </LeftLink>
            </Link>
          </NavigationLeft>
          <NavigationRight>
            <MenuButton onClick={() => setIsOpen(!isOpen)}>✕</MenuButton>
          </NavigationRight>
        </MainNavigationContainer>
        <br />
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
          <SideNavigationLink>Enterprise</SideNavigationLink>
        </Link>
        <Link href="/">
          <SideNavigationLink>Company</SideNavigationLink>
        </Link>
        <Link href="/">
          <SideNavigationLink>Sign In</SideNavigationLink>
        </Link>
        <Link href="/">
          <SideNavigationLink>Download</SideNavigationLink>
        </Link>
      </SideNavigationContainer>
    </ThemeProvider>
  )
}

export default Navigation
