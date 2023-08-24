"use client"

import { useEffect, useState } from 'react';
import { getPosts } from './lib/getAllPost';


export default function Home() {
    const [posts , setPosts] = useState([]);
    useEffect(()=>{

            let data = getPosts().then((res)=>{
                setPosts(res)
            })


    },[])


  return (
    <>
            <div className="row">
                <p>test section one</p>
            </div>
            <div className="row">
                <p>test section two</p>
            </div>
        <div className="row">
            <b className="text-center">Blog List</b>
                {
                    posts?.map((item,index)=>{
                        return(
                            <div key={index} className="card cardPadding col-md-4">
                                
                                <figure><img className="imgWidth"  src={item['img']} /></figure> 
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p>{item['short']}</p>
                                </div> 
                                                       
                            </div> 
                        )
                    }) 
                }
            </div> 

            
    </>
        
  );
}
