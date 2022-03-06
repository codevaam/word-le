import {
  ChartBarIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { GAME_TITLE } from '../../constants/strings'
import Timer from '../timer'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  showTimer: boolean
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  showTimer
}: Props) => {
  const {initialMinute = 0,initialSeconds = 0} = {initialMinute: 5, initialSeconds: 0};
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

  
  return (
    <div className="navbar mb-10">
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <p className="text-xl ml-2.5 font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
      {showTimer && (
        <div className='flex justify-end pr-5 mt-5'>
          <Timer minutes={minutes} seconds={seconds} />
        </div>
      )}
    </div>
  )
}
