import React from "react";
import "./Blog-Home.css";
import { Link } from "react-router-dom";

const BlogHome: React.FC = () => {
  return (
    <div className="blog-home">
      <div className="first-row">
        <img src="/images/blog-home-img1.jfif" alt="Blog Image 1" />
        <div className="fr-text">
          <h1>
            Кажи ги своите мислења и поврзи се со останатите HR ентузијасти
          </h1>
          <p>
            Во нашиот блог отсега ке можеш да разменуваш мислења на актуелни
            теми со останатите корисници
          </p>
        </div>
      </div>
      <div className="our-blog-home">
        <p>Упати се уште сега кон</p>
        <Link to="/blog">
          <button>Нашиот блог</button>
        </Link>
      </div>
      <div className="blog-dot-rectangle"></div>
      <div className="blog-home-imgs">
        <img
          className="blog-home-img2"
          src="/images/blog-home-img2.jfif"
          alt="Blog Home Image 2"
        />
        <img
          className="blog-home-img3"
          src="/images/blog-home-img3.jfif"
          alt="Blog Home Image 3"
        />
      </div>
      <div className="blog-dots-div"></div>
      <div className="blank-div1"></div>
      <div className="blank-div2"></div>
      <div className="blank-div3"></div>
    </div>
  );
};

export default BlogHome;
