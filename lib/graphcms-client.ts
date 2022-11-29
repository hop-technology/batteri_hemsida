import { gql, GraphQLClient } from 'graphql-request'

export default new GraphQLClient(
  'https://api-eu-central-1.hygraph.com/v2/cl34gio9y5pxd01xshdjb3v8d/master',
  {
    headers: {
      ...(process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN && {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
      }),
    },
  }
)

export { gql }
