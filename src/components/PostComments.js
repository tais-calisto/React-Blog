import React, { useMemo, useState } from 'react'
import { getPostComments } from '../services/comments'
import { DateTime } from 'luxon'
import { useParams } from 'react-router-dom'
import { Card, Title, Text, Paper } from '@mantine/core'

const PostComments = () => {
  const { postId } = useParams()
  const [comments, setComments] = useState([])

  useMemo(async () => {
    const result = await getPostComments(postId)
    setComments(result)
  }, [postId])

  return (
    <Card m='xl' shadow='sm' p='lg' radius='md' withBorder mt='lg'>
      <Title style={{ color: '#9E7451' }} order={3}>
        Comentários
      </Title>
      {comments.map((comment) => {
        return (
          <Paper shadow='xs' mt='sm' p='sm' key={comment.id}>
            <Text
              weight={700}
              size='sm'
              style={{ textTransform: 'capitalize' }}
            >
              {comment.name}
            </Text>
            <Text
              size='xs'
              italic
              color='dimmed'
              style={{ textTransform: 'capitalize' }}
            >
              {DateTime.fromISO(comment.createdAt).toLocaleString(
                'dd LLL yyyy'
              )}
            </Text>
            <Text size='md' pt='sm'>
              {comment.comment}
            </Text>
          </Paper>
        )
      })}
    </Card>
  )
}

export default PostComments
