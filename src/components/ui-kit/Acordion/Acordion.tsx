import { FC, useState } from 'react'
import classNames from 'classnames'
import styles from './Acordion.module.scss'

export interface IAcordionProps {
  className?: string
  title?: string
  isActive?: false
  children?: React.ReactNode
}

export const Acordion: FC<IAcordionProps> = ({title = "", isActive = false, children, className}) => {   
  const [isOpen, setIsOpen] = useState(isActive)


  return (
    <div className={classNames("Acordion", className, {"Acordion__active": isOpen})}>
      <div className={styles.Acordion_header}>
        <div className={styles.Acordion_headerTitle}>{title}</div>
        <div className={styles.Acordion_contentDown}>
          {isOpen && <div className={styles.Acordion_content}>{children}</div>}
        </div>
      </div>
    </div>
  )
}
