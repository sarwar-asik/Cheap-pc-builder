import React from "react";
import ProductPage from "./products";

const HomePage = ({allProducts}) => {
  return <div>
    <ProductPage allProducts={allProducts}></ProductPage>
  </div>;
};

export default HomePage;





export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-server-indol.vercel.app/api/v1/pc");
  const data = await res.json();


  return {
    props: {
      allProducts: data?.data,
    },
    // revalidate: 30,
  };
};
