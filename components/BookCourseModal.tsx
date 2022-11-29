import React from 'react'
import { styled, overlayShow, contentShow } from '../stitches.config'
import { Cross2Icon } from '@radix-ui/react-icons'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Select } from './Select'

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '#00000099',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
})

const StyledContent = styled(DialogPrimitive.Content, {
  position: 'fixed',
  backgroundColor: '$white',
  borderRadius: 3,
  inset: 1,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '800px',
  height: 'fit-content',
  maxHeight: '85vh',
  overflowY: 'auto',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
})

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  )
}

const StyledTitle = styled(DialogPrimitive.Title, {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  paddingY: 26,
  fontWeight: '$semi',
  backgroundColor: '$blackBg',
  borderRadius: '2px 2px 0px 0px',
  border: 'none',
})

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: '$white',
  width: 25,
  height: 25,
  borderRadius: '100%',
  boxShadow: `0 0 0 1px #707070`,
  '&:hover': { boxShadow: `0 0 0 2px #707070` },
  '&:focus': { boxShadow: `0 0 0 2px #707070` },
})
const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: '$blueLink',
  },
})

// Exports
export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogContent = Content
export const DialogTitle = StyledTitle
export const DialogClose = DialogPrimitive.Close
export const RadioGroup = RadioGroupPrimitive.Root
export const RadioGroupRadio = StyledRadio
export const RadioGroupIndicator = StyledIndicator

// Your app...

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: '$greyBg' },
  '&:focus': { boxShadow: `0 0 0 2px #ff0000aa` },
})

const Form = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
  marginY: 25,
})

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  maxWidth: 520,
})

const Label = styled('label', {
  fontSize: 15,
  color: '$blue',
  width: 'fit-content',
  textAlign: 'right',
})

const Input = styled('input', {
  all: 'unset',
  width: '96%',
  flex: '1',
  borderRadius: 3,
  padding: '5px 10px',
  fontSize: '$3',
  lineHeight: 1,
  color: '$greyBg',
  boxShadow: `0 0 0 1px grey`,
  height: 42,

  '&:focus': { boxShadow: '0 0 0 2px grey' },
})

const RadioGroupContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 50,
  marginY: 6,
})
const RadioItemContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 50,
  rowGap: 10,
})

const RadioItem = styled('div', {
  display: 'flex',
  columnGap: 10,
})

const TextArea = styled('textarea', {
  all: 'unset',
  width: '96%',
  flex: '1',
  borderRadius: 3,
  padding: '5px 10px',
  fontSize: '$3',
  lineHeight: 1,
  color: '$greyBg',
  boxShadow: `0 0 0 1px grey`,
  height: 42,

  '&:focus': { boxShadow: '0 0 0 2px grey' },
})

const ButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 25,

  variants: {
    variant: {
      mobile: {
        marginBottom: 70,
      },

      desktop: {
        marginBottom: 25,
      },
    },
  },
})

const Button = styled('button', {
  display: 'flex',
  width: 'fit-content',
  backgroundColor: '$blueDark',
  pillShape: true,
  fontSize: '$4',
  fontWeight: '$semi',
  textDecoration: 'none',
  border: 'none',
  color: '#fff',
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

interface IBookCourseProps {
  btnText: string
  courseName: string
  courseDates: string[]
}

const BookCourseModal = ({
  btnText,
  courseName,
  courseDates,
}: IBookCourseProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          {btnText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          Boka kurs - <br></br> {courseName}
        </DialogTitle>
        <Form>
          <Fieldset>
            <Label htmlFor='occasion'>Tillfälle:*</Label>
            {/* <Input id='occasion' placeholder='Tillfälle' /> */}
            <Select courseDates={courseDates} />
          </Fieldset>
          <Fieldset>
            <Label htmlFor='name'>För- och Efternamn:*</Label>
            <Input id='name' placeholder='Förnamn Efternamn' />
          </Fieldset>
          <Fieldset>
            <Label htmlFor='email'>Email:*</Label>
            <Input id='email' placeholder='din@email.com' />
          </Fieldset>
          <Fieldset>
            <Label htmlFor='address'>Adress:*</Label>
            <Input id='address' placeholder='Din adress' />
          </Fieldset>
          <Fieldset>
            <Label htmlFor='phone'>Telefon:*</Label>
            <Input id='phone' placeholder='031 711 25 40' />
          </Fieldset>
          <Fieldset>
            <Label htmlFor='company'>Företag:</Label>
            <Input id='company' placeholder='Företagest namn' />
          </Fieldset>
          <Fieldset>
            <Label htmlFor='billing'>Ev. Fakturaadress:</Label>
            <Input id='billing' placeholder='Ev. Fakturaadress' />
          </Fieldset>
          <Fieldset>
            <RadioGroup
              id='sort'
              defaultValue='normal'
              aria-label='Typ av kurs'
            >
              <RadioGroupContainer>
                <Label htmlFor='sort' css={{ marginBottom: '6px' }}>
                  Typ av kurs:
                </Label>
                <RadioItemContainer>
                  <RadioItem>
                    <RadioGroupRadio value='normal' id='r1'>
                      <RadioGroupIndicator />
                    </RadioGroupRadio>
                    <Label htmlFor='r1'>Normal</Label>
                  </RadioItem>
                  <RadioItem>
                    <RadioGroupRadio value='privat' id='r2'>
                      <RadioGroupIndicator />
                    </RadioGroupRadio>
                    <Label htmlFor='r2'>Privat</Label>
                  </RadioItem>
                </RadioItemContainer>
              </RadioGroupContainer>
            </RadioGroup>
          </Fieldset>
          <Fieldset>
            <Label htmlFor='message'>Ev. Meddelande:</Label>
            <TextArea id='message' placeholder='Ditt meddelande' />
          </Fieldset>
        </Form>
        <ButtonContainer variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
          <DialogClose asChild>
            <Button variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}>
              Boka
            </Button>
          </DialogClose>
        </ButtonContainer>
        <DialogClose asChild>
          <IconButton aria-label='Close'>
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default BookCourseModal
