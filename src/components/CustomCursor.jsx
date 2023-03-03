import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const CustomCursor = () => {
  return (
    <AnimatedCursor
      color="255,255,255"
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.cursorClick'
      ]}
    />
  )
}

export default CustomCursor