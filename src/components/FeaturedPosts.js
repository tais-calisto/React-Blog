import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '@mantine/carousel'
import { BackgroundImage, Center, Text, Card } from '@mantine/core'
import { useGlobalContext } from '../utils/context'

const FeaturedPosts = () => {
  const { posts } = useGlobalContext()

  if (posts.length) {
    return (
      <Carousel
        loop
        dragFree
        m='xs'
        height={200}
        slideSize='33.333333%'
        slideGap='md'
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}
      >
        {posts
          .filter((post) => post.node.featuredPost)
          .map((post) => {
            const info = post.node
            return (
              <Carousel.Slide key={info.id}>
                <Card shadow='sm' p='lg' radius='md' withBorder>
                  <Card.Section
                    component={Link}
                    to={`category/${info.categories[0].link}/post/${info.link}`}
                  >
                    <BackgroundImage
                      src={info.image.url}
                      radius='sm'
                      style={{ height: '160px' }}
                    >
                      <Center p='md' style={{ height: 130 }}>
                        <Text
                          align='center'
                          color='#fff'
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.4',
                            padding: '20px',
                            borderRadius: '5px',
                          }}
                        >
                          {info.title}
                        </Text>
                      </Center>
                    </BackgroundImage>
                  </Card.Section>
                </Card>
              </Carousel.Slide>
            )
          })}
      </Carousel>
    )
  }
}

export default FeaturedPosts
