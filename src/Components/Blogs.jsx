import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../Context/AppContext";



const Blogs = () => {
    const { loading, posts } = useContext(AppContext)

    return (
        <div className="max-w-[820px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]">
            {
                loading ? (<Spinner />) : (posts.length === 0 ? (<div>
                    <p>No Post Found</p>
                </div>) :
                    (posts.map((post) => (
                        <div key={post.id}>
                            <p className="font-bold text-lg">{post.title}</p>
                            <p className="text-[13px]">
                                By <span className="italic">{post.author}</span>
                                on <span className="font-bold underline">{post.category}</span>
                            </p>
                            <p className="text-[12px]">Posted on {post.date}</p>
                            <p className="mt-2">{post.content}</p>
                            <div>
                                {post.tags.map((tag, index) => (
                                    <span className="text-blue-500 underline font-bold " key={index}>{`#${tag}`}</span>
                                ))}
                            </div>
                        </div>
                    )))
                )
            }
        </div>
    );
};

export default Blogs;
