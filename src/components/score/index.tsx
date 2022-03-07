import React from "react";
import { RiMedalLine } from "react-icons/ri";
import Timer from "../timer";
interface IProps {
    minutes : number,
    seconds: number,
    tries?: number,
    setToggleLogin : React.Dispatch<React.SetStateAction<boolean>>
}


const awardMap = [
    "",
   "Gold",
   "Gold",
   "Silver",
   "Bronze",
   "Come Tomorrow",
   "Come Tomorrow",
]
const Score = ({minutes, seconds, tries, setToggleLogin}: IProps) => {
    const idx = tries || 6 ;
    const onshare = () => {
        setToggleLogin(true);
        if (navigator.share) {
        navigator.share({
        title: 'Bajaj Finserv Health - Doctors',
        text: 'Link to our desktop practice management system!',
        url: 'https://doctors.bajajfinservhealth.in/',
        });
        }
        };
    return (
        <div className="m-8 mx-4">
        <div className="bg-lightGrey p-5 rounded-lg lg:w-1/4 mx-auto">
            <div className="flex items-center justify-between">
                <div  className="flex items-center">
                <h2 className="text-3xl text-blueberry">Score</h2>
                <div className={`flex items-center text-orange ml-2`}>
                        <RiMedalLine size="1.5rem"/> <div className="ml-1">{awardMap[idx]}</div>
                </div>
                </div>
                
                <Timer minutes={minutes} seconds={seconds}/>
            </div>

            <div className="flex items-start justify-between mt-3">
                <div className="w-3/4">
                    <div className="text-blueberry text-xl">YAY!</div>
                    <div className="text-green text-sm">I knew you had this, you have a knack for it. Wanna compete with others</div>
                </div>
                <Timer minutes={0} seconds={0} tries={tries} />
            </div>

            <div className="flex items-center justify-between mt-5">
                <span className="text-blueberry text-sm w-3/4">
                    Share your score and compete with others
                </span>
                <button className='rounded-full bg-blueberry text-white px-8 py-2' onClick={() => onshare()}>Share</button>
            </div>
        </div>
        </div>
    )
}

export default Score;