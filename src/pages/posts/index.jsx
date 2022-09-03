import React, { useState, useEffect } from "react";
import "./style.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import PostComponenent from "./post/index.jsx";
import Typography from "@mui/material/Typography";

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  var postDates = [];

  useEffect(() => {
    const q = query(collection(db, "Posts"), orderBy("CapturedOn", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  postDates = posts.map((data) => {
    const date = new Date(data.data.CapturedOn);

    const year = date.getUTCFullYear();

    const monthName = date.toLocaleString("default", {
      month: "long",
    });

    return monthName + " " + year;
  });

  return (
    <HelmetProvider>
      <Container className="About-header mt-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Posts | Elessar </title>
        </Helmet>
        <Row className="mb-5">
          <Col lg="8">
            <h2 className="display-4 mb-4  mt-5"> Posts </h2>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {postDates &&
          postDates.map((date, i) => {
            return (
              <Container key={i}>
                <div className="d-flex justify-content-start m-4">
                  <Typography
                    variant="h4"
                    gutterBottom
                    className="ms-0 me-auto"
                  >
                    {date}
                  </Typography>
                </div>
                <div className="mb-5 mt-5 po_items_ho">
                  {posts &&
                    posts
                      .filter((data) => {
                        const captureDate = new Date(data.data.CapturedOn);

                        const year = captureDate.getUTCFullYear();

                        const monthName = captureDate.toLocaleString(
                          "default",
                          {
                            month: "long",
                          }
                        );
                        return monthName + " " + year === date;
                      })
                      .map((data, ind) => {
                        return (
                          <PostComponenent
                            data={data.data}
                            key={ind}
                            id={data.id}
                          />
                        );
                      })}
                </div>
              </Container>
            );
          })}
      </Container>
    </HelmetProvider>
  );
};

export default PostsPage;
