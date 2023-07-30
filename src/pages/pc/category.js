

import Image from "next/image";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import {CloseOutlined } from "@ant-design/icons"

import { removeOne } from "@/redux/fetures/builtPcSlice";

const CategoryPage = ({ categoryData }) => {
  const disPatch = useDispatch()
  // const { imageSrc, category } = categoryData;
  

  const { products} = useSelector((state) => state.pcBuilt);
  

  let added = null

  const isExist = products.find((product) => product?.category === categoryData?.category);
    if (isExist) {
      console.log(isExist);
      added = isExist
    }

 
  // ! auth
  // const { data: session } = useSession();



  //   ! cart data >>

  const handleRemove =data =>{
    console.log(data);
    disPatch(removeOne(data))
  }

  return (
    <div className="bg-white rounded-lg shadow-md px-2 block lg:flex justify-between items-center gap-3 ">
      <div className="flex  items-center justify-center gap-3 mb-2">
        <Image
          src={categoryData?.imageSrc}
          alt={categoryData?.category}
          height={30}
          width={200}
          // layout="responsive"
          className="rounded"
        />
        <aside className="flex flex-col ">
          <h3 className="text-lg font-semibold ml-2">{categoryData?.category}</h3>
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
            href={`/pc/${categoryData?.category}`}
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
