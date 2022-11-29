import React from 'react'
import { IProduct } from '../lib/graph-interfaces'
import { styled } from '../stitches.config'
import RecommendedCard from './RecommendedCard'

const RecommendedSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  maxWidth: '2560px',
  height: 'fit-content',
  marginBottom: 80,
  variants: {
    variant: {
      mobile: {
        paddingX: 30,
      },
      desktop: {
        paddingX: 60,
      },
    },
  },
})
const Title = styled('h4', {
  color: '$blueLight',
  fontWeight: '$semi',
  fontSize: '$7',
  alignSelf: 'flex-start',
  variants: {
    variant: {
      mobile: {
        marginBottom: 30,
      },
      desktop: {
        marginBottom: 60,
      },
    },
  },
})
const Cards = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
        rowGap: 30,
      },
      desktop: {
        flexDirection: 'row',
        rowGap: 70,
        columnGap: 80,
      },
    },
  },
})

interface IRecommendedCourses {
  data: IProduct
}

const RecommendedCourses = ({ data }: IRecommendedCourses) => {
  return (
    <RecommendedSection variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
      <Title variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        Liknande kurser
      </Title>
      <Cards variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        {/* @ts-ignore */}
        {data.map((product, index: number) => {
          const course_data = {
            slug: product.slug,
            gradientColor: product.gradientColor,
            image: product.images[0],
            name: product.name,
            logo: product.logo,
            description: product.shortDescription,
          }
          return <RecommendedCard data={course_data} key={index} />
        })}
      </Cards>
    </RecommendedSection>
  )
}

export default RecommendedCourses
