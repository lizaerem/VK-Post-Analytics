import React, {useState, useEffect} from 'react';

const PostList = () => {
    const [posts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/posts', {
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Posts data:', data);
                } else {
                    console.error('Error fetching posts:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Recent Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
