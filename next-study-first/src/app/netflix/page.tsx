import React from 'react';

const NetflixPage = () => {
    const pageName = 'Netflix App';
    return (
        <>
            <span className='font-bold text-4xl'>{pageName}</span>
            <div className='border-dashed border border-zinc-500 w-full h-12 rounded-lg'></div>
            <div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
        </>
    );
};

export default NetflixPage;