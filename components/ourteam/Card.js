import React from 'react'

export const Card = ({setShowModal}) => {
    return (
        <>
            <div onClick={() => { setShowModal(true) }} className="bg-white rounded-2xl h-96 w-72 flex flex-col items-center cursor-pointer justify-center">

                <div onClick={() => { setShowModal(true) }} className="px-6 cursor-pointer h-40 w-40 bg-pink-100 rounded-full">

                </div>
                <br />
                <p onClick={() => { setShowModal(true) }} className=" bg-white cursor-pointer h-fit w-full text-center font-bold "> Team Name</p>

            </div>
        </>
    )
}
