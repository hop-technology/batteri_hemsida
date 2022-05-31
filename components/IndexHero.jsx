import Image from 'next/image'
import Link from 'next/link'
import { styled } from '../stitches.config'
import React from 'react'

const Hero = styled('div', {
  maxWidth: '2560px',
  variants: {
    variant: {
      mobile: {
        height: '100vh',
      },
      desktop: {
        height: 621,
      },
    },
  },
})

const ImageBox = styled('div', {
  position: 'relative',
  zIndex: '0',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  width: '100vw',
  maxWidth: '2560px',
  display: 'flex',
  alignItems: 'center',
  overflowX: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  width: '90%',
  zIndex: 2,

  variants: {
    variant: {
      mobile: {
        height: '100vh',
        marginLeft: 21,
      },
      desktop: {
        height: 621,
        marginLeft: '5%',
      },
    },
  },
})

const LogoIcon = styled('div', {
  variants: {
    variant: {
      mobile: {
        square: 54,
      },
      desktop: {
        square: 74,
      },
    },
  },
})

const Title = styled('h1', {
  marginTop: 40,
  marginBottom: 60,
  fontWeight: '$semi',

  variants: {
    variant: {
      mobile: {
        fontSize: '$4',
        lineHeight: 1.4,
        maxWidth: 400,
      },
      desktop: {
        fontSize: '$7',
        maxWidth: 500,
      },
    },
  },
})

const BoldText = styled('span', {
  fontWeight: '$bold',
})

const LinkContainer = styled('div', {
  display: 'flex',
  zIndex: 2,
  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: 20,
      },
      desktop: {
        columnGap: 29,
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
  },
})

const Button = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$blueDark',
  pillShape: true,
  fontSize: '$4',
  fontWeight: '$semi',
  textDecoration: 'none',
  transition: 'transform 200ms',
  '@media (prefers-reduced-motion)': {
    transition: 'none',
  },

  variants: {
    variant: {
      mobile: {
        padding: '15px 32px',
      },

      desktop: {
        padding: '20px 35px',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '$blue',
          transform: 'scale(1.02)',
        },
      },
    },
  },
})

const MostPopular = styled('a', {
  transition: 'transform 200ms',

  '@media (prefers-reduced-motion)': {
    transition: 'none',
  },

  variants: {
    variant: {
      mobile: {
        fontSize: '$2',
      },
      desktop: {
        fontSize: '$3',

        '&:hover': {
          cursor: 'pointer',
          transform: 'scale(1.02)',
        },
      },
    },
  },
})

const IndexHero = () => {
  return (
    <Hero>
      <ImageBox
        variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
        css={{
          '&::before': {
            linearGradient: `0deg, transparent 10%, black 80%`,
          },
        }}>
        <Image src='/wideAi.webp' alt='' layout='fill' objectFit='cover' />
        <Content variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <LogoIcon>
            <Image src='/wideAi.webp' alt='' width={75} height={75} />
          </LogoIcon>
          <Title variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            Sveriges mest erfarna kursutbildare inom{' '}
            <BoldText css={{ fontWeight: '$bold' }}>
              Adobe Creative Suit.
            </BoldText>
          </Title>
          <LinkContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            <Link href={`/kurs/popular`} passHref>
              <Button variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
                Hitta din kurs
              </Button>
            </Link>
            <Link href={`/kurs/popular`} passHref>
              <MostPopular
                variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
                Mest populära kurser 2022
              </MostPopular>
            </Link>
          </LinkContainer>
        </Content>
      </ImageBox>
    </Hero>
  )
}

export default IndexHero
