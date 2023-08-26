import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCategory = ({ categories }) => {
  return (
    <div className="my-5  text-center ">
      <h2 className="text-[1.8rem] font-extrabold mt-7">Feature Category</h2>
      <Row  gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}>
        {categories?.map((category) => {
          return (
            <Col
            xs={24}
            lg={8}
              key={category?.category}
           
              style={{width:"100%",marginBlock:"15px"}}
            >
              <Link
                className="shadow-2xl my-3 text-center"
                href={`/pc/${category?.category}`}
              >
                <h2 className="text-xl font-semibold font-serif">
                  {category?.category}
                </h2>
                <Image
                  src={category?.imageSrc}
                  alt="category"
                  height={200}
                  width={300}
                  style={{marginInline:"auto",borderRadius:"15px",height:"140px"}}
             
                />
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HomeCategory;
