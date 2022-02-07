import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './user.scss';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const User = () => {
    const [page, setPage]= useState("1")
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    const imgPath = `https://image.tmdb.org/t/p/w1280`;
    const imageStyle = {
        "width": "100%",
        "height": "50vh",
        "margin": "auto",
        "marginTop": "5vh",
        "display": "flex"
    }

    const movieBox = {
        "textAlign": "center"
    }

    const pageNum = (e) => {
        setPage(e.target.value)
    }

    const pageDrop = () => {
        const itemPerPage = 20;
        const itemsFetched = 500;
        const totalPage = itemsFetched / itemPerPage;
        const listDrop = document.getElementById("pages")
       if(listDrop.innerHTML == ""){
            for(let i=1; i<=totalPage; i++){
                const node = document.createElement("option")
                node.setAttribute("value", i)
                node.innerText = "Page " + i;
                listDrop.appendChild(node)
            }
       } 
    }

    

    console.log(loading);

    useEffect(() => {
        const response = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=51886207aa76e6de88eb5d7327ea36a1&language=en-US&page=${page}`)
        // .then(res => console.log(res.data)) 
        // https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
        .then(res => setPosts(res.data.results))
        .then(res => setLoading(false))
        .catch(err => console.log(err))
    
    }, [page])

    const handleRouting = async (id) => {
        await setId(id)
        history.push(`/user/${id}`, {postId: id})
    }

    const starClick = () => {
        const starItem = document.getElementById("sim")
       
        console.log("you clicked me simeon")

        if(starItem.style.color === "gold"){
            starItem.style.color = "white";
        } else{
            starItem.style.color = "gold";
        }
    }

  return <div className='user'>
      <label>Page Results : </label>
      <select id="pages" onChange={pageNum} onClick={pageDrop}></select>
      

      {loading ? "Loading posts..." : 
          <div className="postlist">
          {posts.map(({title, id, poster_path}) => {
          return (
                <div className="post" key={id} style={movieBox}>
                <img onClick={() => handleRouting(id)} key={id} src={imgPath + poster_path} style={imageStyle}></img>
                    <h3>{title} <i className="fa fa-star sim" id="sim" onClick={starClick} key={id} style={{paddingRight: "10px", cursor: "pointer", color: "white"}}></i></h3>
                    
                </div>
          )
      })}
      </div>}
      



  </div>;
};

export default User;
