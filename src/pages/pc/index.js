import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CategoryPage from "./category";
import { useSelector } from "react-redux";
import mainAPi from "@/components/mainAPi";

const PcBuilderPage = ({categories}) => {
  const { total } = useSelector((state) => state.pcBuilt);


  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        <h2>Total Cost :: {total}</h2>
        {categories?.map((categoryData, index) => { 
          return (
            <CategoryPage key={index + 1} categoryData={categoryData} ></CategoryPage>
          );
        })}
      </div>
    </div>
  );
};

export default PcBuilderPage;



export const getStaticProps = async () => {
  const res = await fetch(`${mainAPi}/category`);
  const data = await res.json();


  return {
    props: {
      categories: data?.data,
    },
    // revalidate: 30,
  };
};