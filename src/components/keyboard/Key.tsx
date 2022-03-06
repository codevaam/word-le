import { ReactNode } from 'react'
import classnames from 'classnames'
import { CharStatus } from '../../lib/statuses'
import { MAX_WORD_LENGTH, REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  children?: ReactNode
  value: string
  width?: number
  status?: CharStatus
  onClick: (value: string) => void
  isRevealing?: boolean
}

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS * MAX_WORD_LENGTH
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white',
    {
      'transition ease-in-out': isRevealing,
      'border-2 border-slate dark:bg-slate-600 active:bg-slate': !status,
      'bg-blueberryLight2 dark:bg-slate-800 text-white': status === 'absent',
      'bg-blueberryLight active:bg-cyan-700 text-white': status === 'present',
      'bg-green active:bg-green-700 text-white': status === 'correct',
    }
  )

  const styles = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : 'unset',
    width: `${width}px`,
    height: '58px',
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement>= (event) => {
    onClick(value)
    event.currentTarget.blur()
  }
  return (
    <button id={value} style={styles} className={classes} onClick={handleClick} >
      {children || value}
    </button>
  )
}
