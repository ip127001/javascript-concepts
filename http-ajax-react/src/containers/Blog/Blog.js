import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        console.log('[Blog.js] componentDidMount')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const updatedPosts = response.data.slice(0, 4).map(post => {
                return {
                    ...post,
                    author: 'Rohit'
                }
            });
            this.setState({posts: updatedPosts})
            //console.log(response);
        })

    }

    render () {
        console.log('[blog.js] render')
        const posts = this.state.posts.map((post) => {
            return <Post key={post.id} author={post.author} title={post.title} />;
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;