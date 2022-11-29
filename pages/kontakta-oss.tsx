import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'
import CategoriesHero from '../components/CategoriesHero'
import { styled } from '../stitches.config'
import { kontaktHeroData } from '../lib/static-data'
import Image from 'next/image'
import Button from '../components/Button'

const ContactInfo = styled('div', {
  display: 'flex',
  width: '100vw',
  maxWidth: 2560,
  justifyContent: 'space-evenly',
  columnGap: 100,
  rowGap: 100,
  flexWrap: 'wrap',
  marginY: 130,
  paddingX: 30,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const ContactInfoItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const ContactInfoTitle = styled('h3', {
  color: '$blueLight',
  fontWeight: '$semi',
  fontSize: '$7',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})
const ContactInfoDescription = styled('p', {
  color: '$black',
  maxWidth: 700,
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const ContactTag = styled('p', {
  color: '$black',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const ATag = styled('a', {
  color: '$blueLink',
  variants: {
    variant: {
      mobile: {},
      desktop: {},
    },
  },
})

const Divider = styled('div', {
  height: 1,
  border: '1px solid $grey',
  width: '70%',
  marginY: 80,
  variants: {
    display: {
      hide: {
        display: 'none',
      },
      show: {
        display: 'inline',
      },
    },
  },
})

const ManagementTitle = styled('h3', {
  color: '$blueLight',
  fontWeight: '$semi',
  fontSize: '$10',
  width: '100vw',
  textAlign: 'center',
})

const Management = styled('div', {
  display: 'flex',
  columnGap: 200,
  rowGap: 90,
  flexWrap: 'wrap',
  justifyContent: 'center',
  paddingX: 30,
  variants: {
    variant: {
      mobile: {
        flexDirection: 'column',
      },
      desktop: {
        flexDirection: 'row',
      },
    },
  },
})

const ManagementItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 30,
})
const ManagementImage = styled('div', {
  position: 'relative',

  variants: {
    variant: {
      mobile: {
        square: 200,
      },
      desktop: {
        square: 280,
      },
    },
  },

  span: {
    borderRadius: '50%',
  },
})
const ManagementText = styled('p', {
  color: '$black',
  textAlign: 'center',
  lineHeight: '1.5rem',
})

const ButtonBox = styled('div', {
  marginBottom: 125,
})

const ContactUs: NextPage = () => {
  return (
    <>
      {/* @ts-ignore */}
      <CategoriesHero data={kontaktHeroData} />
      <ContactInfo>
        <ContactInfoItem>
          <ContactInfoTitle>
            Sveriges första Adobe och Apple authorised training center
          </ContactInfoTitle>
          <ContactInfoDescription>
            Batteri är Sveriges första Adobe Authorised Training Centre och
            Apple Authorised Training Center. Vi är också Wacom Authorised
            Training Center och Quark Authorized Training Partner. <br></br>
            <br></br>Batteri Kommunikation AB (556626- 9717)
          </ContactInfoDescription>
        </ContactInfoItem>
        <Divider display={{ '@initial': 'show', '@bp3': 'hide' }} />
        <ContactInfoItem>
          <ContactInfoTitle>Kontakta oss</ContactInfoTitle>
          <ContactTag>
            E-mail: <ATag href='mailto: info@batteri.se'>info@batteri.se</ATag>
          </ContactTag>
          <ContactTag>
            Göteborg: <ATag href='tel: +4631-711-2540'>031 - 711 25 40</ATag>
          </ContactTag>
        </ContactInfoItem>
        <Divider display={{ '@initial': 'show' }} />
        <ManagementTitle>Management</ManagementTitle>
        <Management variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <ManagementItem>
            <ManagementImage
              variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
            >
              <Image src='/girl.webp' alt='' layout='fill' />
            </ManagementImage>
            <ManagementText>
              Jens Østgaard <br></br> VD
            </ManagementText>
          </ManagementItem>
          <ManagementItem>
            <ManagementImage
              variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
            >
              <Image src='/girl.webp' alt='' layout='fill' />
            </ManagementImage>
            <ManagementText>
              Anna-Clara Ander <br></br>Projectledare Göteborg
            </ManagementText>
          </ManagementItem>
        </Management>
      </ContactInfo>
      <ButtonBox>
        <Button linkTo='/kurser' text='Hitta din kurs' />
      </ButtonBox>
    </>
  )
}

export default ContactUs

export const getStaticProps: GetStaticProps = async () => {
  const { aktuellts } = await getAllAktuellts()
  const pageData = await getPageData()
  return {
    props: {
      ...pageData,
      aktuellts,
    },
  }
}
