import graphcmsClient, { gql } from './graphcms-client'
import { ProductFragment } from './graphql-fragments'
import { TProductCard } from './graph-interfaces'

export const getProductsSlugQuery = gql`
  query CollectionSlugQuery($slug: String!) {
    products(where: { slug: $slug }) {
      ...ProductFragment
      localizations(includeCurrent: true) {
        locale
        name
        slug
      }
    }
  }

  ${ProductFragment}
`

async function getProductBySlug({ slug }) {
  const {
    products: [product],
  } = await graphcmsClient.request<TProductCard>(getProductsSlugQuery, {
    slug,
  })

  return { product }

}

export default getProductBySlug
