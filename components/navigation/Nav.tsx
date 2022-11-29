import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { styled } from '../../stitches.config'
import BackIcon from './ BackIcon'

const NavContainerOuter = styled('div', {
  backgroundColor: '$blackBg',
  width: '100wv',
  variants: {
    variant: {
      mobile: {
        height: 89,
      },
      desktop: {
        height: 106,
      },
    },
  },
})

const NavContainerInner = styled('div', {
  backgroundColor: '$blackBg',
  maxWidth: '2560px',
  display: 'flex',
  alignSelf: 'center',
  alignItems: 'center',
  margin: 'auto',

  variants: {
    variant: {
      mobile: {
        paddingX: 0,
        justifyContent: 'center',
      },
      bp4: {
        paddingX: 30,
        justifyContent: 'space-between',
      },
      desktop: {
        paddingX: 80,
      },
    },
  },
})

const NavImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: 50,
  variants: {
    variant: {
      mobile: {
        height: 89,
      },
      desktop: {
        height: 106,
      },
    },
  },
})

const ImageBox = styled('div', {
  position: 'relative',
  variants: {
    variant: {
      mobile: {
        width: 160,
        height: 43,
      },
      desktop: {
        height: 57,
        width: 210,
      },
    },
  },
})

const NavText = styled('p', {
  fontSize: '$3',
  variants: {
    variant: {
      mobile: {
        display: 'none',
      },
      smallDesktop: {
        display: 'none',
      },
      desktop: {
        display: 'inline-block',
      },
    },
  },
})

const LinkContainer = styled('div', {
  variants: {
    variant: {
      mobile: {
        display: 'none',
      },
      desktop: {
        display: 'flex',
        columnGap: 50,
      },
    },
  },
})

const CustomLink = styled('a', {
  fontSize: '$3',
  textDecoration: 'none',
  color: '$white',

  '&:hover': {
    cursor: 'pointer',
    borderBottom: 'solid $whiteBg 2px',
  },

  variants: {
    active: {
      true: {
        borderBottom: 'solid $whiteBg 2px',
      },
      false: {
        borderBottom: 'solid transparent 2px',
      },
    },
  },
})

const MobileNavContainer = styled('div', {
  variants: {
    variant: {
      mobile: {
        position: 'fixed',
        top: 'calc(100vh - 100px)',
        height: 46,
        backgroundColor: '$greyBg',
        width: '100vw',
        zIndex: 9999999,
      },
      desktop: {
        display: 'none',
      },
    },
  },
})

const MobileLinkContainer = styled('div', {
  variants: {
    variant: {
      mobile: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        columnGap: 50,
      },
      desktop: {
        display: 'none',
      },
    },
  },
})

const MobileBack = styled('a', {
  variants: {
    variant: {
      mobile: {
        position: 'absolute',
        top: 14,
        left: 20,
      },
      desktop: {
        display: 'none',
      },
    },
  },
})

const HorizontalDivider = styled('div', {
  variants: {
    variant: {
      mobile: {
        height: 23,
        width: 1,
        backgroundColor: '$whiteBg',
      },
      desktop: {
        display: 'none',
      },
    },
  },
})

const MobNavImageContainer = styled('div', {
  backgroundColor: '$greyBg',
  marginTop: -1,
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 5,
  paddingBottom: 18,
})

const Nav = () => {
  const router = useRouter()
  const location = router.asPath
  const kurserActive =
    ['/kurser'].includes(location) || ['/kurs'].includes(location)
      ? 'true'
      : 'false'
  const forForetagActive = ['/for-foretag'].includes(location)
    ? 'true'
    : 'false'
  const kontaktActive = ['/kontakt'].includes(location) ? 'true' : 'false'
  const hittaHitActive = ['/hitta-hit'].includes(location) ? 'true' : 'false'

  return (
    <>
      <NavContainerOuter>
        <NavContainerInner
          variant={{
            '@initial': 'mobile',
            '@bp3': 'bp4',
            '@bp4': 'desktop',
          }}>
          <NavImageContainer
            variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            <Link href='/' passHref>
              <a>
                <ImageBox variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
                  <Image
                    priority
                    placeholder='empty'
                    src='/batteri.svg'
                    layout='fill'
                    //@ts-ignore
                    as='img/svg'
                    alt='Batteri logo'
                  />
                </ImageBox>
              </a>
            </Link>
            <NavText
              variant={{
                '@initial': 'mobile',
                '@bp3': 'smallDesktop',
                '@bp6': 'desktop',
              }}>
              Design, Kod &amp; Videoutbildning
            </NavText>
          </NavImageContainer>
          <LinkContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
            <Link href='/kurser' passHref>
              <CustomLink active={`${kurserActive}`}>Kurser</CustomLink>
            </Link>
            <Link href='/foretag' passHref>
              <CustomLink active={`${forForetagActive}`}>
                För Företag
              </CustomLink>
            </Link>
            <Link href='/hitta-hit' passHref>
              <CustomLink active={`${hittaHitActive}`}>Hitta Hit</CustomLink>
            </Link>
            <Link href='/kontakta-oss' passHref>
              <CustomLink active={`${kontaktActive}`}>Kontakt</CustomLink>
            </Link>
          </LinkContainer>
        </NavContainerInner>
      </NavContainerOuter>
      <MobileNavContainer
        variant={{
          '@initial': 'mobile',
          '@bp3': 'desktop',
        }}>
        <MobileLinkContainer
          variant={{
            '@initial': 'mobile',
            '@bp3': 'desktop',
          }}>
          <Link href='#' passHref>
            <MobileBack
              variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}
              onClick={() => router.back()}>
              <BackIcon />
            </MobileBack>
          </Link>
          <Link href='/kurser' passHref>
            <CustomLink active={`${kurserActive}`}>Kurser</CustomLink>
          </Link>
          <HorizontalDivider
            variant={{
              '@initial': 'mobile',
              '@bp3': 'desktop',
            }}
          />
          <Link href='/' passHref>
            <CustomLink active={`${forForetagActive}`}>För företag</CustomLink>
          </Link>
        </MobileLinkContainer>
        <MobNavImageContainer>
          <Link href='/' passHref>
            <a>
              <Image
                priority
                src='/batteri.svg'
                alt='batteri logo'
                height={33}
                width={120}
              />
            </a>
          </Link>
        </MobNavImageContainer>
      </MobileNavContainer>
    </>
  )
}

export default Nav
