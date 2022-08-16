import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import PostCard from '../components/PostCard'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import RecentPost from '../components/RecentPost'
import FeaturedPosts from '../components/FeaturedPosts'
import RelatedPosts from '../components/RelatedPosts'
import SocialMediaLinks from '../components/SocialMediaLinks'
import CategoryPosts from '../components/CategoryPosts'

import {
  AppShell,
  Navbar,
  Header,
  Avatar,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Aside,
} from '@mantine/core'
import PostContent from '../components/PostContent'

const AppShellMantine = () => {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  const { postId, catId } = useParams()

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
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Categories />
          <Newsletter />
        </Navbar>
      }
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
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>
            {/* Imagem da Logo */}
            <Avatar src='' alt='' />
            <Text>Marco Felipe</Text>
            <SocialMediaLinks />
          </div>
        </Header>
      }
      aside={
        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <Aside p='md' hiddenBreakpoint='sm' width={{ sm: 200, lg: 300 }}>
            {postId ? <RelatedPosts /> : <RecentPost />}
          </Aside>
        </MediaQuery>
      }
    >
      {postId ? (
        <PostContent />
      ) : catId ? (
        <CategoryPosts />
      ) : (
        <>
          <FeaturedPosts />
          <PostCard />
        </>
      )}
    </AppShell>
  )
}

export default AppShellMantine
