import React from 'react'
import logo from '../images/logoName.png'
import picture from '../images/picture.jpg'
import {
  Image,
  Card,
  Grid,
  Center,
  AspectRatio,
  Title,
  Text,
} from '@mantine/core'

const Hero = () => {
  return (
    <Card shadow='sm' p='lg' radius='md' withBorder>
      <Grid>
        <Grid.Col xs={8} sm={5}>
          <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 300 }} mx='auto'>
            <Image src={picture} radius='md' />
          </AspectRatio>
        </Grid.Col>
        <Grid.Col xs={8} sm={5}>
          <AspectRatio ratio={16 / 9} sx={{ maxWidth: 400 }} mx='auto'>
            <Image src={logo} />
          </AspectRatio>
          <Center>
            <div>
              <Title
                order={3}
                align='center'
                style={{ color: '#9E7451', fontStyle: 'italic' }}
              >
                Promotor de Justiça
              </Title>
              <Text align='justify' pt='md'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Facilisi morbi tempus iaculis urna id volutpat lacus laoreet.
                Mauris pharetra et ultrices neque.
              </Text>
            </div>
          </Center>
        </Grid.Col>
      </Grid>
    </Card>
  )
}

export default Hero
