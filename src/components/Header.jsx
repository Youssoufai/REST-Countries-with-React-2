import React from 'react'

const Header = () => {
    return (
        <header
            className='flex justify-between px-12 py-5 bg-DarkModeElements'
        >
            <h1 className='text-DarkModeText text-2xl'>Where in the world?</h1>
            <div
                className='flex items-center space-x-4'
            >
                <input type="range"
                    id=""
                    min={1}
                    max={2}
                    className='w-14 appearance-none bg-DarkModeBackground rounded-xl px-1 py-1'
                />
                <span className='text-DarkModeText text-lg'>Dark Mode</span>
            </div>
        </header>
    )
}

export default Header