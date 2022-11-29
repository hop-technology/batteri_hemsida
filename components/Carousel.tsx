import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import useWindowSize from '../modules/windowSize'

import { styled } from '../stitches.config'
import Image from 'next/image'
import Button from './Button'

const TestimonialsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  backgroundColor: '$blueBg',
  paddingTop: 85,
  paddingBottom: 104,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const Title = styled('p', {
  color: '$blueLight',
  fontWeight: '$semi',
  variants: {
    variant: {
      mobile: {
        fontSize: '$3',
      },
      desktop: {
        fontSize: '$7',
      },
    },
  },
})

const Embla = styled('div', {
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  variants: {
    variant: {
      mobile: {
        width: '100vw',
        marginY: 50,
      },
      desktop: {
        maxWidth: '1560px',
        justifyContent: 'center',
        marginY: 123,
      },
    },
  },
})

const EmblaContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  variants: {
    variant: {
      mobile: {
        width: '100vw',
      },
      desktop: {
        maxWidth: '1560px',
      },
    },
  },
})

const EmblaSlide = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  justifyContent: 'center',
  linearGradient: '-45deg, $blue 0%, $pink 80%',
  variants: {
    variant: {
      smallMobile: {
        marginX: '4%',
        flex: '0 0 291px',
        height: 450,
        paddingBottom: 15,
        paddingX: 22,
      },
      mobile: {
        marginX: '4%',
        flex: '0 0 330px',

      },
      smallDesktop: {
        marginX: '12%',
        flex: '0 0 380px',
        height: 482,
        padding: 30,
      },
      desktop: {
        marginX: 'auto',
        flex: '0 0 380px',
      },
    },
    gradDir: {
      bluePink: {
        linearGradient: '-45deg, $pink 0%, $blue 100%',
      },
      pinkBlue: {
        linearGradient: '-45deg, $blue -30%, $pink 100%',
      },
    },
  },
})

const ImageContainer = styled('div', {
  display: 'flex',
  width: '100%',
  height: '40%',
  justifyContent: 'center',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '60%',
  justifyContent: 'flex-start',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const Divider = styled('span', {
  backgroundColor: '$white',
  width: '33%',
  height: 0,
  border: 'solid $white 1.5px',
})

const Name = styled('h3', {
  fontWeight: '$semi',
  variants: {
    variant: {
      mobile: {
        fontSize: '$1',
        marginY: 16,
      },
      desktop: {
        marginY: 20,
        fontSize: '$3',
      },
    },
  },
})
const Review = styled('p', {
  fontSize: '$2',
  fontWeight: '$reg',
  lineHeight: 1.5,
})

const Carousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Johan DePaoli, Art Director',
      review:
        '"Batteri har väl sammansatta utbildningar som ger inspiration i det dagliga arbetet. Lärarna kommer från arbetslivet och har stött på samma problem som jag själv"',
      color: 'bluePink',
      image: '/batteri.svg',
    },
    {
      id: 2,
      name: 'Karin Ekh',
      review:
        '"Batteri har gedigen utbildning som ger färdigheter både i teorin och i praktiken. Dessutom är kursens innehåll kopplat till verkligheten med lösningar som kommer till användning i det dagliga arbetet."',
      color: 'pinkBlue',
      image: '/batteri.svg',
    },
    {
      id: 3,
      name: 'Johan Andersson, Designkoordinator',
      review:
        '"Jättetrevligt att kursa hos Batteri, kurserna är bra och att det var väldigt trevliga och ljusa lokaler. Trevlig personal, nästan lite hemtrevligt och inte så strikt som det ofta kan vara i kurs- lokaler, kreativ stämning och man trivs"',
      color: 'bluePink',
      image: '/batteri.svg',
    },
  ]
  const windowSize = useWindowSize()
  const [viewportRef] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  })

  return (
    <TestimonialsContainer>
      <Title variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        Några citat från tidigare kursdeltagare
      </Title>
      <Embla
        variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
        ref={windowSize.width <= 1160 ? viewportRef : null}>
        <EmblaContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          {testimonials.map((testimonial) => (
            <EmblaSlide
              key={testimonial.id}
              // @ts-ignore
              gradDir={testimonial.color}
              variant={{
                '@initial': 'smallMobile',
                '@bp2': 'mobile',
                '@bp3': 'smallDesktop',
                '@bp6': 'desktop',
              }}>
              <ImageContainer>
                <Image src={testimonial.image} alt='' width={201} height={47} />
              </ImageContainer>
              <ContentContainer>
                <Divider />
                <Name variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
                  {testimonial.name}
                </Name>
                <Review>{testimonial.review}</Review>
              </ContentContainer>
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </Embla>
      <Button text="Hitta din kurs idag" linkTo="/kurser"/>
    </TestimonialsContainer>
  )
}

export default Carousel
