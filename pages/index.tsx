import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { TCategories } from '../lib/graph-interfaces'

import { styled } from '../stitches.config'
import getPageData from '../lib/get-page-data'
import getAllCategories from '../lib/get-all-categories'
import getAllAktuellts from '../lib/get-all-aktuellts'
import Card from '../components/Card'
import IndexHero from '../components/IndexHero'
import CertifiedBar from '../components/CertifiedBar'
import Carousel from '../components/Carousel'
import TestimonialBar from '../components/TestimonialBar'

import BookCourseModal from '../components/BookCourseModal'

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

const Home: NextPage = ({ categories }: TCategories) => {
  return (
    <>
      <IndexHero />
      <TestimonialBar />
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
      <CertifiedBar />
      <Carousel />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { categories } = await getAllCategories()
  const { aktuellts } = await getAllAktuellts()
  const pageData = await getPageData()
  return {
    props: {
      ...pageData,
      categories,
      aktuellts,
    },
  }
}
