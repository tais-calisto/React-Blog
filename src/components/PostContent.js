import React, { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { Card, Image, Text, Badge, Group, Title } from '@mantine/core'

import { getPostDetails } from '../services/get-posts'
import { DateTime } from 'luxon'
import CommentsForm from './CommentsForm'
import PostComments from './PostComments'

const PostContent = () => {
  const { postId } = useParams()

  const [post, setPost] = useState([])

  useMemo(async () => {
    const result = await getPostDetails(postId)
    const { posts: info } = result
    setPost(info)
  }, [postId])

  if (post[0]) {
    const info = post[0]
    return (
      <>
        <Card shadow='sm' p='lg' radius='md' withBorder key={info.link}>
          <Card.Section>
            <Image src={info.image.url} height={300} alt='Norway' />
          </Card.Section>
          <Group position='apart' mt='md' mb='xs'>
            <Title order={2}>{info.title}</Title>
            <Badge variant='light'>
              {DateTime.fromISO(info.createdAt).toLocaleString('dd LLL yyyy')}
            </Badge>
          </Group>

          {info.content.raw.children.map((child, index) => {
            const paragraph = child.children[0].text

            return (
              <Text size='md' pb='lg' key={index}>
                {paragraph}
              </Text>
            )
          })}
        </Card>
        <CommentsForm />
        <PostComments />
      </>
    )
  }
}

export default PostContent
