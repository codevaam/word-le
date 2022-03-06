import {
  ChartBarIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
        <div className="navbar-comp">
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
  );
}
