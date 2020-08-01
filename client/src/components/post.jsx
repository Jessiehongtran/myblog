import React from 'react';
import { posts } from '../data/posts';


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
            <div>
                <div>
                    <img src={post.image}/>
                </div>
                <div className="text">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    
                </div>
            </div>
        )
    }
}