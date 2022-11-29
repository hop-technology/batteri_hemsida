import React, { useEffect } from 'react'
import { styled } from '../stitches.config'

const MapDiv = styled('div', {
  
  variants: {
    variant: {
      mobile: {
        square: 300,
      },
      desktop: {
        square: 450,
      },
    },
  },
})

interface IMapProps {
  center: {
    lat: number
    lng: number
  }
  zoom: number
}

const Map = ({ center, zoom }: IMapProps) => {
  // Initialize and add the map
  const initMap = () => {

    // The map, centered at center prop
     //@ts-ignore
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom,
      center,
    })
    // The marker, positioned at center prop
     //@ts-ignore
    const marker = new google.maps.Marker({
      position: center,
      map,
    })
  }

  useEffect(() => {
    initMap()
  })

  return <MapDiv id='map' variant={{ '@initial': 'mobile', '@bp3': 'desktop' }}></MapDiv>
}

export default Map
