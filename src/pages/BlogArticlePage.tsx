import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import HeroSecondary from "../components/Hero/HeroSecondary";
import ActualEventsHome from "../components/Actual-Events/Actual-Events-Home";
import "../styles/BlogArticlePage.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faSquareXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import NotFound from "./NotFoundPage";
import RandomBlogs from "../components/Blog/RandomBlogs";

interface BlogData {
  id: string;
  image: string;
  readmore: string;
  category: string;
  mainTitle: string;
  description: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
  title4: string;
  description4: string;
  title5: string;
  description5: string;
  title6: string;
  description6: string;
  title7: string;
  description7: string;
  speakerImage: string;
  speakerName: string;
  shortContent1: string;
  shortContent2: string;
  shortContent3: string;
  shortContent4: string;
  shortContent5: string;
  shortContent6: string;
  shortContent7: string;
  mainCommentImage: string;
  mainCommentName: string;
  mainCommentTime: string;
  mainCommentContent: string;
  commentImage1: string;
  commentName1: string;
  commentTime1: string;
  commentContent1: string;
  commentImage2: string;
  commentName2: string;
  commentTime2: string;
  commentContent2: string;
  commentImage3: string;
  commentName3: string;
  commentTime3: string;
  commentContent3: string;
  mainCommentImage2: string;
  mainCommentName2: string;
  mainCommentTime2: string;
  mainCommentContent2: string;
}

const BlogArticlePage: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<BlogData | undefined>(undefined);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5001/blogs/${id}`)
      .then((response) => response.json())
      .then((data: BlogData) => setEvent(data))
      .catch((error) => console.error("Error fetching event:", error));
  }, [id]);

  if (!event) {
    return <NotFound />;
  }
  return (
    <>
      <Header />
      <HeroSecondary
        title="Како до најдобар избор при процесот на регрутација"
        subtitle="Блог"
        author="Од Ѓоко Вукановски"
        date="20 Јуни, 2024"
        image="images/img1.png"
        socialLinks={{
          linkedin: "https://www.linkedin.com",
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          youtube: "https://www.youtube.com",
        }}
      />
      <Carousel />
      <div className="blog-article-page">
        <div className="blogs-links">
          <a href="/">
            <p className="about-us-hp">Почетна </p>
          </a>
          <p className="blogs-sign">&gt;</p>
          <a href="/blog">
            <p className="blogs-hp">Блогови</p>
          </a>
          <p className="blogs-sign">&gt;</p>
          <p className="blogs-blog-tag">Блог Пост</p>
        </div>
        <div className="blog-article-page-content">
          <div className="blog-article-page-left-content">
            <h1>{event.mainTitle}</h1>

            <p>{event.description}</p>
            <h2>{event.title2}</h2>
            <p>{event.description2}</p>
            <h2>{event.title3}</h2>
            <p>{event.description3}</p>
            <h2>{event.title4}</h2>
            <p>{event.description4}</p>
            <h2>{event.title5}</h2>
            <p>{event.description5}</p>
            <h2>{event.title6}</h2>
            <p>{event.description6}</p>
            <h2>{event.title7}</h2>
            <p>{event.description7}</p>
            <div className="blog-article-page-likes">
              <div className="blog-article-page-likes-1">
                <p>
                  <FontAwesomeIcon icon={faThumbsUp} />
                </p>
                <p>335</p>
              </div>
              <div className="blog-article-page-likes-1">
                <p>
                  <FontAwesomeIcon icon={faHeart} />
                </p>
                <p>86</p>
              </div>
              <div className="blog-article-page-likes-1">
                <p>
                  <FontAwesomeIcon icon={faComment} />
                </p>
                <p>552</p>
              </div>
            </div>
            <div className="blog-article-page-share">
              <p>Ти се допаѓа овој блог? Сподели го!</p>
              <div className="blog-article-page-share-icons">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSquareXTwitter} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
            <div className="blog-article-page-comment">
              <div className="blog-article-page-comment-row">
                <img src="images/au-member-1.png" alt="Image" />
                <p>
                  Според мене тестовите и проценките можат да бидат од голема
                  помош при проценката на вештините и компетенциите на
                  кандидатите...{" "}
                </p>
              </div>
              <div className="blog-article-page-comment-row">
                <div className="attach">
                  <label htmlFor="file-upload" className="file-upload-label">
                    <FontAwesomeIcon icon={faPaperclip} />
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </div>
                <button>Коментирај</button>
              </div>
            </div>

            <div className="blog-article-page-comments">
              <h1>Коментари</h1>
              <div className="shared-comment">
                <img src={event.mainCommentImage} alt="User Image" />
                <div className="shared-comment-name-info">
                  <p>{event.mainCommentName}</p>
                  <span>{event.mainCommentTime}</span>
                </div>
              </div>
              <div className="shared-comment-text">
                <p>{event.mainCommentContent}</p>
                <div className="blog-article-page-likes-comment">
                  <div className="blog-article-page-likes-1">
                    <p>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </p>
                    <p>335</p>
                  </div>
                  <div className="blog-article-page-likes-1">
                    <p>
                      <FontAwesomeIcon icon={faComment} />
                    </p>
                    <p>552</p>
                  </div>
                </div>
              </div>

              <div className="shared-comment-comments-by-others">
                <div className="shared-comment-comment-by-user">
                  <div className="shared-comment-comment-by-user-inner">
                    <img src={event.commentImage1} alt="User Image" />
                    <div className="shared-comment-comment-by-user-info">
                      <p>{event.commentName1}</p>
                      <span>{event.commentTime1}</span>
                    </div>
                  </div>
                  <p>{event.commentContent1}</p>
                </div>
                <div className="shared-comment-comment-by-user">
                  <div className="shared-comment-comment-by-user-inner">
                    <img src={event.commentImage2} alt="User Image" />
                    <div className="shared-comment-comment-by-user-info">
                      <p>{event.commentName2}</p>
                      <p>{event.commentTime2}</p>
                    </div>
                  </div>
                  <p>{event.commentContent2}</p>
                </div>
                <div className="shared-comment-comment-by-user">
                  <div className="shared-comment-comment-by-user-inner">
                    <img src={event.commentImage3} alt="User Image" />
                    <div className="shared-comment-comment-by-user-info">
                      <p>{event.commentName3}</p>
                      <p>{event.commentTime3}</p>
                    </div>
                  </div>
                  <p>{event.commentContent3}</p>
                </div>
                <p>Види повеќе</p>
              </div>
              <div className="shared-comment">
                <img src={event.mainCommentImage2} alt="User Image" />
                <div className="shared-comment-name-info">
                  <p>{event.mainCommentName2}</p>
                  <span>{event.mainCommentTime2}</span>
                </div>
              </div>
              <div className="shared-comment-text">
                <p>{event.mainCommentContent2}</p>
                <div className="blog-article-page-likes-comment">
                  <div className="blog-article-page-likes-1">
                    <p>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </p>
                    <p>335</p>
                  </div>
                  <div className="blog-article-page-likes-1">
                    <p>
                      <FontAwesomeIcon icon={faComment} />
                    </p>
                    <p>552</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-article-page-right-content">
            <img src={event.speakerImage} alt="Image" />
            <div className="blog-article-page-right-content-user-info">
              <p>{event.speakerName}</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="share-with-collegues">
              <p>Сподели со колегите!</p>
              <div className="blog-article-page-share-icons">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSquareXTwitter} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
            <h2>Кратка содржина</h2>
            <p>{event.shortContent1}</p>
            <p>{event.shortContent2}</p>
            <p>{event.shortContent3}</p>
            <p>{event.shortContent4}</p>
            <p>{event.shortContent5}</p>
            <p>{event.shortContent6}</p>
            <p>{event.shortContent7}</p>
          </div>
        </div>
      </div>
      <RandomBlogs
        fetchUrl="http://localhost:5001/blogs"
        title="Слични блогови"
        style={{ marginBottom: "8rem" }}
      />

      <Footer />
    </>
  );
};

export default BlogArticlePage;
