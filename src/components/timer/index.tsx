import React from "react";

type Props = {
    minutes: number
    seconds: number
    tries?: number
}

const Timer = ({minutes, seconds, tries}: Props) => {
    return (
          <div className='flex py-1.5 px-2 rounded-full bg-timerBtn'>
            {tries? <span className='text-blueberry font-bold'>{tries} {tries===1? "Try": "Tries"}</span>:
            <>
              <img src="/timer.png" className='mr-2' alt=".."/>
              <span className='text-blueberry font-bold'>
              { minutes === 0 && seconds === 0
                ? <h1>0:00</h1>
                : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
              }
              </span>
            </>
            }
          </div>
    )
}

export default Timer;