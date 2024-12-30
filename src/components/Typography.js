import React from 'react'

export const HeroTitle = ({ children, className = '', ...props }) => (
  <h1 
    className={`font-playfair text-5xl md:text-6xl font-bold leading-tight tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h1>
)

export const SectionTitle = ({ children, className = '', ...props }) => (
  <h2 
    className={`font-playfair text-3xl md:text-4xl font-bold leading-tight tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h2>
)

export const SubsectionTitle = ({ children, className = '', ...props }) => (
  <h3 
    className={`font-playfair text-2xl md:text-3xl font-bold leading-snug tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
)

export const BodyLarge = ({ children, className = '', ...props }) => (
  <p 
    className={`font-inter text-xl leading-relaxed ${className}`}
    {...props}
  >
    {children}
  </p>
)

export const BodyText = ({ children, className = '', ...props }) => (
  <p 
    className={`font-inter text-lg leading-relaxed ${className}`}
    {...props}
  >
    {children}
  </p>
)

export const BodySmall = ({ children, className = '', ...props }) => (
  <p 
    className={`font-inter text-base leading-relaxed ${className}`}
    {...props}
  >
    {children}
  </p>
)
