import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Container } from 'react-bootstrap'
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';


const Post = () => {
    const [posts, setPosts] = useState([]);
    const [totalRecord, setTotalRecord] = useState(30);
    const [pageNo, setPageNo] = useState(1);
    const [limit, setLimit] = useState(10);

    // it will get triggered on each re-rendering
    // useEffect(() => {
    //     console.log('form useEffect with no deps');
    // });

    useEffect(() => {
        // window.localStorage.setItem(`mounted`,true);

        return () => {
            console.log('unmounted');
            window.localStorage.setItem(`mounted`,false);
        }

    }, []);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageNo}`)
            .then(res => {
                setTotalRecord(res.headers['x-total-count']);
                setPosts(res.data);
                window.localStorage.setItem(`post-data-${limit}-${pageNo}`,JSON.stringify(res.data));
            }).catch(err => {
                console.log({ err });
            })
        return () => {
            console.log('unmounted1', limit, pageNo);
            window.localStorage.removeItem(`post-data-${limit}-${pageNo}`);

        }
    }, [limit, pageNo]);

    const paginationCick = (pageNo) => {
        setPageNo(pageNo);
    }

    return (
        <>
            <Container>
                <h3>Posts <span style={{ fontSize: '0.5em' }}>({`Total: ${totalRecord}, item: ${((pageNo - 1) * limit) + 1} - ${(totalRecord < pageNo * limit) ? totalRecord : (pageNo * limit)}`})</span></h3>
                {posts.map(post => {
                    return (
                        <div key={post.id} className="post border border-2 p-2 mb-2">
                            <h4 >{post.title}</h4>
                            <div className="">{post.body}</div>
                        </div>
                    );
                })}
                <Pagination
                    {...bootstrap5PaginationPreset}
                    current={pageNo}
                    total={Math.ceil(totalRecord / limit)}
                    onPageChange={paginationCick}
                />
            </Container>
        </>
    )
}

export default Post