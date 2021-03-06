import graphcmsClient, { gql } from './graphcms-client'
import { ProductCardFragment } from './graphql-fragments'

export const getAllProductsQuery = gql`
  query AllProductsQuery() {
    products() {
      ...ProductCardFragment
    }
  }

  ${ProductCardFragment}
`

async function getAllProducts() {
  const { products } = await graphcmsClient.request(getAllProductsQuery, {})

  return {
    products,
  }
}

export default getAllProducts
