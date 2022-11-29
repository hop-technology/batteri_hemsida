import Image from 'next/image'
import CourseHero from '../../components/CourseHero'
import getAllProducts from '../../lib/get-all-product'
import getAllAktuellts from '../../lib/get-all-aktuellts'
import getProductBySlug from '../../lib/get-product-slug'
// import HopHelper from '../../modules/helper'

import CourseProgram from '../../components/CourseProgram'
import { styled } from '../../stitches.config'
import CourseLeader from '../../components/CourseLeader'
import RecommendedCourses from '../../components/RecommendedCourses'
import { GetStaticPaths, GetStaticProps } from 'next'
import type { NextPage } from 'next'
import { TCategories, TCategory, TProducts } from '../../lib/graph-interfaces'

const CourseContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    variant: {
      mobile: {
        rowGap: 100,
      },
      desktop: {
        rowGap: 190,
      },
    },
  },
})

const CourseInfo = styled('section', {
  maxWidth: '2560px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 40,
        marginTop: 40,
        columnGap: 0,
      },
      tablet: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginX: 40,
        columnGap: 70,
      },
      desktop: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginX: 40,
        rowGap: 70,
        marginTop: 70,
        columnGap: 150,
      },
    },
  },
  p: {
    marginTop: '1rem',
    color: '$black',
    '&:first-of-type': {
      marginTop: 0,
    },
  },
})

const CourseDescription = styled('div', {
  color: '$black',
  width: '100%',
  maxWidth: 660,
  variants: {
    variant: {
      mobile: {
        width: '80%',
      },
      desktop: {
        width: '100%',
      },
    },
  },
})

const Divider = styled('div', {
  height: 1,
  border: '1px solid $grey',
  variants: {
    variant: {
      mobile: {
        width: '40%',
      },
      desktop: {
        width: '60%',
      },
    },
    display: {
      hide: {
        display: 'none',
      },
      show: {
        display: 'inline',
      },
    },
  },
})

interface IProduct {
  product: TProducts
}

const Product: NextPage = ({ product }: IProduct) => {
  return (
    <>
      <CourseHero data={product} btnText={'Boka kurs'} />
      <CourseContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        <CourseInfo
          variant={{
            '@initial': 'mobile',
            '@bp7': 'tablet',
            '@bp8': 'desktop',
          }}
        >
          <CourseDescription
            variant={{
              '@initial': 'mobile',
              '@bp3': 'desktop',
            }}
            //@ts-ignore
            dangerouslySetInnerHTML={{ __html: product.description.html }}
          />
          <CourseProgram data={product} />
        </CourseInfo>
        <Divider
          variant={{ '@initial': 'mobile', '@bp7': 'desktop' }}
          display={{ '@initial': 'hide', '@bp3': 'show' }}
        />
        <CourseLeader data={product.courseLeaders} />
        <Divider
          variant={{ '@initial': 'mobile', '@bp7': 'desktop' }}
          display={{ '@initial': 'show', '@bp3': 'hide' }}
        />
        {/* @ts-ignore */}
        <RecommendedCourses data={product.relatedCourses} />
      </CourseContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = []

  const { products } = await getAllProducts()
  paths = [
    ...paths,
    ...products.map((product) => ({
      params: {
        slug: product.slug,
      },
    })),
  ]

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { product } = await getProductBySlug({ slug: params.slug })
  const { aktuellts } = await getAllAktuellts()

  return {
    props: {
      product,
      aktuellts,
    },
  }
}
export default Product
