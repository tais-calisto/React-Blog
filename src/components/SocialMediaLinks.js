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
      <Avatar
        color='gold'
        radius='sm'
        component='a'
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.facebook.com/marcofelipe.torrescastello'
      >
        <IconBrandFacebook size={24} />
      </Avatar>
      <Avatar
        color='gold'
        radius='sm'
        component='a'
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/marcofelipecastello/'
      >
        <IconBrandInstagram size={24} />
      </Avatar>
      <Avatar
        color='gold'
        radius='sm'
        component='a'
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.youtube.com/channel/UCbAWyhgREukmId5MTEqKHMQ'
      >
        <IconBrandYoutube size={24} />
      </Avatar>
    </Group>
  )
}

export default SocialMediaLinks
