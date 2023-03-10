import React from 'react'
import { styles } from '../sass'
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {
    return (
        <div className={`${styles.paddingX} py-6 shadow-navbar`}>
            <div className={`${styles.innerWidth} mx-auto flex justify-between items-center`}>
                <h2 className='font-extrabold text-[24px] text-secondary uppercase'>
                    FPT BOOK
                </h2>

                <div className='flex bg-white p-2 rounded-[10px]'>
                    <input 
                        type='text'
                        placeholder='Search...'
                        className='sm:w-[300px] w-[150px] text-secondary placeholder:text-secondary border-none outline-none'
                    />

                    <button
                        type='button'
                        className='text-[24px] text-secondary cursor-pointer'
                    >
                        <FiSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar