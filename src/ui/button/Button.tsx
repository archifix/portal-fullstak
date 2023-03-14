import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import style from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IButton>> = ({children, ...rest}) => {
  return (
    <button className={style.button} {...rest}>{children}</button>
  )
}

export default Button 