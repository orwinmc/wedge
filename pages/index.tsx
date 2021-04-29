import React, { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled, { ThemeProvider } from 'styled-components'
import Button from '../components/Button'
import theme from '../theme'
import Icon from '../components/Icons'

const MainTagline = styled.h1`
  color: #2b2f35;
  font-size: 4rem;
  line-height: 4rem;
  margin-top: 6rem;
  margin-bottom: 1.5rem;
`

const MainDescription = styled.p`
  font-size: 1.25rem;
  color: #535c68;
  line-height: 2rem;
  margin-top: 0;
  margin-bottom: 2rem;
  max-width: 35rem;
`

const SectionTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme.palette.text.light};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  margin-bottom: 1rem;
  font-weight: normal;
`

const SectionTagline = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.palette.text.dark};
  text-align: center;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 1rem;
`

const SectionDescription = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.palette.text.medium};
  text-align: center;
  line-height: 2rem;
  margin: auto;
  margin-top: 0;
  margin-bottom: 1rem;
  max-width: 45rem;
`

const FeatureTagline = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 2rem;
  color: ${(props) => props.theme.palette.text.dark};
  margin-top: 0;
  margin-bottom: 0.5rem;
`

const FeatureDescription = styled.p`
  color: ${(props) => props.theme.palette.text.medium};
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0;
  margin-bottom: 2.5rem;
`

const IconContainer = styled.div`
  background-color: #fd815a;
  color: ${(props) => props.theme.palette.common.white};
  padding: 0.6875rem;
  width: 3rem;
  border-radius: 3rem;
  height: 3rem;
  box-sizing: border-box;
`

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  //margin-right: -3rem;
`

const Feature = styled.div`
  width: 50%;
  display: flex;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`

const FeatureIcon = styled.div`
  margin-right: 1.5rem;
`

const FeatureText = styled.div`
  margin-right: 3rem;
`

const HeroContainer = styled.div`
  display: flex;
`

const HeroContent = styled.div`
  background-color: ${(props) => props.theme.palette.background.light};
  flex: 5 2 50rem;
  padding: 5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 3rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 2rem;
  }
`

const HeroGraphic = styled.div`
  flex: 4 3 40rem;
  background: url(images/users.png);
  background-size: cover;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`

function Home(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Wedge: Ionic Coding Challenge</title>
        </Head>

        <HeroContainer>
          <HeroContent>
            <MainTagline>
              Your best work. <br />
              <span style={{ color: '#FD815A' }}>Done together.</span>
            </MainTagline>
            <MainDescription>
              Build better a business, faster. Start sharing your work across
              your company—in realtime.
            </MainDescription>
            <Button
              variant="primary"
              style={{ marginRight: '1rem', marginBottom: '1rem' }}
            >
              Try it free
            </Button>
            <Button variant="secondary" style={{ marginBottom: '1rem' }}>
              Download
            </Button>
          </HeroContent>
          <HeroGraphic />
        </HeroContainer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <SectionTitle>Features</SectionTitle>
        <SectionTagline>A better way to work together</SectionTagline>
        <SectionDescription>
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </SectionDescription>
        <br />
        <FeatureList>
          <Feature>
            <FeatureIcon>
              <IconContainer>
                <Icon type="speech" />
              </IconContainer>
            </FeatureIcon>
            <FeatureText>
              <FeatureTagline>Communicate in realtime</FeatureTagline>
              <FeatureDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </FeatureDescription>
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>
              <IconContainer>
                <Icon type="speech" />
              </IconContainer>
            </FeatureIcon>
            <FeatureText>
              <FeatureTagline>Communicate in realtime</FeatureTagline>
              <FeatureDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </FeatureDescription>
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>
              <IconContainer>
                <Icon type="speech" />
              </IconContainer>
            </FeatureIcon>
            <FeatureText>
              <FeatureTagline>Communicate in realtime</FeatureTagline>
              <FeatureDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </FeatureDescription>
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon>
              <IconContainer>
                <Icon type="speech" />
              </IconContainer>
            </FeatureIcon>
            <FeatureText>
              <FeatureTagline>Communicate in realtime</FeatureTagline>
              <FeatureDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </FeatureDescription>
            </FeatureText>
          </Feature>
        </FeatureList>
      </div>
    </ThemeProvider>
  )
}

export default Home

/*

<nav
            style={{
              width: '100%',
              position: 'absolute',
              display: 'flex',
              left: 0,
              padding: '2.5rem',
              lineHeight: '1rem',
              fontSize: '1rem',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ flex: 1 }}>
              <Link href="/product">
                <a
                  style={{
                    color: '#7B8798',
                    fontSize: '1rem',
                    margin: '1.25em',
                    marginLeft: '8rem',
                    textDecoration: 'none',
                  }}
                >
                  Product
                </a>
              </Link>
              <Link href="/features">
                <a
                  style={{
                    color: '#7B8798',
                    fontSize: '1rem',
                    margin: '1.25em',
                    textDecoration: 'none',
                  }}
                >
                  Features
                </a>
              </Link>
              <Link href="/enterprise">
                <a
                  style={{
                    color: '#7B8798',
                    fontSize: '1rem',
                    margin: '1.25em',
                    textDecoration: 'none',
                  }}
                >
                  Enterprise
                </a>
              </Link>
              <Link href="/company">
                <a
                  style={{
                    color: '#7B8798',
                    fontSize: '1rem',
                    margin: '1.25em',
                    textDecoration: 'none',
                  }}
                >
                  Company
                </a>
              </Link>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Link href="/signin">
                <a>Sign In</a>
              </Link>
              <Link href="/download">
                <a>Download</a>
              </Link>
            </div>
          </nav>
*/
