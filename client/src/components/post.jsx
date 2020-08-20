import React from 'react';
import { posts } from '../data/posts';
import '../styles/post.scss'

export default class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: posts,
            
        }
    }

    render(){
        let post = {}

        console.log('props', this.props.props.match.params.postId)
        
        for (let i=0; i< this.state.posts.length; i++){
            if (i + 1 == this.props.props.match.params.postId){
                post = this.state.posts[i]
            }
        }

        console.log(post)
        
        return (
            <div className="post-container">
                <div className="post">
                    <div className="text">
                        <h2>{post.title}</h2>
                        <p className="date">{post.created_at}</p>
                        <p>{post.content}</p>
                    </div>
                    <div className="image">
                        <img src={post.image_url}/>
                    </div>
                </div>
            </div>
        )
    }
}