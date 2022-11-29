import React from 'react'
import { GetStaticProps } from 'next'
import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'



const FourOFour = () => {
  return (
    <div>Custom 404 error</div>
  )
}

export default FourOFour



export const getStaticProps: GetStaticProps = async() => {

  const { aktuellts } = await getAllAktuellts( )
  const pageData = await getPageData()
  return {
    props: {
      ...pageData,
      aktuellts,
    },
  }
}