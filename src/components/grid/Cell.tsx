import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'
import './styles.css';

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white',
    {
      'bg-white border-slate':
        !status,
      'border-black dark:border-slate': value && !status,
      'absent shadowed bg-blueberryLight2 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700':
        status === 'absent',
      'correct shadowed bg-blueberryLight2 text-white border-blueberryLight2':
        status === 'correct' && isHighContrast,
      'present shadowed bg-cyan text-white border-cyan':
        status === 'present' && isHighContrast,
      'correct shadowed bg-green text-white border-green':
        status === 'correct' && !isHighContrast,
      'present shadowed bg-blueberryLight text-white border-blueberryLight':
        status === 'present' && !isHighContrast,
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  const letterClasses = classnames(
    'letter-container',
    {'animation-wiggle 1s infinite' : status === 'correct'}
  )

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className={letterClasses} style={{ animationDelay }}>
        {value}
      </div>
    </div>
  )
}
