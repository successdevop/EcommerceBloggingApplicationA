import { Route, Routes } from "react-router-dom";
import {
  ABOUT,
  BLOG,
  CATEGORY,
  CONTACT,
  HOME,
  PRIVACY,
} from "./assets/constants/routePaths";

import Navbar from "./components/Navbar";

import {
  AboutPage,
  AuthorPage,
  BlogPage,
  BlogPostPage,
  CategoryPage,
  ContactPage,
  HomePage,
  Privacy_Policy_Page,
} from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path={HOME} element={<HomePage />} />
        <Route path={`${HOME}/:allPost/:id`} element={<BlogPostPage />} />
        <Route path={`${HOME}/:id`} element={<AuthorPage />} />
        <Route path={`${HOME}/:id/:id`} element={<BlogPostPage />} />
        <Route path={BLOG} element={<BlogPage />} />
        <Route path={`${BLOG}/:id`} element={<BlogPostPage />} />
        <Route path={ABOUT} element={<AboutPage />} />
        <Route path={CONTACT} element={<ContactPage />} />
        <Route path={`${CATEGORY}/:postCategory`} element={<CategoryPage />} />
        <Route
          path={`${CATEGORY}/:postCategory/:id`}
          element={<BlogPostPage />}
        />
        <Route path={PRIVACY} element={<Privacy_Policy_Page />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
