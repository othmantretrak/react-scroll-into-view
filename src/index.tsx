import React from 'react'
import { ScrollIntoViewProps } from '../react-scroll-into-view'

const ScrollInto = ({
  children,
  selector,
  smooth = true,
  style = {},
  alignToTop = false,
  className = '',
  onClick
}: ScrollIntoViewProps) => {
  const scrollIntoView = () => {
    const behavior = smooth ? 'smooth' : 'auto'
    const options: ScrollIntoViewOptions = { behavior }
    // Scroll to top
    if (alignToTop) {
      options.block = 'start'
      options.inline = 'nearest'
    }

    const el = document.querySelector(selector)
    el!.scrollIntoView(options)
  }

  /**
   * Click event handler
   * When provided (optional) `onClick` property which is a function it will call it and wait 16ms (single frame) to use
   * `scrollIntoView` as e.g. MaterialUI Menu changes `body` element style to `overflow: hidden` blocking
   * `scrollIntoView`
   */
  const handleClick = (event: React.SyntheticEvent): void => {
    if (typeof onClick === 'function') {
      onClick(event)
      setTimeout(scrollIntoView, 1e3 / 60)
    } else {
      scrollIntoView()
    }
  }

  return (
    <div style={style} className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

export default ScrollInto
