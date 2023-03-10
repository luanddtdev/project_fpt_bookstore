import axios from 'axios'

const BASE_URL = 'https://www.googleapis.com/books/v1'

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`)

    return data
}

// https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=yourAPIKey