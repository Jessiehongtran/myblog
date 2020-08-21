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
                this.setState({post: res.data[0]})
             })
             .catch(err => {
                 console.log(err)
             })
    }

    render(){

        const {post} = this.state
        console.log('post', post)
        
        return (
            <div className="post-container">
                <div className="post">
                    <div className="text">
                        <h2>{this.state.post.title}</h2>
                        <p className="date">{this.state.post.created_at}</p>
                        <p>{this.state.post.content}</p>
                    </div>
                    <div className="image">
                        <img alt="post_image" src={this.state.post.image_url}/>
                    </div>
                </div>
            </div>
        )
    }
}

