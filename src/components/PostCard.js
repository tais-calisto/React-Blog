import { useGlobalContext } from '../utils/context'
import { DateTime } from 'luxon'
import { Link } from 'react-router-dom'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'

function PostCard() {
  const { posts } = useGlobalContext()
  return (
    <>
      {posts.map((post) => {
        const info = post.node

        return (
          <Card shadow='sm' p='lg' radius='md' m='xs' withBorder key={info.id}>
            <Card.Section>
              <Image src={info.image.url} height={200} alt='Norway' />
            </Card.Section>

            <Group position='apart' mt='md' mb='xs'>
              <Badge size='sm'>{info.author.name}</Badge>
              <Badge variant='light'>
                {DateTime.fromISO(info.publishedAt).toLocaleString(
                  'dd LLL yyyy'
                )}
              </Badge>
            </Group>

            <Text weight={500}>{info.title}</Text>

            <Text size='sm' color='dimmed'>
              {info.resume}
            </Text>

            <Button
              variant='light'
              color='gold'
              fullWidth
              mt='md'
              radius='md'
              component={Link}
              to={`category/${info.categories[0].link}/post/${info.link}`}
            >
              Continue lendo
            </Button>
          </Card>
        )
      })}
    </>
  )
}

export default PostCard
