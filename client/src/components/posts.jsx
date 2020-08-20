import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/posts.scss';
import { API_URL } from '../config';
import Axios from 'axios';


export default class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        Axios.get(`${ API_URL }/posts`)
             .then(res => {
                 this.setState({posts: res.data})
             })
             .catch(err => {
                 console.log(err)
             })
    }

    render(){
        return (
            <div className="posts-container">
                <div className="posts">
                    <h1>My blog</h1>
                    {this.state.posts.map(post => 
                    <div className="each-post">
                        <div className="image">
                            <img alt="" src={post.image}/>
                        </div>
                        <div className="text">
                            <h2>{post.title}</h2>
                            <p className="date">{post.created_at}</p>
                            <p>{post.content}</p>
                            <Link to={`/post/${post.id}`}>Read more ...</Link>
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}