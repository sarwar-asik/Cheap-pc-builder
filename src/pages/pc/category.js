import { useGetCategoryQuery } from "@/redux/api/api";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = ({ category }) => {
    const { imageSrc, name } = category;
    
    // ! auth
  const { data: session } = useSession();
  console.log(session);
//  const {user} =session
//  console.log(user);
console.log(session?.user?.email);

//   ! cart data >>
const {data} = useGetCategoryQuery({category:category?.name,user:session?.user?.name})
console.log(data?.data);



  return (
    <div className="bg-white rounded-lg shadow-md px-2 block lg:flex justify-between items-center gap-3 ">
      <div className="flex  items-center justify-center gap-3 mb-2">
        <Image
          src={imageSrc}
          alt={name}
          height={30}
          width={200}
          // layout="responsive"
          className="rounded"
        />
        <aside className="flex flex-col ">
          <h3 className="text-lg font-semibold ml-2">{name}</h3>
        </aside>
      </div>
      <div>

       {data?.data.category === name ?
       <>achi</>
       :
       <Link
       href={`/pc/${name}`}
       className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-full"
     >
       Choose
     </Link>

       }
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