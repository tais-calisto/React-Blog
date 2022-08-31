import { GraphQLClient, gql, request } from 'graphql-request'

const graphqlAPI = process.env.REACT_APP_PUBLIC_GRAPHCMS_ENDPOINT
const graphqlToken = process.env.REACT_APP_GRAPHCMS_TOKEN

const comments = async (obj) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphqlToken}`,
    },
  })

  const mutation = gql`
    mutation MyMutation(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { link: $slug } }
        }
      ) {
        id
        name
        email
        comment
        post {
          link
        }
      }
    }
  `

  const { name, email, comment, slug } = obj

  const variables = {
    name: name,
    email: email,
    comment: comment,
    slug: slug,
  }

  try {
    const data = await graphQLClient.request(mutation, variables)
    console.log(data)
    return true
  } catch (error) {
    console.log(error)
  }
}

export default comments

export const getPostComments = async (link) => {
  const query = gql`
    query GetPostsComments($link: String!) {
      posts(where: { link: $link }) {
        comments {
          comment
          createdAt
          email
          id
          name
        }
      }
    }
  `
  const variables = {
    link: link,
  }

  const result = await request(graphqlAPI, query, variables)
  return result.posts[0].comments
}
