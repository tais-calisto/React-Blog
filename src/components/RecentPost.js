import React from 'react'
import { NavLink, Title } from '@mantine/core'
import { useGlobalContext } from '../utils/context'
import { DateTime } from 'luxon'
import { Link } from 'react-router-dom'

const RecentPost = () => {
  const { recentPosts } = useGlobalContext()

  return (
    <>
      <Title mb='md' order={3} align='center' style={{ color: '#9E7451' }}>
        Posts Recentes
      </Title>
      {recentPosts.map((post) => {
        return (
          <NavLink
            color='gray'
            variant='subtle'
            active
            key={post.id}
            label={post.title}
            description={DateTime.fromISO(post.createdAt).toLocaleString(
              'dd LLL yyyy'
            )}
            component={Link}
            to={`category/${post.categories[0].link}/post/${post.link}`}
          />
        )
      })}
    </>
  )
}

export default RecentPost
