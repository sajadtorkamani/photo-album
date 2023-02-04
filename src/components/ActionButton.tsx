import classNames from 'classnames'
import { Button, ButtonProps } from './Button'

type Props = ButtonProps & {
  onClick: () => void
}

export const DevButton: React.FC<Props> = ({
  className,
  onClick,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={classNames(
        'fixed right-0 bottom-0 border border-black py-1 px-2 hover:cursor-pointer',
        className
      )}
      onClick={onClick}
    />
  )
}
