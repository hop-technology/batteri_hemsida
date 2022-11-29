import graphcmsClient, { gql } from './graphcms-client'
import { CategoryFragment } from './graphql-fragments'
import { TCategories } from './graph-interfaces'

export const getAllCategoriesQuery = gql`
  query getAllCategories() {
    categories() {
      ...CategoryFragment
    }
  }
  ${CategoryFragment}
`

async function getAllCategories() {
  const { categories } = await graphcmsClient.request<TCategories>(getAllCategoriesQuery, {})
  return { categories }
}

export default getAllCategories
