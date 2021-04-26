import React, { ReactElement } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const Title = styled.span`
  color: red;
`

function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Wedge | Home</title>
      </Head>
      <Title>Wedged</Title>
    </div>
  )
}

export default Home
