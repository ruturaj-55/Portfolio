import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/home";
import BlogsPage from "../pages/blogs";
import PostsPage from "../pages/posts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="blogs" exact element={<BlogsPage />} />
      <Route path="posts" exact element={<PostsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
