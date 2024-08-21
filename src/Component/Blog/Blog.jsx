import React from 'react';
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, hendlBook, heandletime }) => {
    const { cover, title, author, author_img, posted_date, reading_time, hashtags } = blog
    return (
        <div>
            <img className='rounded-xl w-80' src={cover} alt="" />
            <div className='flex items-center justify-between'>
                <div className='flex gap-3'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h1 className='font-bold text-2xl'>{author}</h1>
                        <h3 className='text-gray-400'>{posted_date} (4 days ago)</h3>
                    </div>
                </div>

                <div className='text-gray-400'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>hendlBook(blog)}><FaBookmark /></button>
                </div>
            </div>
            {
                hashtags.map((copyHash, idx) => <a className='ml-2' key={idx}>{copyHash}</a>)
            }
            <h1 className='text-4xl font-bold'>{title}</h1>
            <button onClick={() => heandletime(reading_time)}>as read</button>
        </div>
    );
};

export default Blog;