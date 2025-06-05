import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import Blogs from "../pages/blogs/Blogs";
import AddBlog from "../pages/blogs/addBlog/AddBlog.jsx";
import ManageBlogs from "../pages/blogs/manageBlog/ManageBlogs.jsx";
import UpdateBlog from "../pages/blogs/manageBlog/UpdateBlog.jsx";
import BlogDetails from "../pages/blogs/BlogDetails.jsx";
import About from "../pages/about/About.jsx";
import Contact from "../pages/contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: Home },
      { path: "/blogs", Component: Blogs },
      { path: "/blogs/:id", Component: BlogDetails },
      { path: "/add-blog", Component: AddBlog },
      { path: "/manage-blog", Component: ManageBlogs },
      { path: "/blogs/edit/:id", Component: UpdateBlog },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact }
    ]
  }
]);

export default router;
