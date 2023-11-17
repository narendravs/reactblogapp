import React, { useContext, useEffect, useState } from "react";
//import cats from "../images/pexels-cats-coming-920220.jpg";
import edit from "../images/edit.png";
import delet from "../images/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

function Single() {
  const [post, setPost] = useState({});

  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        console.log(res.data);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img
          className="contimg"
          src={`../upload/${post?.img}`}
          name=""
          alt=""
        />

        <div className="user">
          {post.userImg && (
            <img className="usrimg" src={post?.userImg} alt="" />
          )}
          <div className="info">
            <span className="span">{post?.username}</span>
            <p className="p1">posted {moment(post?.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img className="limg" src={edit} alt="" />
              </Link>
              <img className="limg" onClick={handleDelete} src={delet} alt="" />
            </div>
          )}
        </div>
        <h1 className="h1">{post.title}</h1>
        {getText(post.desc)}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
}

export default Single;
