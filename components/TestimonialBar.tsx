import Image from 'next/image'
import React from 'react'
import { styled } from '../stitches.config'

const TestimonialBoxOuter = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$blueBg',
  width: '100vw',
})

const TestimonialBoxInner = styled('div', {
  display: 'flex',
  maxWidth: '1500px',
  flexDirection: 'column',
  alignItems: 'center',

  variants: {
    variant: {
      mobile: {
        paddingTop: 40,
        paddingBottom: 50,
      },
      desktop: {
        paddingTop: 75,
        paddingBottom: 100,
      },
    },
  },
})

const TestimonialText = styled('p', {
  color: '$blueLight',
  textAlign: 'center',
  marginX: 20,
  variants: {
    variant: {
      mobile: {
        fontWeight: '$semi',
        fontSize: '$3',
        marginBottom: 41,
      },
      desktop: {
        fontWeight: '$reg',
        fontSize: '$7',
        marginBottom: 84,
      },
    },
  },
})

const IconContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
        columnGap: 100,
        rowGap: 30,
        marginX: 20,
      },
      desktop: {
        flexDirection: 'row',
        columnGap: 75,
        rowGap: 40,
      },
    },
  },
})
const ImageBox = styled('div', {
  position: 'relative',
  variants: {
    variant: {
      mobile: {
        width: 151,
        height: 31,
      },
      desktop: {
        width: 205,
        height: 50,
      },
    },
  },
})

const TestimonialBar = () => {
  return (
    <TestimonialBoxOuter>
      <TestimonialBoxInner variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        <TestimonialText variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          Vi laddar Adobekompetens genom Batteri
        </TestimonialText>
        <IconContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <ImageBox variant={{ '@initial': 'mobile', '@bp2': 'desktop' }}>
            <Image
              alt='Customer that has used our service'
              src='/batteri.svg'
              layout='fill'
            />
          </ImageBox>
          <ImageBox variant={{ '@initial': 'mobile', '@bp2': 'desktop' }}>
            <Image
              alt='Customer that has used our service'
              src='/batteri.svg'
              layout='fill'
            />
          </ImageBox>
          <ImageBox variant={{ '@initial': 'mobile', '@bp2': 'desktop' }}>
            <Image
              alt='Customer that has used our service'
              src='/batteri.svg'
              layout='fill'
            />
          </ImageBox>
          <ImageBox variant={{ '@initial': 'mobile', '@bp2': 'desktop' }}>
            <Image
              alt='Customer that has used our service'
              src='/batteri.svg'
              layout='fill'
            />
          </ImageBox>
        </IconContainer>
      </TestimonialBoxInner>
    </TestimonialBoxOuter>
  )
}

export default TestimonialBar
