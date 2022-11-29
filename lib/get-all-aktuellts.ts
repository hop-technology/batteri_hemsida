import graphcmsClient, { gql } from './graphcms-client'
import { TAktuellt } from './graph-interfaces'

export const getAllAktuelltsQuery = gql`
  query getAllAktuellts() {
    aktuellts {
      title
      description
      show
      id
    }
  }
`

async function getAllAktuellts() {
  const { aktuellts } = await graphcmsClient.request<TAktuellt>(
    getAllAktuelltsQuery,
    {}
  )
  return { aktuellts }
}

export default getAllAktuellts
