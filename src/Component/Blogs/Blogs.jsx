import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({hendlBook,heandletime}) => {
    const [Blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('cafe.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <h2>Blog</h2>
            {
                Blogs.map((blogCopy, idx) => <Blog
                    key={idx}
                    blog={blogCopy}
                    hendlBook={hendlBook}
                    heandletime={heandletime}
                ></Blog>)
            }

        </div>
    );
};

export default Blogs;