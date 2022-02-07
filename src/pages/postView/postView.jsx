import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './postView.scss'

const PostView = (props) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(props.location.state.postId);

    const id = props.location.state.postId;

    const imageStyle = {
        "width": "100%",
        "height": "20vh",
        "margin": "auto",
        "display": "flex",
        "margin-top": "5vh"
    }

    const movieBox = {
        "textAlign": "center"
    }

    const imgPath = `https://image.tmdb.org/t/p/w1280`
    // https://api.themoviedb.org/3/movie/${id}/images?api_key=51886207aa76e6de88eb5d7327ea36a1&language=en-US
    useEffect(() => {
        const response = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=51886207aa76e6de88eb5d7327ea36a1&language=en-US`) 
        // .then(res => console.log(res.data))
        .then(res => setPost(res.data))
        .then(res => setLoading(false))
        .catch(err => console.log(err))
    
    }, [])

    const movieURL = "https://www.themoviedb.org/movie/";
  return <div className='post-view'>
      {loading ? "loading single post" :
          <div className="post" style={movieBox}>
            <div className="movie-box">

                <div className="img-text">

                    <div className="image-box">
                        
                        <img src={imgPath + post.poster_path} style={imageStyle} />
                        
                    </div>
                    
                    <div className="texts">

                        <h2>{post.title}</h2>
                        <h3>Rating: {post.vote_average}</h3>
                        <h3>Release Date: {post.release_date}</h3>
                        <a href={movieURL + post.id} target="_BLANK" style={{textDecoration: "none", color: "gold"}}> Go to movie listing</a>

                    </div>

                
                </div>

               

                <div className="overview-text">

                <hr></hr>
                    
                    <h3>Overview</h3>
                    <p>{post.overview}</p>

                   <Link to="/users" style={{textDecoration: "none", color:"#fff"}}> <button>Previous Page</button>  </Link> 

                </div>

            </div>

          
                    
                    
                    
                    

        </div>}
  </div>;
};

export default PostView;
