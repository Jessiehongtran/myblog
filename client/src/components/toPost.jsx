import React from 'react';
import '../styles/topost.scss';
import { API_URL } from '../config';
import Axios from 'axios';

export default class ToPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: {},
            imgUrl: "",
            post: {
                title: "",
                content: ""
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        
        if (e.target.name == "image"){
            const image = e.target.files[0]
            this.setState({image: image})
            var reader = new FileReader();
            reader.readAsDataURL(image)
            reader.onloadend = () => {
                    console.log('src', reader.result)
                    this.setState({imgUrl: reader.result})
                }
        }
        else {
            this.setState({post: 
                {
                    ...this.state.post,
                    [e.target.name]: e.target.value
                }
            })
        }
        
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append(1, this.state.image)

        Axios.post(`${API_URL}/posts`, this.state.post)
             .then(res => {
                 const postId = res.data.id
                 Axios.post(`${API_URL}/images/forPost/${postId}`, formData)
                      .then(res => {
                          console.log(res.data)
                      })
                      .catch(err => {
                        console.log(err)
                      })
             })
             .catch(err => {
                 console.log(err)
             })
    }

    render(){

        console.log('state', this.state)

        return (
            <form className="topost" onSubmit={this.handleSubmit}>
                <button>Publish</button>
                <input
                    placeholder="title"
                    type="text"
                    name="title"
                    className="title"
                    onChange={this.handleChange}   
                />
                <textarea
                    placeholder="content"
                    name="content"
                    className="content"
                    onChange={this.handleChange}  
                />
                <input
                    type="file"
                    name="image"
                    className="image"
                    onChange={this.handleChange}  
                />
                <img
                    className="image_display"
                    src={this.state.imgUrl} 
                />
               
            </form>
        )
    }
}