import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'
import classnames from 'classnames'

type Props = {
  guess: string
  className: string,
  isGameWon: boolean
}

export const CurrentRow = ({ guess, className, isGameWon }: Props) => {
  const splitGuess = unicodeSplit(guess)
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH - splitGuess.length))
  const classes = classnames(`flex justify-center mb-1 ${className}`)

  return (
    <div className={classes}>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
