import React from 'react'
import { GetStaticProps } from 'next'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { styled } from '../stitches.config'

import type { NextPage } from 'next'

import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'
import { hittaHitHeroData, hittaHitPageData } from '../lib/static-data'

import Map from '../components/Map'
import CategoriesHero from '../components/CategoriesHero'

const Content = styled('div', {
  display: 'flex',
  marginX: 30,
  columnGap: 180,
  rowGap: 75,
  variants: {
    variant: {
      mobile: {
        marginTop: 50,
        marginBottom: 80,
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        alignItems: 'center',
      },
      desktop: {
        marginY: 100,
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    },
  },
})
const MapContainer = styled('div', {})
const StatusText = styled('h3', {
  color: '#000',
})
const AddressBox = styled('div', {
  marginTop: 7,
})
const AddressText = styled('p', {
  lineHeight: 1.5,
  color: '$black',
  fontWeight: '$reg',
  fontSize: '$2',
})
const Email = styled('a', {
  fontWeight: '$reg',
  color: '$blueLink',
  fontSize: '$2',
})
const Description = styled('div', {
  maxWidth: 700,
})
const DescriptionText = styled('p', {
  fontWeight: '$reg',
  color: '$black',
  fontSize: '$3',
  lineHeight: 1.5,
})

const render = (status: string) => {
  if (status === Status.LOADING) return <StatusText>{status} ..</StatusText>
  if (status === Status.FAILURE)
    return <StatusText>{status} ... Please try again later</StatusText>
  return null
}

const FindUs: NextPage = () => {
  const center = { lat: 57.6980118, lng: 11.9833662 }
  const zoom = 16
  const { description, address } = hittaHitPageData
  return (
    <>
      {/* @ts-ignore */}
      <CategoriesHero data={hittaHitHeroData} />
      <Content variant={{ '@initial': 'mobile', '@bp7': 'desktop' }}>
        <MapContainer>
          <Wrapper
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            render={render}
          >
            <Map center={center} zoom={zoom} />
          </Wrapper>
          <AddressBox>
            <AddressText>
              {address.street} <br></br>
              {address.postcode} <br></br>
              Telefon: {address.phone} <br></br>
              <Email href={`mailto: ${address.email}`}>
                E-mail: {address.email}
              </Email>
            </AddressText>
          </AddressBox>
        </MapContainer>
        <Description>
          <DescriptionText>
            {description.p1}
            <br />
            <br />
            {description.p2}
            <br />
            {description.p3}
          </DescriptionText>
        </Description>
      </Content>
    </>
  )
}

export default FindUs

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData()
  const { aktuellts } = await getAllAktuellts()
  return {
    props: {
      ...pageData,
      aktuellts,
    },
  }
}
