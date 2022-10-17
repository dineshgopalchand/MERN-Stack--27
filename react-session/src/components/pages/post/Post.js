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
    const [paginationList, setPaginationList] = useState([1, 2, 3]);

    // it will get triggered on each re-rendering
    useEffect(() => {
        console.log('form useEffect with no deps');
    });

    useEffect(() => {
        // console.log('form useEffect with empty array as deps');
        // axios.get(`http://localhost:3030/posts`)
        //     .then(res => {
        //         console.log(res.data);
        //         setPosts(res.data);
        //     }).catch(err => {
        //         console.log({ err });
        //     }).finally(() => {
        //         console.log('finally get called');
        //     });

    }, []);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageNo}`)
        // axios.get(`http://localhost:3030/posts?_limit=${limit}&_page=${pageNo}`)
            .then(res => {
                setTotalRecord(res.headers['x-total-count']);
                setPosts(res.data);
            }).catch(err => {
                console.log({ err });
            }).finally(() => {
                console.log('finally get called');
            });
    }, [limit, pageNo]);

    const paginationCick = (pageNo) => {
        setPageNo(pageNo);
    }

    return (
        <>
            <Container>
                <h3>Posts ({`${posts.length}`})</h3>
                {posts.map(post => {
                    return (
                        <div key={post.id} className="post border border-2 p-2 mb-2">
                            <h4 >{posts[0].title}</h4>
                            <div className="">{posts[0].body}</div>
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