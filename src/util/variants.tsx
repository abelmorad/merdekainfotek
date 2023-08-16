import { Variants } from 'framer-motion'

export const fadeIn = (direction: string, delay: number): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
  }
}

export const slideIn = (direction: string, delay: number): Variants => {
  const x = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0

  return {
    hidden: {
      x,
      y: 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: 'tween',
        delay,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
  }
}
