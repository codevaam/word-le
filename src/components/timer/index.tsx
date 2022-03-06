import React from "react";

type Props = {
    minutes: number
    seconds: number
}

const Timer = ({minutes, seconds}: Props) => {
    return (
          <div className='flex py-1.5 px-2 rounded-full bg-timerBtn'>
            <img src="/timer.png" className='mr-2' alt=".."/>
            <span className='text-blueberry font-bold'>
            { minutes === 0 && seconds === 0
              ? <h1>0:00</h1>
              : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
            }
            </span>
          </div>
    )
}

export default Timer;