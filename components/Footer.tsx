import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { styled } from '../stitches.config'
import { TAktuellt } from '../lib/graph-interfaces'

const FooterContainer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  backgroundColor: '$greyBg',
  alignItems: 'center',
  paddingTop: 94,

  variants: {
    variant: {
      mobile: {
        paddingBottom: 120,
      },
      desktop: {
        paddingBottom: 40,
      },
    },
  },
})
const MainContainer = styled('div', {
  display: 'flex',
  width: '100vw',
  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
        paddingX: '5%',
      },
      desktop: {
        flexDirection: 'row',
        maxWidth: 1300,
        justifyContent: 'space-between',
      },
    },
  },
})

const AddressContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    variant: {
      mobile: {
        width: '100%',
      },
      desktop: {
        width: 260,
      },
    },
  },
})

const ImageContainer = styled('div', {
  position: 'relative',
  width: 196,
  height: 49,
  marginLeft: -10,
  marginBottom: 20,
})

const FooterNav = styled('div', {
  variants: {
    variant: {
      mobile: {
        display: 'flex',
        flexDirection: 'column',
        width: 260,
      },
      desktop: {
        display: 'none',
      },
    },
  },
})

const Atag = styled('a', {
  textDecoration: 'none',
  marginY: 8,

  '&:hover': {
    textDecoration: 'underline',
  },
})

const Email = styled('a', {
  fontWeight: '$reg',
  color: '$blueLink',
})

const AktuelltContainer = styled('div', {
  width: 260,
  display: 'flex',
  flexDirection: 'column',
})

const NewsLetterContainer = styled('div', {
  width: 260,
  display: 'flex',
  flexDirection: 'column',
})

const Title = styled('h4', {
  fontSize: '$8',
  fontWeight: '$bold',
  marginBottom: 20,
})

const SubTitle = styled('p', {
  fontWeight: '$bold',
  fontSize: '$3',
  marginBottom: 7,
})
const Description = styled('p', {
  fontSize: '$2',
  lineHeight: 1.7,
  marginBottom: 3,
})
const Label = styled('label', {
  fontSize: '$1',
  marginLeft: 0,
  marginTop: 10,
  marginBottom: 5,
})
const InputBar = styled('input', {
  pillShape: true,
  border: 'none',
  width: 260,
  height: 45,
  color: '$black',
  fontSize: '$4',
  paddingLeft: 10,
})

const InputBtn = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '$semi',
  textTransform: 'uppercase',
  backgroundColor: '$blue',
  marginTop: 20,
  width: 122,
  height: 45,
  pillShape: true,
})

const BuiltBy = styled('p', {
  fontSize: '$1',
  letterSpacing: 1.2,
  fontWeight: '$light',
  variants: {
    variant: {
      mobile: {
        marginTop: 50,
      },
      desktop: {
        marginTop: 30,
      },
    },
  },
})

const CopyRight = styled('p', {
  marginTop: 20,
  letterSpacing: 1.1,
  fontSize: '$1',
  fontWeight: '$light',
})

const Divider = styled('div', {
  variants: {
    variant: {
      mobile: {
        width: '20%',
        minWidth: 120,
        height: 1,
        backgroundColor: '#ffffff5f',
        marginY: 44,
        alignSelf: 'center',
      },
      tablet: {
        alignSelf: 'flex-start',
      },
      desktop: {
        display: 'none',
      },
    },
  },
})

interface IAktuellts {
  aktuellts: TAktuellt
}

const Footer = ({ aktuellts }: IAktuellts) => {
  // =========== Show only one aktuellt ===========
  const defaultAktuellt = {
    title: 'Inga nyheter/aktuella saker',
    description:
      'Här visas nyheter och aktuella saker, som kommande evanemang m.m.',
  }

  const trueAktuellt = [defaultAktuellt]
  const falseAktuellt = []

  //@ts-ignore
  aktuellts.forEach((data) => {
    //@ts-ignore
    data.show === true
    //@ts-ignore
      ? trueAktuellt.unshift({ data })
      : falseAktuellt.push({ data })
  })
  //@ts-ignore
  const aktuellt = trueAktuellt?.[0].data
  // =========== Show only one aktuellt end ===========

  return (
    <FooterContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
      <MainContainer variant={{ '@initial': 'mobile', '@bp5': 'desktop' }}>
        <AddressContainer variant={{ '@initial': 'mobile', '@bp5': 'desktop' }}>
          <ImageContainer>
            <Image src='/batteri.svg' layout='fill' alt='' />
          </ImageContainer>
          <FooterNav variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            <Link passHref href='#'>
              <Atag>Hem</Atag>
            </Link>
            <Link passHref href='/kurser'>
              <Atag>Kurser</Atag>
            </Link>
            <Link passHref href='/for-foretag'>
              <Atag>För företag</Atag>
            </Link>
            <Link passHref href='/hitta-hit'>
              <Atag>Hitta hit</Atag>
            </Link>
            <Link passHref href='/kontakta-oss'>
              <Atag>Kontakt</Atag>
            </Link>
          </FooterNav>
          <Divider
            variant={{
              '@initial': 'mobile',
              '@bp2': 'tablet',
              '@bp3': 'desktop',
            }}
          />
          <SubTitle>Södra vägen 24</SubTitle>
          <Description>
            412 54 Göteborg
            <br></br>
            Telefon: 031 711 25 40
          </Description>
          <Email href='mailto: info@batteri.se'>E-mail: info@batteri.se</Email>
        </AddressContainer>
        <Divider
          variant={{
            '@initial': 'mobile',
            '@bp2': 'tablet',
            '@bp5': 'desktop',
          }}
        />
        <AktuelltContainer>
          <Title>Aktuellt</Title>
          <SubTitle>{aktuellt.title}</SubTitle>
          <Description>{aktuellt.description}</Description>
        </AktuelltContainer>
        <Divider
          variant={{
            '@initial': 'mobile',
            '@bp2': 'tablet',
            '@bp5': 'desktop',
          }}
        />
        <NewsLetterContainer>
          <Title>Nyhetsbrev</Title>
          <Description>
            Fyll i din emailadress nedan för att ta del av vårt nyhetsbrev
          </Description>
          <Label htmlFor='email'>Email:</Label>
          <InputBar type='email' id='email' name='email'></InputBar>
          <InputBtn>Skicka</InputBtn>
        </NewsLetterContainer>
      </MainContainer>
      <BuiltBy variant={{ '@initial': 'mobile', '@bp5': 'desktop' }}>
        Built with &#9829; for Batteri by HOP Technology
      </BuiltBy>
      <CopyRight>© 2022 by Batteri kummunikation</CopyRight>
    </FooterContainer>
  )
}

export default Footer
