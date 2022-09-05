import React, { useState, useEffect } from "react";
import "./style.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { db } from "../../../firebase";
import { getDoc, doc } from "firebase/firestore";

const PostPage = () => {
  const params = useParams();

  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPostData = async () => {
      try {
        const docRef = doc(db, "Posts", params.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost(docSnap.data());
          setLoading(false);
        } else {
          alert("Error Fetching Document");
        }
      } catch (error) {
        alert(error);
      }
    };
    getPostData();
  }, [params.id]);

  const getDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const monthName = date.toLocaleString("default", {
      month: "long",
    });
    const day = date.getDate();
    return day + " " + monthName + " " + year;
  };

  const getTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  };

  var images = [];
  var datePosted;
  var dateCaptured;
  var timeCaptured;

  if (!loading) {
    images = post.Images;
    datePosted = getDate(post.PostedOn);
    dateCaptured = getDate(post.CapturedOn);
    timeCaptured = getTime(post.CapturedOn);
  }

  return (
    <HelmetProvider>
      <Container className="About-header mt-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Post | Elessar </title>
        </Helmet>

        {loading ? (
          <CircularProgress color="success" />
        ) : (
          <div>
            <Row className="mb-5 mt-5">
              <Col lg="8">
                <h1 className="display-4 mb-4 mt-5"> Post </h1>
                <hr className="t_border my-4 ml-0 text-left" />
              </Col>
            </Row>
            <div className="d-flex mt-5 mb-5">
              <Typography variant="h6">Posted On : {datePosted}</Typography>
            </div>
            <Carousel>
              {images &&
                images.map((data, ind) => (
                  <Carousel.Item key={ind}>
                    <img
                      className="d-block w-100"
                      src={data}
                      alt={post["Name"]}
                    />
                    <Carousel.Caption>
                      <h4>{post["Name"]}</h4>
                      <p>{post["About"]}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
            </Carousel>
            <Container className="mt-5 mb-5">
              <div className="d-flex mt-5 mb-5">
                <Typography variant="h4">{post.Name}</Typography>
              </div>

              <div className="d-flex mt-2 mb-2">
                <Typography variant="h6">{post.About}</Typography>
              </div>

              <div className="d-flex mt-5 mb-5">
                <Typography variant="body1">
                  Captured On : {dateCaptured}, {timeCaptured}
                </Typography>
              </div>

              <div className="d-flex">
                <Typography variant="body1" gutterBottom>
                  {post["Description"]}
                </Typography>
              </div>

              <div className="text-center mt-5 mb-5">
                <img
                  className="w-75 img-fluid"
                  src={post["StudyImage"]}
                  alt={post["Name"]}
                />
              </div>

              <div className="mt-5 mb-5">
                <h5 style={{ textAlign: "start" }}>References:</h5>
                <ol style={{ textAlign: "start" }}>
                  {post["References"].map((data, i) => (
                    <li className="ms-0" key={i}>
                      {data}
                    </li>
                  ))}
                </ol>
              </div>
            </Container>
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};

export default PostPage;
