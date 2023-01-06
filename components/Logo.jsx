import React from 'react'

const Logo = () => {
    return (
        <div className="opacity-0 animate-[logo_4s_1_1s_linear_forwards] z-[15] my-auto w-fit">
            <div className="logo-wrapper bg-white p-1 flex item-center text-[1.53em] font-bold tracking-widest h-[50px] gap-1 ">
                <div className="bg-[#153c37]">
                    <img src="https://i.ibb.co/YRmWqPB/cosmo-logo-1.png" alt="" className="w-full h-full" />
                </div>
                <h1 className="text-black my-auto">COSMOPOLITAN</h1>
            </div>
            <h3 className="tracking-[0.3rem] text-[13px] font-[600] text-white mt-[0.1rem] text-center">THE MULTI ETHNIC FEST</h3>
        </div>
    )
}

export default Logo