import React from 'react'
import { GetStaticProps } from 'next'

import type { NextPage } from 'next'

import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'



const FiveHundred: NextPage = () => {
  return (
    <div>Custom 500 error</div>
  )
}

export default FiveHundred



export const getStaticProps: GetStaticProps = async () => {
  const { aktuellts } = await getAllAktuellts()
  const pageData = await getPageData()
  return {
    props: {
      ...pageData,
      aktuellts,
    },
  }
}