import React from 'react'
import { Group, Avatar } from '@mantine/core'
import SocialMediaLinks from '../components/SocialMediaLinks'
import { Link } from 'react-router-dom'

const HomeLinks = () => {
  return (
    <Group>
      <Avatar color='gold' component={Link} to='blog'>
        Blog
      </Avatar>
      <SocialMediaLinks />
    </Group>
  )
}

export default HomeLinks
