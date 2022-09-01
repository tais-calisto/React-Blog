import React from 'react'
import { Group, Button } from '@mantine/core'
import SocialMediaLinks from '../components/SocialMediaLinks'
import { Link } from 'react-router-dom'

const HomeLinks = () => {
  return (
    <Group>
      <Button variant='light' uppercase component={Link} to='blog'>
        Blog
      </Button>
      <SocialMediaLinks />
    </Group>
  )
}

export default HomeLinks
