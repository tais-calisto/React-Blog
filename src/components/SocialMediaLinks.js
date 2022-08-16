import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Group } from '@mantine/core'
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from '@tabler/icons'

const SocialMediaLinks = () => {
  return (
    <Group>
      <Avatar color='blue' radius='sm'>
        <IconBrandFacebook size={24} />
      </Avatar>
      <Avatar color='blue' radius='sm'>
        <IconBrandInstagram size={24} />
      </Avatar>
      <Avatar color='blue' radius='sm'>
        <IconBrandYoutube size={24} />
      </Avatar>
    </Group>
  )
}

export default SocialMediaLinks
