import React from 'react';

const ContactPage = () => {
    const pageName = 'Contact App Area';
    return (
        <>
            <span className='font-bold text-4xl'>{pageName}</span>
            <div className='border-dashed border border-zinc-500 w-full h-12 rounded-lg'></div>
            <div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'></div>
        </>
    );
};

export default ContactPage;