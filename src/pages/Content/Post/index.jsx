import React from "react";
import "./style.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Typography from "@mui/material/Typography";

const PostPage = () => {
  return (
    <HelmetProvider>
      <Container className="About-header mt-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Post | Elessar </title>
        </Helmet>
        <Row className="mb-5 mt-5">
          <Col lg="8">
            <h1 className="display-4 mb-4 mt-5"> Post </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1Hm9pCaeo9v2ZpTeRVoLBMsY8xLbwbIsE"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1Hm9pCaeo9v2ZpTeRVoLBMsY8xLbwbIsE"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://drive.google.com/uc?export=view&id=1Hm9pCaeo9v2ZpTeRVoLBMsY8xLbwbIsE"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container className="mt-5 mb-5">
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Container>
      </Container>
    </HelmetProvider>
  );
};

export default PostPage;
