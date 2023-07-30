import { useGetCategoryQuery } from "@/redux/api/api";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {CloseOutlined } from "@ant-design/icons"
import { Button } from "antd";
import { removeOne } from "@/redux/fetures/builtPcSlice";

const CategoryPage = ({ categoryData }) => {
  const disPatch = useDispatch()
  const { imageSrc, category } = categoryData;

  const { products} = useSelector((state) => state.pcBuilt);
  // console.log("🚀 ~ file: category.js:12 ~ CategoryPage ~ products:", products)

  // const [added, setAdded] = useState({});

  // if(products){
  //  const isExist = products.filter(product =>product?.category === category)
  //  console.log(isExist);
  // }

  let added = null

  const isExist = products.find((product) => product?.category === category);
    if (isExist) {
      console.log(isExist);
      added = isExist
    }

  // useEffect(() => {
  //   const isExist = products.find((product) => product?.category === category);
  //   if (isExist) {
  //     console.log(isExist);
  //     added = isExist
  //   }
  // }, [products, category]);
  // ! auth
  const { data: session } = useSession();

  //  const {user} =session

  // console.log(session?.user?.email);

  //   ! cart data >>
  // const {data} = useGetCategoryQuery({category:category?.name,user:session?.user?.name})
  // console.log(data?.data);
  const handleRemove =data =>{
    console.log(data);
    disPatch(removeOne(data))
  }

  return (
    <div className="bg-white rounded-lg shadow-md px-2 block lg:flex justify-between items-center gap-3 ">
      <div className="flex  items-center justify-center gap-3 mb-2">
        <Image
          src={imageSrc}
          alt={category}
          height={30}
          width={200}
          // layout="responsive"
          className="rounded"
        />
        <aside className="flex flex-col ">
          <h3 className="text-lg font-semibold ml-2">{category}</h3>
        </aside>
      </div>
      <div>
        {added?._id ? (
          <>
            <Image
              src={added?.image}
              alt={added?.category}
              height={30}
              width={100}
              // layout="responsive"
              className="rounded"
            />
            <h2>{added?.productName}</h2>
            <h2>Status ::: {added?.status}</h2>
           <button className="p-3 text-2xl bg-slate-300 text-red-600 rounded-full" onClick={()=>handleRemove(added)} ><CloseOutlined /></button>


           
          </>
        ) : (
          <Link
            href={`/pc/${category}`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Choose
          </Link>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

// export const getStaticProps = async (context) => {
//     const { params } = context;
//     const { name } = params;

//     // Fetch data based on the category name and user's email (if available in session)
//     const session = await getSession(context);
//     const email = session?.user?.email;
//     const res = await fetch(
//       `http://localhost:5000/api/v1/pc-cart/${name}?email=${email}`
//     );
//     const data = await res.json();
//     console.log(data, "from Category");

//     return {
//       props: {
//         category: data?.data,
//         product: data?.product, // Replace 'product' with the actual key containing product data
//       },
//       revalidate: 30,
//     };
//   };
