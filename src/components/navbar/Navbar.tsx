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
  minutes : number
  seconds: number
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  minutes,
  seconds,
  showTimer
}: Props) => {
  
  return (
    <>
    <div className="navbar">
      <img className='banner_img absolute' src="./nav.svg" alt="banner" />
      <div className="navbar-content px-5">
        <div className="navbar-comp mt-2">
          <div className="right-icons">
            <ChartBarIcon
              className="h-6 w-6 mr-3 cursor-pointer text-white dark:stroke-white"
              onClick={() => setIsStatsModalOpen(true)}
            />
          </div>
          <p className="text-xl ml-2.5 font-bold dark:text-white">
            {GAME_TITLE}
          </p>
          <InformationCircleIcon
            className="h-6 w-6 mr-2 cursor-pointer text-white dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
        </div>
        <div className="title">
          <span>WORD-LE</span>
          <div className="tagline">
            Burn your brain cells while guessing the right word.{" "}
          </div>
        </div>
        
      </div>

    </div>
    <div>
    {showTimer && (
      <div className="flex justify-end pr-5 ml-5 timer mt-12 mb-2">
        <Timer minutes={minutes} seconds={seconds} />
      </div>
    )}
     </div>
     </>
  );
}
