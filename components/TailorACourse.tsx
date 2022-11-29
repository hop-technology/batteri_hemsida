import Image from 'next/image'
import React from 'react'
import { styled } from '../stitches.config'
import Button from './Button'

const Container = styled('section', {
  maxWidth: '2560px',
  variants: {
    variant: {
      mobile: {
        height: 688,
      },
      desktop: {
        height: 650,
      },
    },
  },
})
const ImageContainer = styled('div', {
  position: 'relative',
  width: '100vw',
  maxWidth: 2560,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    linearGradient: '90deg, #000 5%, transparent 100%',
  },
  variants: {
    variant: {
      mobile: {
        height: 688,
        '&::before': {
          linearGradient: '0deg, #000 5%, transparent 100%',
        },
      },
      desktop: {
        height: 650,

        '&::before': {
          linearGradient: '90deg, #000 5%, transparent 100%',
        },
      },
    },
  },
})
const Content = styled('div', {
  position: 'relative',
  height: '100%',
  width: '100%',
  maxWidth: 1000,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  zIndex: 2,
  variants: {
    variant: {
      mobile: {
        justifyContent: 'flex-end',
        paddingLeft: '5%',
        paddingRight: '7%',
        paddingBottom: 60,
      },
      desktop: {
        justifyContent: 'center',
        paddingX: '10%',
        paddingBottom: 0,
      },
    },
  },
})
const Title = styled('h3', {
  fontWeight: '$semi',
  variants: {
    variant: {
      mobile: {
        fontSize: '$3',
      },
      desktop: {
        fontSize: '$10',
      },
    },
  },
})
const Description = styled('div', {
  variants: {
    variant: {
      mobile: {
        fontSize: '$2',
        marginTop: 21,
        marginBottom: 33,
      },
      desktop: {
        fontSize: '$3',
        marginTop: 28,
        marginBottom: 53,
      },
    },
  },
})

const TailorACourse = () => {
  return (
    <Container variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
      <ImageContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        <Image src='/index-hero.webp' alt='' layout='fill' objectFit='cover' />
        <Content variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <Title variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            Skräddarsy en kurs
          </Title>
          <Description variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            Batteri erbjuder kurser och event inom områdena text, copywriting,
            foto, grafisk design, publicering, webb, ux-design, video och audio
            för marknadsförare, informatörer, grafiker och reklamfolk.
            <br></br>
            <br></br>
            Välj kompetensområde och sedan ort. Behöver du hjälp så ring oss
            eller mejla på info@batteri.se
          </Description>
          <Button text='Begär offert' linkTo='/#' />
        </Content>
      </ImageContainer>
    </Container>
  )
}

export default TailorACourse
