import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Container } from 'react-bootstrap'


const Post = () => {
    const [posts, setPosts] = useState([]);

    // it will get triggered on each re-rendering
    useEffect(() => {
        console.log('form useEffect with no deps');
    });

    useEffect(() => {
        console.log('form useEffect with empty array as deps');
        axios.get('http://localhost:3030/posts')
        .then(res=>{
            console.log(res.data);
            setPosts(res.data);
        }).catch(err=>{
            console.log({err});
        }).finally(()=>{
            console.log('finally get called');
        })
        // fetch('http://localhost:3030/posts')
        //     .then(res => res.json())
        //     .then(val => {
        //         console.log(val);
        //         setPosts(val);
        //     });

    }, []);

    useEffect(() => {
        console.log('form useEffect with post  as deps');
    }, [posts]);

    // console.log('from outer');



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

            </Container>
        </>
    )
}

export default Post