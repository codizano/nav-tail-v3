import React from "react";
import BlogCard from "@components/Blog/BlogCard";
import { Blog } from "@data/sampleData";

const Blogs = () => {
  return (
    <div className="bg-gray-100">
      <section className="container py-8">
        <h1 className="mb-8  py-2 pl-2 text-center text-3xl font-bold">
          Publicaciones Recientes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {Blog.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
