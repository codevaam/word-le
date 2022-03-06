import React from "react";
import Timer from "../timer";

const Score = () => {
    return (
        <div className="m-8">
        <div className="bg-lightGrey p-5 rounded-lg lg:w-1/4 mx-auto">
            <div className="flex items-center justify-between">
                <span className="text-2xl text-blueberry">Score</span>
                <Timer minutes={2} seconds={10}/>
            </div>

            <div className="flex items-start justify-between mt-3">
                <div className="w-3/4">
                    <div className="text-blueberryLight text-xl">YAY!</div>
                    <div className="text-green">I knew you had this, you have a knack for it. Wanna compete with others</div>
                </div>
                <Timer minutes={2} seconds={10} />
            </div>

            <div className="flex items-center justify-between mt-5">
                <span className="text-blueberryLight text-sm w-3/4">
                    Share your score and compete with others
                </span>
                <button className='rounded-full bg-blueberry text-white px-8 py-2'>Share</button>
            </div>
        </div>
        </div>
    )
}

export default Score;