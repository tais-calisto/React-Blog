import React, { createContext, useEffect, useState, useContext } from 'react'

import { getPosts, getRecentPosts, getCategories } from '../services/get-posts'

const PostContext = createContext()

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [recentPosts, setRecentPosts] = useState([])
  const [categories, setCategories] = useState([])

  const fetchPosts = async () => {
    try {
      const postsResult = await getPosts()
      setPosts(postsResult)
      const recentPostsResult = await getRecentPosts()
      setRecentPosts(recentPostsResult)
      const categoriesResult = await getCategories()
      setCategories(categoriesResult)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostContext.Provider value={{ posts, recentPosts, categories }}>
      {children}
    </PostContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(PostContext)
}

export { PostContext, PostProvider }
