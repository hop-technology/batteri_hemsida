import Image from 'next/image'
import Link from 'next/link'
import { styled } from '../stitches.config'
import useWindowSize from '../modules/windowSize'
import Button from './Button'

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

const MostPopular = styled('a', {
  transition: 'transform 200ms',
  color: '$white',

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
  const windowSize = useWindowSize()
  return (
    <Hero>
      <ImageBox
      //@ts-ignore
        variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
        css={{
          '&::before': {
            linearGradient: `${
              windowSize.width >= 750 ? '270deg' : '0deg'
            }, transparent 10%, black 80%`,
          },
        }}>
        <Image
          src={
            windowSize.width >= 750
              ? '/index-hero.webp'
              : '/index-hero-mob.webp'
          }
          alt=''
          layout='fill'
          objectFit='cover'
          priority
        />
        <Content variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <LogoIcon>
            <Image src='/batteri.svg' alt='' width={75} height={75} priority />
          </LogoIcon>
          <Title variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            Sveriges mest erfarna kursutbildare inom{' '}
            <BoldText css={{ fontWeight: '$bold' }}>
              Adobe Creative Suite.
            </BoldText>
          </Title>
          <LinkContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            <Button linkTo='/kurser' text='Hitta din kurs' />
            <Link href={`/popular`} passHref>
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
