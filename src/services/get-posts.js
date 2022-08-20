import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.REACT_APP_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            id
            link
            publishedAt
            resume
            title
            featuredPost
            author {
              id
              name
            }
            categories {
              id
              link
              name
            }
            image {
              url
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.postsConnection.edges
}

export const getRecentPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_ASC, last: 5) {
        title
        image {
          url
        }
        createdAt
        link
        id
        categories {
          link
        }
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.posts
}

export const getRelatedPosts = async (link, catLink) => {
  const query = gql`
    query GetRelatedPosts($link: String!, $catLink: String!) {
      posts(
        where: {
          categories_some: { link_contains: $catLink }
          AND: { link_not: $link }
        }
        last: 5
      ) {
        title
        link
        createdAt
      }
    }
  `
  const variables = {
    link: link,
    catLink: catLink,
  }

  const result = await request(graphqlAPI, query, variables)

  return result
}

export const getPostDetails = async (link) => {
  const query = gql`
    query GetPostsDetails($link: String!) {
      posts(where: { link_contains: $link }) {
        title
        image {
          url
        }
        createdAt
        link
        content {
          raw
        }
      }
    }
  `

  const variables = {
    link: link,
  }

  const result = await request(graphqlAPI, query, variables)

  return result
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        link
        name
        id
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.categories
}

export const getPostsByCategories = async (catLink) => {
  const query = gql`
    query GetCategoriesPosts($catLink: String!) {
      posts(where: { categories_some: { link_contains: $catLink } }) {
        author {
          name
        }
        image {
          url
        }
        resume
        title
        id
        link
      }
    }
  `
  const variables = {
    catLink: catLink,
  }

  const result = await request(graphqlAPI, query, variables)
  return result.posts
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetFeaturedPosts {
      posts(last: 6, where: { featuredPost: true }) {
        title
        image {
          url
        }
        link
        id
        categories {
          link
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.posts
}
