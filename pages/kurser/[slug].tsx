import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import getAllCategories from '../../lib/get-all-categories'
import getPageData from '../../lib/get-page-data'
import getAllAktuellts from '../../lib/get-all-aktuellts'
import getCategoryBySlug from '../../lib/get-category-slug'
import Card from '../../components/Card'
import CategoryHero from '../../components/CategoryHero'
import { styled } from '../../stitches.config'
import TailorACourse from '../../components/TailorACourse'

import { TCategory } from '../../lib/graph-interfaces'
import type { NextPage } from 'next'

const CoursesBox = styled('div', {
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

interface ICategory {
  category: TCategory
}

const CategoryPage: NextPage = ({ category }: ICategory) => {
  if (Array.isArray(category.products)) {
    const info = category.products.map((product, i) => {
      return <Card data={product} key={i} />
    })

    return (
      <>
        <CategoryHero data={category} />
        <CoursesBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          {info}
        </CoursesBox>
        <TailorACourse />
      </>
    )
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = []

  const { categories } = await getAllCategories()

  paths = [
    ...paths,
    ...categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
  ]

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageData = await getPageData()
  const { category } = await getCategoryBySlug({ slug: params.slug })
  const { aktuellts } = await getAllAktuellts()

  return {
    props: {
      aktuellts,
      category,
      ...pageData,
    },
  }
}

export default CategoryPage
