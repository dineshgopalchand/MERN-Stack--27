import axios from 'axios';
import { useCallback, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [responseHeader, setResponseHeader] = useState(null);

    const doFetch = useCallback((option = {}) => {
        if (!url) return;
        const source = axios.CancelToken.source();
        const config = {
            method: 'get',
            url,
            cancelToken: source.token,
            ...option
        }
        setLoading('loading...')
        setData(null);
        setError(null);
        setResponseHeader(null);

        axios(config)
            .then(res => {
                setLoading(false);
                setResponseHeader(res.headers);
                setData(res.data);
            })
            .catch(err => {
                setLoading(false)
                setError('An error occurred. Awkward..')
            })
        return () => {
            source.cancel();
        }
    }, [url]);
    return [{ data, loading, error, header: responseHeader }, doFetch];
}

export default useFetch;