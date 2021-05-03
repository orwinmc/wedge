import React, { ReactElement } from 'react'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import Button from '../components/Button'
import theme from '../theme'
import Icon from '../components/Icons'
import { uid } from 'uid'
import Navigation from '../components/Navigation'

interface Feature {
  id: string
  icon: string
  tagline: string
  description: string
}

const features: Feature[] = [
  {
    id: uid(),
    icon: 'message',
    tagline: 'Communicate in realtime',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    id: uid(),
    icon: 'rocket',
    tagline: 'Do your best work',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    id: uid(),
    icon: 'clock',
    tagline: 'Avoid costly revisions',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    id: uid(),
    icon: 'cloud',
    tagline: 'Everything in one place',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
]

// Hero Styling

const HeroContainer = styled.div`
  display: flex;
`

const HeroContent = styled.div`
  background-color: ${(props) => props.theme.palette.background.light};
  flex: 5 4 50rem;
  padding: 5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md + 'px'}) {
    padding: 3rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm + 'px'}) {
    padding: 2rem;
  }
`

const HeroGraphic = styled.div`
  background: url(images/users.png);
  background-size: cover;
  flex: 4 5 40rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md + 'px'}) {
    display: none;
  }
`

const MainTagline = styled.h1`
  color: ${(props) => props.theme.palette.text.dark};
  margin-top: 6rem;
  margin-bottom: 1.5rem;
  font-size: 4rem;
  line-height: 4rem;
`

const MainDescription = styled.p`
  color: ${(props) => props.theme.palette.text.medium};
  max-width: 35rem;
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  line-height: 2rem;
`

// Feature List Styling

const SectionContainer = styled.div`
  padding: 10rem 5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md + 'px'}) {
    padding: 10rem 3rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm + 'px'}) {
    padding: 10rem 2rem;
  }
`

const SectionTitle = styled.h1`
  color: ${(props) => props.theme.palette.text.light};
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: normal;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 0.1em;
`

const SectionTagline = styled.h2`
  color: ${(props) => props.theme.palette.text.dark};
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 2.5rem;
  line-height: 1;
`

const SectionDescription = styled.p`
  color: ${(props) => props.theme.palette.text.medium};
  max-width: 45rem;
  margin: auto;
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.25rem;
  line-height: 2rem;
`

const FeatureTagline = styled.h3`
  color: ${(props) => props.theme.palette.text.dark};
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 2rem;
`

const FeatureDescription = styled.p`
  color: ${(props) => props.theme.palette.text.medium};
  margin-top: 0;
  margin-bottom: 2.5rem;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5rem;
`

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md + 'px'}) {
    margin-right: 0;
  }
`

const Feature = styled.div`
  width: 50%;
  display: flex;

  @media (max-width: ${(props) => props.theme.breakpoints.md + 'px'}) {
    width: 100%;
  }
`

const FeatureIcon = styled.div`
  margin-right: 1.5rem;
`

const IconContainer = styled.div`
  color: ${(props) => props.theme.palette.common.white};
  background-color: ${(props) => props.theme.palette.primary.medium};
  width: 3rem;
  height: 3rem;
  padding: 0.6rem;
  border-radius: 3rem;
  box-sizing: border-box;
`

const FeatureText = styled.div`
  margin-right: 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md + 'px'}) {
    margin-right: 0;
  }
`

function Home(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Wedge: Ionic Coding Challenge</title>
      </Head>
      <Navigation />
      <HeroContainer>
        <HeroContent>
          <MainTagline>
            Your best work. <br />
            <span style={{ color: theme.palette.primary.medium }}>
              Done together.
            </span>
          </MainTagline>
          <MainDescription>
            Build better a business, faster. Start sharing your work across your
            company—in realtime.
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
      <SectionContainer>
        <SectionTitle>Features</SectionTitle>
        <SectionTagline>A better way to work together</SectionTagline>
        <SectionDescription>
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </SectionDescription>
        <br />
        <FeatureList>
          {features.map((feature) => {
            return (
              <Feature key={uid()}>
                <FeatureIcon>
                  <IconContainer>
                    <Icon type={feature.icon} />
                  </IconContainer>
                </FeatureIcon>
                <FeatureText>
                  <FeatureTagline>{feature.tagline}</FeatureTagline>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureText>
              </Feature>
            )
          })}
        </FeatureList>
      </SectionContainer>
    </ThemeProvider>
  )
}

export default Home
