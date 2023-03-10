import React, { useState, useEffect } from 'react'
import { styles } from '../sass'
import { fetchFromAPI } from '../api'
import { Card } from '../components'

const Feed = () => {
    const [books, setBooks] = useState([])

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
                    />
                ))}
            </div>
        </div>
    )
}

export default Feed