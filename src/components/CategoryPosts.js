import React, { useState, useMemo } from 'react'
import { SimpleGrid, Card, Image, Text } from '@mantine/core'
import { getPostsByCategories } from '../services/get-posts'
import { useParams, Link } from 'react-router-dom'

const CategoryPosts = () => {
  const [posts, setPosts] = useState([])
  const { catId } = useParams()

  useMemo(async () => {
    try {
      const results = await getPostsByCategories(catId)
      setPosts(results)
    } catch (error) {
      console.log(error)
    }
  }, [catId])

  if (posts) {
    return (
      <SimpleGrid cols={1}>
        {posts.map((post) => {
          return (
            <Card
              shadow='sm'
              p='xl'
              component={Link}
              to={`category/${catId}/post/${post.link}`}
            >
              <Card.Section>
                <Image src={post.image.url} height={160} alt='No way!' />
              </Card.Section>

              <Text weight={500} size='lg' mt='md'>
                {post.title}
              </Text>

              <Text mt='xs' color='dimmed' size='sm'>
                {post.resume}
              </Text>
            </Card>
          )
        })}
      </SimpleGrid>
    )
  }
}

export default CategoryPosts
