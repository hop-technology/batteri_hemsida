import React from 'react'
import Image from 'next/image'
import { styled } from '../stitches.config'
import BookCourseModal from './BookCourseModal'
import HopHelper from '../modules/helper'
import { TProducts } from '../lib/graph-interfaces'

const Kursprogram = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: '$lightGreyBg',
  width: '80%',
  maxWidth: 660,
  height: 'fit-content',
  paddingY: 46,

  variants: {
    variant: {
      mobile: {
        paddingX: '10%',
        width: '100%',
      },
      desktop: {
        paddingX: 45,
        width: '80%',
      },
    },
  },
})

const Title = styled('h3', {
  color: '$black',
  fontWeight: '$semi',
  fontSize: '$7',
  variants: {
    variant: {
      mobile: {
        alignSelf: 'center',
      },
      desktop: {
        alignSelf: 'flex-start',
      },
    },
  },
})

const Program = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 35,
  marginTop: 48,
  rowGap: 20,
})

const ProgramItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: 15,
  width: 250,
})

const CheckImageContainer = styled('div', {
  width: 24,
  height: 18,
})

const ProgramItemText = styled('p', {
  color: '$black',
  width: 210,
})

const DashedDivider = styled('div', {
  height: 1,
  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='5' stroke-dasharray='1%2c 16' stroke-dashoffset='2' stroke-linecap='square'/%3e%3c/svg%3e")`,
  marginY: 50,

  variants: {
    variant: {
      mobile: {
        width: '100%',
        marginLeft: '0%',
      },
      desktop: {
        width: '100%',
        marginLeft: '0%',
      },
    },
  },
})

const Price = styled('div', {
  marginBottom: 70,
})

const CoursePrice = styled('div', {
  color: '$black',
  marginTop: 3,
  '&:first-of-type': {
    marginTop: 8,
  },
})

const CenterdContent = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: 30,
})

const Disclaimer = styled('p', {
  color: '$black',
  variants: {
    variant: {
      mobile: {
        fontSize: '$1',
      },
      desktop: {
        fontSize: '$3',
      },
    },
  },
})

interface ICourseProgram {
  data: TProducts
}

const CourseProgram = ({ data }: ICourseProgram) => {
  const { name, kursprogram, price, privatePrice } = data
  const items = kursprogram.map((item, index) => {
    return (
      <ProgramItem key={index}>
        <CheckImageContainer>
          <Image src='/check.svg' alt='' height={18} width={24} />
        </CheckImageContainer>
        <ProgramItemText>{item}</ProgramItemText>
      </ProgramItem>
    )
  })
  return (
    <Kursprogram variant={{ '@initial': 'mobile', '@bp7': 'desktop' }}>
      <Title variant={{ '@initial': 'mobile', '@bp7': 'desktop' }}>
        Kursprogram
      </Title>
      <Program>{items}</Program>
      <DashedDivider variant={{ '@initial': 'mobile', '@bp3': 'desktop' }} />
      <Price>
        <Title>Priser</Title>
        <CoursePrice>Kurs: {price}:-</CoursePrice>
        {privatePrice ? (
          <CoursePrice>Privateundervisning: {privatePrice}:-*</CoursePrice>
        ) : null}
      </Price>
      <CenterdContent>
        <BookCourseModal btnText='Boka kurs' courseName={name} courseDates={HopHelper.addCourseDuration(data)}/>
        <Disclaimer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          *Ev. resor, logi &amp; traktamente tillkommer.
        </Disclaimer>
      </CenterdContent>
    </Kursprogram>
  )
}

export default CourseProgram
