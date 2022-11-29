import graphcmsClient, { gql } from './graphcms-client'
import { CategoryFragment } from './graphql-fragments'
import { TPageData } from './graph-interfaces'

export const getPageDataQuery = gql`
  query PageDataQuery() {
    footerCategories: categories(first: 4  ) {
      ...CategoryFragment
      type: __typename
    }
    navigationCategory: categories(first: 1) {
      ...CategoryFragment
      type: __typename
    }
  }

  ${[CategoryFragment]}
`

async function getPageData() {
  const {
    footerCategories,
    navigationCategory,
  } = await graphcmsClient.request<TPageData>(getPageDataQuery)

  return {
    footer: { categories: footerCategories},
    navigation: { pages: [...navigationCategory] },
  }
}

export default getPageData
