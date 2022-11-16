import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GrRefresh } from 'react-icons/gr';
import useFetch from '../../../hooks/customHook/useFetch';

const SpecialQuote = () => {
    const [updateCount, setUpdateCount] = useState(1);
    const [{ data: quote, loading, error }, fetchQuote] = useFetch('https://api.quotable.io/random');



    useEffect(() => {
        const quoteInterval = setInterval(() => {
            fetchQuote();
            console.log('fetch quote');
        }, 5000);
        return () => clearInterval(quoteInterval);
    }, []);
    // const fetchQuote = () => {
    //     console.log('fetch quote');
    //     setUpdateCount(prev => prev + 1);
    // }


    return (
        <div>
            {/* <GrRefresh onClick={fetchQuote} /> */}
            {loading && <p>{loading}</p>}
            {
                quote && (
                    <div>
                        <blockquote>"{quote.content}"</blockquote>
                        <p style={{ textAlign: 'right' }}>
                            {quote.author}
                        </p>
                    </div>
                )
            }
            {error && <p>{error}</p>}
        </div>
    )
}

export default SpecialQuote