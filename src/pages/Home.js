import React, { useState } from 'react'
import BlogLinks from '../components/BlogLinks'
import HomeLinks from '../components/HomeLinks'
import { AppShell, Header, Avatar, Text, useMantineTheme } from '@mantine/core'

const Home = () => {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
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
            {/* Imagem da Logo */}

            <Avatar src='' alt='' />
            <Text>React Blog</Text>
            <HomeLinks />
          </div>
        </Header>
      }
    >
      <BlogLinks />
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  )
}

export default Home
