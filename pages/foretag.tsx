import React from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'

import type { NextPage } from 'next'

import getPageData from '../lib/get-page-data'
import getAllAktuellts from '../lib/get-all-aktuellts'
import { styled } from '../stitches.config'
import CourseHero from '../components/CourseHero'
import Button from '../components/Button'
import { foretagHeroData, foretagInfoData, foretagIconGridData } from '../lib/static-data'

const IconGrid = styled('section', {
  width: '100vw',
  maxWidth: 2560,
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  columnGap: 100,
  variants: {
    variant: {
      mobile: {
        marginTop: 40,
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 75,
      },
      desktop: {
        marginTop: 125,
        flexDirection: 'row',
        rowGap: 100,
      },
    },
  },
})
const IconGridItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 300,
  height: 'fit-content',
})

const IconBox = styled('div', {
  position: 'relative',
  variants: {
    variant: {
      mobile: {
        square: 160,
      },
      desktop: {
        square: 220,
      },
    },
  },
})
const ItemText = styled('p', {
  textAlign: 'center',
  color: '$black',
  fontWeight: '$semi',
})

const Divider = styled('div', {
  height: 1,
  border: '1px solid $grey',
  marginY: 125,
  width: '70%',
})

const InfoSection = styled('section', {
  width: '100vw',
  maxWidth: 2560,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  columnGap: 250,
  rowGap: 150,
  marginBottom: 125,
  paddingX: 28,
})

const InfoItem = styled('div', {
  maxWidth: 520,
  display: 'flex',
  flexDirection: 'column',
  rowGap: 22,
})

const InfoTitle = styled('h3', {
  color: '$blueLight',
  fontWeight: '$semi',
  fontSize: '$7',
})

const InfoContent = styled('p', {
  color: '$black',
})

const ButtonBox = styled('div', {
  marginBottom: 125,
})

const ForForetag: NextPage = () => {

  const items = foretagIconGridData.map((item, id) => {
    return (
      <IconGridItem key={id}>
        <IconBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <Image src={item.icon} alt='' layout='fill' />
        </IconBox>
        <ItemText>{item.text}</ItemText>
      </IconGridItem>
    )
  })

  const infoItems = foretagInfoData.map((item, id) => {
    return (
      <InfoItem key={id}>
        <InfoTitle>{item.title}</InfoTitle>
        <InfoContent>{item.text}</InfoContent>
      </InfoItem>
    )
  })
  return (
    <>
    {/* @ts-ignore */}
      <CourseHero data={foretagHeroData} btnText={'Begär Offert'} />
      <IconGrid variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        {items}
      </IconGrid>
      <Divider />
      <InfoSection>{infoItems}</InfoSection>
      <ButtonBox>
        <Button linkTo='/#' text='Begär offert' />
      </ButtonBox>
    </>
  )
}

export default ForForetag

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
