import graphcmsClient, { gql } from './graphcms-client'
import { RelatedCourseFragment } from './graphql-fragments'
import { TPopular } from './graph-interfaces'

export const getAllPopularQuery = gql`
  query AllPopularProducts {
    popularCourses {
      id
      products() {
        ...RelatedCourseFragment
      }
    }
  }
  ${RelatedCourseFragment}
`

async function getAllPopularCourses() {
  const { popularCourses } = await graphcmsClient.request<TPopular>(getAllPopularQuery, {})

  return {
    popularCourses,
  }
}

export default getAllPopularCourses
