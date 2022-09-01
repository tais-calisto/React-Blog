import React from 'react'
import logo from '../images/logoAndName.png'
import { Image, AspectRatio } from '@mantine/core'

const HomeFooter = () => {
  return (
    <footer>
      <AspectRatio ratio={16 / 9} sx={{ maxWidth: 400 }} mx='auto'>
        <Image src={logo} />
      </AspectRatio>
    </footer>
  )
}

export default HomeFooter
