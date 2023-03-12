import React, { useState, useEffect } from 'react'
import { styles } from '../sass'
import { fetchFromAPI } from '../api'
import { Card, Modal } from '../components'

const Feed = () => {
    const [books, setBooks] = useState([])
    const [active, setActive] = useState(false)
    const [bookDetail, setBookDetail] = useState()

    useEffect(() => {
        setBooks([])

        fetchFromAPI(`volumes?q=flowers&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
            .then((data) => setBooks(data.items))
    }, [])
    
    return (
        <div className={`${styles.paddingY} w-3/5 mx-auto`}>
            <div className={`${styles.innerWidth} mx-auto flex flex-wrap justify-center gap-5`}>
                {books.map((book) => (
                    <Card 
                        key={book.id}
                        book={book}
                        setActive={setActive}
                        setBookDetail={setBookDetail}
                    />
                ))}

                <Modal book={bookDetail} active={active} handleClose={() => setActive(false)} />
            </div>
        </div>
    )
}

export default Feed