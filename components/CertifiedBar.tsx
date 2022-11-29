import Image from 'next/image'
import React from 'react'
import { styled } from '../stitches.config'

const CertifiedBoxOuter = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$greyBg',
  width: '100vw',
})

const CertifiedBoxInner = styled('div', {
  display: 'flex',
  maxWidth: '2560px',
  flexDirection: 'column',
  alignItems: 'center',

  variants: {
    variant: {
      mobile: {
        paddingTop: 40,
        paddingBottom: 50,
      },
      desktop: {
        paddingTop: 42,
        paddingBottom: 100,
      },
    },
  },
})

const CertifiedText = styled('p', {
  color: '$blueLink',
  fontWeight: '$semi',
  variants: {
    variant: {
      mobile: {
        fontSize: '$4',
        marginBottom: 41,
      },
      desktop: {
        fontSize: '$8',
        marginBottom: 54,
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
        columnGap: 100,
        rowGap: 30,
        marginX: 20,
      },
      desktop: {
        columnGap: 150,
        rowGap: 54,
      },
    },
  },
})
const ImageBox = styled('div', {
  position: 'relative',
  variants: {
    variant: {
      mobile: {
        width: 194,
        height: 78,
      },
      desktop: {
        height: 102,
        width: 253,
      },
    },
  },
})

const CertifiedBar = () => {
  return (
    <CertifiedBoxOuter>
      <CertifiedBoxInner variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        <CertifiedText variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          Certifierad av
        </CertifiedText>
        <IconContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <ImageBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            <Image
              alt='Adobe certified mark'
              src='/batteri.svg'
              layout='fill'
            />
          </ImageBox>
          <ImageBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            <Image
              alt='Adobe certified mark'
              src='/batteri.svg'
              layout='fill'
            />
          </ImageBox>
          <ImageBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            <Image
              alt='Adobe certified mark'
              src='/batteri.svg'
              layout='fill'
            />
          </ImageBox>
          <ImageBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            <Image
              alt='Adobe certified mark'
              src='/batteri.svg'
              layout='fill'
            />
          </ImageBox>
        </IconContainer>
      </CertifiedBoxInner>
    </CertifiedBoxOuter>
  )
}

export default CertifiedBar
