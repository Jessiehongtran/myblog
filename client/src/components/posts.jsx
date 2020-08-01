import React from 'react';
import { posts } from '../data/posts';
import Post from './post';
import { Link } from 'react-router-dom';
import '../styles/posts.scss'

export default class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: posts
        }
    }

    render(){
        return (
            <div className="posts-container">
                <div className="posts">
                    {this.state.posts.map(post => 
                    <div className="each-post">
                        <div className="image">
                            <img src={post.image}/>
                        </div>
                        <div className="text">
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            <Link to={`/post/${post.id}`}>Read more ...</Link>
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}