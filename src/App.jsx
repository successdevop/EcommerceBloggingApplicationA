import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import {
  ABOUT,
  BLOG,
  CATEGORY,
  CONTACT,
  HOME,
  PRIVACY,
} from "./assets/constants/routePaths";

import Navbar from "./components/Navbar";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const AuthorPage = lazy(() => import("./pages/AuthorPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Privacy_Policy_Page = lazy(() => import("./pages/Privacy_Policy_Page"));
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <h1 className="pt-16 pb-[6.4rem] px-4 max-w-[76rem] mx-auto text-[4rem] text-[#592EA9]">
            Loading.....
          </h1>
        }
      >
        <Routes>
          <Route index path={HOME} element={<HomePage />} />
          <Route path={`${HOME}/:allPost/:id`} element={<BlogPostPage />} />
          <Route path={`${HOME}/:id`} element={<AuthorPage />} />
          <Route path={`${HOME}/:id/:id`} element={<BlogPostPage />} />
          <Route path={BLOG} element={<BlogPage />} />
          <Route path={`${BLOG}/:id`} element={<BlogPostPage />} />
          <Route path={ABOUT} element={<AboutPage />} />
          <Route path={CONTACT} element={<ContactPage />} />
          <Route
            path={`${CATEGORY}/:postCategory`}
            element={<CategoryPage />}
          />
          <Route
            path={`${CATEGORY}/:postCategory/:id`}
            element={<BlogPostPage />}
          />
          <Route path={PRIVACY} element={<Privacy_Policy_Page />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
