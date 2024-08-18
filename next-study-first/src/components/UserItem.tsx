import React from 'react';

const UserItem = () => {
    return (
        <div className='flex justify-center items-between gap-2 border rounded-[8px] p-2 '>
            <div className='avatar rounded-full min-h-10 min-w-10 bg-emerald-500 font-[700]
                flex items-center justify-center
            '>
                <p>GD</p>
            </div>
            <div className='grow'>
                <p className='text-[16px] font-bold'>Jacob CHUNG</p>
                <p className='text-[12px] text-neutral-500'>miniu.media@gmail.com</p>
            </div>
            
        </div>
    );
};

export default UserItem;
