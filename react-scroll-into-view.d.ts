export interface ScrollIntoViewProps {
  selector: string
  children: JSX.Element[] | JSX.Element | string
  smooth?: boolean
  style?: object
  alignToTop?: boolean
  className?: string
  onClick?: Function
}

const ScrollIntoView: React.FunctionComponent<ScrollIntoViewProps> = (
  props
) => {}

export default ScrollIntoView
