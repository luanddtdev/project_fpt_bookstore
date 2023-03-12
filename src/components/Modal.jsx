import React from 'react'
import { styles } from '../sass'
import { AiFillCloseCircle } from 'react-icons/ai'

const Modal = ({ book, active, handleClose }) => {
    if (!active) return null

    return (
        <div className={`${styles.flexCenter} fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2))]`}>
            <div className='bg-white w-1/2 h-[500px] p-5 relative flex flex-col gap-5'>
                <button
                    type='button'
                    className='absolute text-[24px] top-5 right-5'
                    onClick={handleClose}
                >
                    <AiFillCloseCircle />
                </button>

                <div className='flex gap-5'>
                    <img 
                        src={book?.volumeInfo?.imageLinks?.thumbnail}
                        alt={book?.volumeInfo?.title}
                        className='w-[150px] h-[200px]'
                    />

                    <div className='flex flex-col'>
                        <h1 className='font-bold text-[20px] text-black'>
                            {book?.volumeInfo?.title}
                        </h1>

                        <h3 className='font-normal text-[18px] text-green-500 capitalize'>
                            {book?.volumeInfo?.authors}
                        </h3>

                        <h4 className='font-normal text-[18px] text-blue-600 uppercase'>
                            {book?.volumeInfo?.publishedDate}
                        </h4>

                        <a href={book?.volumeInfo?.previewLink}>
                            <button
                                type='button'
                                className='bg-[#24a0ed] px-10 py-2 rounded-[5px] font-bold text-[16px] text-white mt-5 outline-none border-none'
                            >
                                More
                            </button>
                        </a>
                    </div>
                </div>

                <h4 className='font-normal text-[16px] text-black overflow-hidden'>
                    {book?.volumeInfo?.description}
                </h4>
            </div>
        </div>
    )
}

export default Modal