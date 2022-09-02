import React from "react";
import "./style.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import PostComponenent from "./post/index.jsx";
import Typography from "@mui/material/Typography";

const dates = ["07-06-2022", "23-06-2022"];

const dataportfolio = [
  {
    img: "https://drive.google.com/uc?export=view&id=1Hm9pCaeo9v2ZpTeRVoLBMsY8xLbwbIsE",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    date: "07-06-2022",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    date: "07-06-2022",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    date: "07-06-2022",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    date: "07-06-2022",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    date: "23-06-2022",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    date: "23-06-2022",
  },

  {
    img: "https://picsum.photos/400/600/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    date: "23-06-2022",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    date: "23-06-2022",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    date: "07-06-2022",
  },
  {
    img: "https://picsum.photos/400/550/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    date: "07-06-2022",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    date: "23-06-2022",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    date: "07-06-2022",
  },
];

const PostsPage = () => {
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

        {dates.map((date, i) => {
          return (
            <Container key={i}>
              <Typography variant="h4" gutterBottom className="ms-0 me-auto">
                {date}
              </Typography>
              <div className="mb-5 mt-5 po_items_ho">
                {dataportfolio
                  .filter((data) => data.date === date)
                  .map((data, ind) => {
                    return <PostComponenent data={data} key={ind} />;
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
