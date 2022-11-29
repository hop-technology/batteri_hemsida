import Link from 'next/link'
import React from 'react'
import { styled } from '../stitches.config'

const CustomButton = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$blueDark',
  pillShape: true,
  fontSize: '$4',
  fontWeight: '$semi',
  textDecoration: 'none',
  color: '$white',
  transition: 'transform 200ms',
  '@media (prefers-reduced-motion)': {
    transition: 'none',
  },

  variants: {
    variant: {
      mobile: {
        padding: '15px 32px',
      },

      desktop: {
        padding: '16px 36px',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '$blue',
          transform: 'scale(1.02)',
        },
      },
    },
  },
})

interface IButton {
  text: string
  linkTo: string
}

const Button = ({ text, linkTo }: IButton) => {
  return (
    <Link href={linkTo} passHref>
      <CustomButton variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
        {text}
      </CustomButton>
    </Link>
  )
}

export default Button
