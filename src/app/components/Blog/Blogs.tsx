import React from "react";
import BlogCard from "./BlogCard";

const Blog = [
  {
    id: 1,
    Date: "2023-01-01",
    Author: "Autor del blog 1",
    Title: "Blog 1",
    Content: "Descripcion del blog 1",
    Img: "/blogs-img/blog1.jpg",
  },
  {
    id: 2,
    Date: "2023-01-01",
    Author: "Autor del blog 2",
    Title: "Blog 1",
    Content: "Descripcion del blog 2",
    Img: "/blogs-img/blog2.jpg",
  },
  {
    id: 3,
    Date: "2023-01-01",
    Author: "Autor del blog 3",
    Title: "Blog 1",
    Content: "Descripcion del blog 3",
    Img: "/blogs-img/blog3.jpg",
  },
];

const Blogs = () => {
  return (
    <>
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Publicaciones Recientes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {Blog.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
