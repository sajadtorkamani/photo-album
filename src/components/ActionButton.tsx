import classNames from 'classnames'
import { Button, ButtonProps } from './Button'

export const DevButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      className={classNames(
        'fixed right-0 bottom-0 border border-black py-1 px-2',
        props.className
      )}
    />
  )
}
