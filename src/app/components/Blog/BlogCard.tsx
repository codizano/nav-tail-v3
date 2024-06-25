import React from "react";

//typescript
type BlogCardProps = {
  Img: string;
  Date: string;
  Author: string;
  Title: string;
  Content: string;
};

const BlogCard = ({ Img, Date, Author, Title, Content }: BlogCardProps) => {
  return (
    <>
      <div className="p-4 shadow-lg">
        <div className="overflow-hidden">
          <img
            src={Img}
            alt="No Image"
            className="mx-auto h-[250px] w-full object-cover transtion duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="flex justify-between pt-2 text-slate-600">
          <p>{Date}</p>
          <p className="line-clamp-1">{Author}</p>
        </div>
        <div className="space-y-2 py-3">
          <h1 className="line-clamp-1 font-bold">{Title}</h1>
          <p className="line-clamp-2">{Content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
