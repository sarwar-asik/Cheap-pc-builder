import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoryPage from "./category";

const PcBuilderPage = ({categories}) => {
  // console.log(categories);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        {categories?.map((category, index) => {
          return (
            <CategoryPage key={index + 1} category={category}></CategoryPage>
          );
        })}
      </div>
    </div>
  );
};

export default PcBuilderPage;



export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/category");
  const data = await res.json();


  return {
    props: {
      categories: data?.data,
    },
    // revalidate: 30,
  };
};