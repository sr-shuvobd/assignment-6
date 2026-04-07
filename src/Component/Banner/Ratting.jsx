import React from 'react';

const Ratting = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center p-7 md:p-12 text-white gap-5 md:gap-20 text-center text-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-15'>
            <div>
                <h1 className='text-5xl font-bold'>50K+</h1>
                <p>Active Users</p>
            </div>
            <div className="divider divider-horizontal bg-b"/>
            <div>
                <h1 className='text-5xl font-bold'>200K+</h1>
                <p>Premium Tools</p>
            </div>
            <div className="divider divider-horizontal bg-b"/>
            <div>
                <h1 className='text-5xl font-bold'>4.9</h1>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default Ratting;