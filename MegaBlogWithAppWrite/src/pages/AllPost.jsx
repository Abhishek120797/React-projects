import React from 'react';
import { useState,useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

function AllPost() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{},[])

    appwriteService.getAllPost([])
    .then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
    .catch((error)=>{
        console.log("Appwrite service :: getAllPost :: error", error);
    })

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
            {posts.map((post)=>{
                return (<div key={post.$id} className='p-2 w-1/4'>
                    <PostCard post={post}/>
                </div>);
            })
            }
            </div>
            
        </Container>
    </div>
  );
}

export default AllPost;