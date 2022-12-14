import React, { useState, useMemo } from 'react'
import { Title, NavLink } from '@mantine/core'
import { DateTime } from 'luxon'
import { useParams } from 'react-router-dom'
import { getRelatedPosts } from '../services/get-posts'
import { Link } from 'react-router-dom'

const RelatedPosts = () => {
  const { catId, postId } = useParams()

  const [relatedPosts, setRelatedPosts] = useState([])

  useMemo(async () => {
    try {
      const relatedPostsResult = await getRelatedPosts(postId, catId)
      const { posts: related } = relatedPostsResult
      setRelatedPosts(related)
    } catch (error) {
      console.log(error)
    }
  }, [postId, catId])

  return (
    <>
      <Title mb='md' order={3} align='center' style={{ color: '#9E7451' }}>
        Posts Relacionados
      </Title>
      {relatedPosts.map((post) => {
        return (
          <NavLink
            color='gray'
            variant='subtle'
            active
            key={post.link}
            label={post.title}
            description={DateTime.fromISO(post.createdAt).toLocaleString(
              'dd LLL yyyy'
            )}
            component={Link}
            to={`category/${catId}/post/${post.link}`}
          />
        )
      })}
    </>
  )
}

export default RelatedPosts
