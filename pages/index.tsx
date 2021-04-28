import React, { ReactElement } from 'react'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import Button from '../components/Button'
import theme from '../theme'
import Icon from '../components/Icons'

const MainTagline = styled.h1`
  color: #2b2f35;
  font-size: 4rem;
  line-height: 4rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
`

const MainDescription = styled.p`
  font-size: 1.25rem;
  color: #535c68;
  line-height: 2rem;
  margin-top: 0;
  margin-bottom: 2rem;
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
  margin-right: -3rem;
`

const Feature = styled.div`
  width: 50%;
  display: flex;

  @media (max-width: 800px) {
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
  background-color: ${(props) => props.theme.palette.background.light};
  width: 100%;
  padding: 5rem;
`

function Home(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Wedge: Ionic Coding Challenge</title>
        </Head>
        <HeroContainer>
          <MainTagline>
            Your best work. <br />
            <span style={{ color: '#FD815A' }}>Done together.</span>
          </MainTagline>
          <MainDescription>
            Build better a business, faster. Start sharing your work <br />{' '}
            across your company—in realtime.
          </MainDescription>
          <Button variant="primary" style={{ marginRight: '16px' }}>
            Try it free
          </Button>
          <Button variant="secondary">Download</Button>
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

<div
          style={{
            backgroundColor: 'yellow',
            width: '50%',
            display: 'flex',
          }}
        >
          <div style={{ marginRight: '1.5rem' }}>
            <IconContainer>
              <Icon type="speech" />
            </IconContainer>
          </div>
          <div style={{ marginRight: '1.5rem' }}>
            <FeatureTagline>Communicate in realtime</FeatureTagline>
            <FeatureDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </FeatureDescription>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'yellow',
            width: '50%',
            display: 'flex',
          }}
        >
          <div style={{ marginRight: '1.5rem' }}>
            <IconContainer>
              <Icon type="speech" />
            </IconContainer>
          </div>
          <div style={{ marginRight: '1.5rem' }}>
            <FeatureTagline>Communicate in realtime</FeatureTagline>
            <FeatureDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </FeatureDescription>
          </div>
        </div>


*/
