import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import classnames from 'classnames'
import { unicodeSplit } from '../../lib/words'

type Props = {
  guess: string
  isRevealing?: boolean,
  isGameWon: boolean,
  isLast:boolean,
  index:number,
  len:number
}

export const CompletedRow = ({ guess, isRevealing, isGameWon, isLast, index, len }: Props) => {
  const statuses = getGuessStatuses(guess)
  const splitGuess = unicodeSplit(guess)
  const condition=isLast && isGameWon
  const animateRow = classnames(
    "flex justify-center mb-1", {
      // "animate-vanish" :isGameWon && !isLast
    })
  return (
    <div className={animateRow} style={{
        animationDelay:isLast?'':`${700*(len-index)}ms`,
        transition:'all 1s',
        transform:condition?'translateY(-100px)':""
      }}>
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  )
}
