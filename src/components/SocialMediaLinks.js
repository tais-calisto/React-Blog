import React from 'react'
import { Avatar, Group, Button } from '@mantine/core'
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from '@tabler/icons'

const SocialMediaLinks = () => {
  return (
    <Group>
      <Button
        variant='light'
        color='gold'
        radius='sm'
        component='a'
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.facebook.com/marcofelipe.torrescastello'
      >
        <IconBrandFacebook size={24} />
      </Button>
      <Button
        variant='light'
        color='gold'
        radius='sm'
        component='a'
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/marcofelipecastello/'
      >
        <IconBrandInstagram size={24} />
      </Button>
      <Button
        variant='light'
        color='gold'
        radius='sm'
        component='a'
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.youtube.com/channel/UCbAWyhgREukmId5MTEqKHMQ'
      >
        <IconBrandYoutube size={24} />
      </Button>
    </Group>
  )
}

export default SocialMediaLinks
