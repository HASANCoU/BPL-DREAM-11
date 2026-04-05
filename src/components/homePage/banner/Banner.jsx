import React from 'react';
import bannerImg from "../../../assets/banner-main.png";

const Banner = () => {
    return (
        <div className='bg-linear-to-r from-blue-500 via-black to-red-400 min-h-[60vh] flex flex-col mx-auto space-y-6 pt-6'>

            <img className='self-center w-40 md:w-60 lg:w-auto' src={bannerImg} alt="Banner Image" />

            <h2 className='font-bold text-4xl text-white text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h2>

            <h4 className='font-bold text-white text-xl text-center'>Beyond Boundaries Beyond Limits</h4>
            <div className='flex justify-center rounded-2xl p-1 border-[#E7FE29] border w-40 mx-auto'>
                <button className="w-fit px-2 btn btn-active rounded-xl bg-[#E7FE29]">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;