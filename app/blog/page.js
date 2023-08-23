"use client"
import Link from "next/link";
import getAllPost, { getPosts } from "../lib/getAllPost"
import { useEffect, useState } from "react";


export default  function Blog(){
 
    const [posts , setPosts] = useState([]);
    useEffect(()=>{

            let data = getPosts().then((res)=>{
                setPosts(res)
            })


    },[])

    
    return(
        <div className="blogContent">
            <section>
                <h2>Blog posts</h2>
                <div className="mt-4">
                    {
                      posts?.map((post,index) =>
                        ( 
                           <Link key={index} href={`/blog/${post.id}`}>
                                                        
                              <p>{post.id} - {post.title }</p>  
                               
                           </Link>
                            
                                                      
                        )
                    )  
                    }
                </div>
            </section>
        </div>
    )
}