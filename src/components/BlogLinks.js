import { Link } from 'react-router-dom'
import { Carousel } from '@mantine/carousel'
import { Title } from '@mantine/core'
import { BackgroundImage, Center, Text, Card } from '@mantine/core'
import { useGlobalContext } from '../utils/context'

const BlogLinks = () => {
  const { recentPosts } = useGlobalContext()

  if (recentPosts.length > 1) {
    return (
      <>
        <Title align='center' p='md' style={{ color: '#9E7451' }}>
          Últimas publicações
        </Title>
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
          {recentPosts.map((post) => {
            return (
              <Carousel.Slide key={post.id}>
                <Card shadow='sm' p='lg' radius='md' withBorder>
                  <Card.Section
                    component={Link}
                    to={`blog/category/${post.categories[0].link}/post/${post.link}`}
                  >
                    <BackgroundImage
                      src={post.image.url}
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
                          {post.title}
                        </Text>
                      </Center>
                    </BackgroundImage>
                  </Card.Section>
                </Card>
              </Carousel.Slide>
            )
          })}
        </Carousel>
      </>
    )
  }
}

export default BlogLinks
