import Image from 'next/image'
import Link from 'next/link'
import { styled } from '../stitches.config'
import useWindowSize from '../modules/windowSize'
import BookCourseModal from './BookCourseModal'
import HopHelper from '../modules/helper'
import { TProducts } from '../lib/graph-interfaces'

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

const Title = styled('h1', {
  fontWeight: '$bold',
  marginBottom: 20,
  marginTop: -60,

  variants: {
    variant: {
      mobile: {
        fontSize: '$6',
        lineHeight: 1.4,
        maxWidth: 400,
      },
      desktop: {
        fontSize: '$12',
        maxWidth: 500,
      },
    },
  },
})

const SubTitle = styled('h2', {
  fontWeight: '$semi',
  variants: {
    variant: {
      mobile: {
        marginBottom: 42,
        fontSize: '$3',
        lineHeight: 1.4,
        maxWidth: 400,
      },
      desktop: {
        marginBottom: 44,
        fontSize: '$7',
        maxWidth: 700,
      },
    },
  },
})

const Button = styled('a', {
  alignSelf: 'flex-start',
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
        padding: '15px 45px',
      },

      desktop: {
        padding: '15px 65px',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '$blue',
          transform: 'scale(1.02)',
        },
      },
    },
  },
})

interface ICourseHero {
  btnText: string
  data: TProducts
}

const CourseHero = ({ data, btnText }: ICourseHero) => {
  const { name, images, wideImage, subTitle, gradientColor } = data
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
            }, transparent 10%, ${gradientColor?.color.hex} 80%`,
          },
        }}>
        <Image
          src={windowSize.width >= 750 ? wideImage.url : images?.[0].url}
          alt=''
          layout='fill'
          objectFit='cover'
          priority
        />
        <Content variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <Title variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            {name}
          </Title>
          <SubTitle variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            {subTitle}
          </SubTitle>
          <BookCourseModal
            btnText={btnText}
            courseName={name}
            courseDates={data.courseDuration ? HopHelper.addCourseDuration(data) : null}
          />
        </Content>
      </ImageBox>
    </Hero>
  )
}

export default CourseHero
