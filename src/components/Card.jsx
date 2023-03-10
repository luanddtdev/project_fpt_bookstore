import React from 'react'

const Card = ({ book }) => {
    return (
        <div className='bg-secondary w-[150px] p-2 rounded-[10px] shadow-card hover:bg-[rgba(255,255,255,0.8)] hover:scale-90 flex flex-col justify-between'>
            <img 
                src={book?.volumeInfo?.imageLinks?.thumbnail}
                alt={book?.volumeInfo?.title}
                className='w-full h-[200px] rounded-[10px]'
            />

            <h4 className='font-bold text-[16px] text-black hover:text-secondary text-center'>
                {book?.volumeInfo?.title.slice(0, 24)}
            </h4>

            <div className='bg-primary rounded-[5px] mt-4'>
                <h4 className='font-bold text-[16px] text-secondary text-center uppercase'>
                    {book?.saleInfo?.listPrice?.amount || 0}{' '}
                    {book?.saleInfo?.listPrice?.currencyCode || 'VND'}
                </h4>
            </div>
        </div>
    )
}

export default Card