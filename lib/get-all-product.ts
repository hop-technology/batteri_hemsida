import graphcmsClient, { gql } from './graphcms-client'
import { ProductCardFragment } from './graphql-fragments'
import { TProductCard } from './graph-interfaces'

export const getAllProductsQuery = gql`
  query AllProductsQuery() {
    products() {
      ...ProductCardFragment
    }
  }

  ${ProductCardFragment}
`

async function getAllProducts() {
  const { products } = await graphcmsClient.request<TProductCard>(getAllProductsQuery, {})

  return {
    products,
  }
}

export default getAllProducts
