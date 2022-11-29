import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { styled } from '../stitches.config'
import CategoriesHero from '../components/CategoriesHero'
import Card from '../components/Card'
import getAllCategories from '../lib/get-all-categories'
import getAllAktuellts from '../lib/get-all-aktuellts'
import getPageData from '../lib/get-page-data'
import { categoriesHeroData } from '../lib/static-data'

import type { NextPage } from 'next'
import { TCategories } from '../lib/graph-interfaces'

const CategoriesBox = styled('div', {
  width: '100vw',
  maxWidth: 1920,
  display: 'flex',
  marginY: 58,

  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 14,
      },
      desktop: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 80,
      },
    },
  },
})

const ATag = styled('a', {
  textDecoration: 'none',
})


const Kurser: NextPage = ({ categories }: TCategories) => {
  return (
    <>
          {/* @ts-ignore */}
      <CategoriesHero data={categoriesHeroData} />
      <CategoriesBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        {categories.map((category, slug) => {
          return (
            <Link href={`/kurser/${category.slug}`} key={slug} passHref>
              <ATag>
                <Card data={category} />
              </ATag>
            </Link>
          )
        })}
      </CategoriesBox>
    </>
  )
}
export default Kurser

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData()
  const { categories } = await getAllCategories()
  const { aktuellts } = await getAllAktuellts()

  return {
    props: {
      ...pageData,
      categories,
      aktuellts,
    },
  }
}
