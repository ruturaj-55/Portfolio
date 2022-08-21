import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/home";
import BlogsPage from "../pages/blogs";
import PostsPage from "../pages/posts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="blogs" element={<BlogsPage />} />
      <Route path="posts" element={<PostsPage />} />
    </Routes>
  );
};

export default AppRoutes;
