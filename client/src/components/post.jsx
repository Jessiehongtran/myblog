import React from 'react';
import '../styles/post.scss';
import Axios from 'axios';
import { API_URL } from '../config'

export default class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post: {}
            
        }
    }

    componentDidMount(){
        const postId = this.props.props.match.params.postId
        Axios.get(`${ API_URL }/posts/${postId}`)
             .then(res => {
                this.setState({post: res.data})
             })
             .catch(err => {
                 console.log(err)
             })
    }

    render(){

        const {post} = this.state
        
        return (
            <div className="post-container">
                <div className="post">
                    <div className="text">
                        <h2>{post.title}</h2>
                        <p className="date">{post.created_at}</p>
                        <p>{post.content}</p>
                    </div>
                    <div className="image">
                        <img alt="post_image" src={post.image_url}/>
                    </div>
                </div>
            </div>
        )
    }
}