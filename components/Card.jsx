import Link from 'next/link'
import Image from 'next/image'
import { styled } from '../stitches.config'
import { useRouter } from 'next/router'
import useWindowSize from '../modules/windowSize'

const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },

  '@media (prefers-reduced-motion)': {
    transition: 'none',
  },

  variants: {
    variant: {
      mobile: {
        width: 319,
        height: 374,
        paddingX: 25,
        paddingTop: 25,
        paddingBottom: 33,
      },

      desktop: {
        width: 530,
        height: 618,
        paddingX: 34,
        paddingTop: 34,
        paddingBottom: 55,
        transition: 'filter 200ms, transform 200ms',

        '&:hover': {
          cursor: 'pointer',
          dropShadow: '0 0 10px black',
          transform: 'scale(1.02)',
        },
      },
    },
  },
})

const LogoIcon = styled('div', {
  alignSelf: 'flex-end',
  marginBottom: 'auto',

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

const Divider = styled('div', {
  backgroundColor: '$white',
  zIndex: 2,

  variants: {
    variant: {
      mobile: {
        width: '78px',
        height: '3px',
      },
      desktop: {
        width: '128px',
        height: '5px',
      },
    },
  },
})

const Title = styled('h2', {
  fontWeight: '$semi',
  color: '$white',
  zIndex: 2,

  variants: {
    variant: {
      mobile: {
        fontSize: '$2',
        marginTop: 21,
      },
      desktop: {
        fontSize: '$7',
        marginTop: 34,
      },
    },
  },
})

const Description = styled('p', {
  color: '$white',
  zIndex: 2,

  variants: {
    variant: {
      mobile: {
        fontSize: '$1',
        marginTop: 16,
        marginRight: 38,
      },
      desktop: {
        fontSize: '$5',
        marginTop: 28,
        marginRight: 60,
      },
    },
  },
})

const ImageBox = styled('div', {
  position: 'absolute',
  zIndex: '-1',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,

  variants: {
    variant: {
      mobile: {
        width: 319,
        height: 374,
      },
      desktop: {
        width: 530,
        height: 618,
      },
    },
  },
})

const Card = ({ data }) => {
  const windowSize = useWindowSize()
  const router = useRouter()
  const {
    slug,
    gradientColor,
    isWide,
    image,
    wideImage,
    name,
    logo,
    description,
  } = data
  switch (router.route) {
    case '/kurser/[slug]':
      return (
        <>
          <Link href={`/kurs/${slug}`} passHref>
            <CardContent
              variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
              css={{
                width:
                  isWide === true && windowSize.width >= 1140
                    ? 1140
                    : isWide !== true && windowSize.width >= 1140
                    ? 530
                    : windowSize.width <= 1139 && windowSize.width >= 750
                    ? 530
                    : 319,
                height: windowSize.width >= 750 ? 618 : 374,
                '&::before': {
                  linearGradient: `0deg, ${gradientColor?.color.hex} 10%, transparent 80%`,
                },
              }}>
              <ImageBox>
                <Image
                  src={
                    isWide && windowSize.width >= 1140
                      ? wideImage?.url
                      : image?.url
                  }
                  priority
                  alt={name}
                  width={
                    isWide && windowSize.width >= 1140
                      ? 1140
                      : isWide !== true && windowSize.width >= 1140
                      ? 530
                      : windowSize.width <= 1139 && windowSize.width >= 750
                      ? 530
                      : 319
                  }
                  height={windowSize.width >= 750 ? 618 : 374}
                />
              </ImageBox>
              <LogoIcon variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
                <Image
                  src={logo?.url ? logo?.url : '/batteri.svg'}
                  alt={name}
                  width={74}
                  height={74}
                  priority
                />
              </LogoIcon>
              <Divider variant={{ '@initial': 'mobile', '@bp3': 'desktop' }} />
              <Title variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
                {name}
              </Title>
              <Description
                variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
                {description}
              </Description>
            </CardContent>
          </Link>
        </>
      )

    default:
      return (
        <>
          <Link href={`/kurser/${slug}`} passHref>
            <CardContent
              variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
              css={{
                width:
                  isWide === true && windowSize.width >= 1140
                    ? 1140
                    : isWide !== true && windowSize.width >= 1140
                    ? 530
                    : windowSize.width <= 1139 && windowSize.width >= 750
                    ? 530
                    : 319,
                height: windowSize.width >= 750 ? 618 : 374,
                '&::before': {
                  linearGradient: `0deg, ${gradientColor?.color.hex} 10%, transparent 80%`,
                },
              }}>
              <ImageBox>
                <Image
                  priority
                  src={
                    isWide && windowSize.width >= 1140
                      ? wideImage?.url
                      : image?.url
                  }
                  alt={name}
                  width={
                    isWide && windowSize.width >= 1140
                      ? 1140
                      : isWide !== true && windowSize.width >= 1140
                      ? 530
                      : windowSize.width <= 1139 && windowSize.width >= 750
                      ? 530
                      : 319
                  }
                  height={windowSize.width >= 750 ? 618 : 374}
                />
              </ImageBox>
              <LogoIcon variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
                <Image
                  priority
                  src={logo?.url ? logo?.url : '/batteri.svg'}
                  alt={name}
                  height={74}
                  width={74}
                />
              </LogoIcon>
              <Divider variant={{ '@initial': 'mobile', '@bp3': 'desktop' }} />
              <Title variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
                {name}
              </Title>
              <Description
                variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
                {description}
              </Description>
            </CardContent>
          </Link>
        </>
      )
  }
}

export default Card
