import React from 'react'
import BlogLinks from '../components/BlogLinks'
import HomeLinks from '../components/HomeLinks'
import { AppShell, Header, Avatar, useMantineTheme } from '@mantine/core'
import logo from '../images/logoGold.png'
import Hero from '../components/Hero'
import HomeFooter from '../components/HomeFooter'

const Home = () => {
  const theme = useMantineTheme()

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header height={70} p='md'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              justifyContent: 'space-around',
            }}
          >
            <Avatar src={logo} alt='' />

            <HomeLinks />
          </div>
        </Header>
      }
    >
      <Hero />
      <BlogLinks />
      <HomeFooter />
    </AppShell>
  )
}

export default Home
